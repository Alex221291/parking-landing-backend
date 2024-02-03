import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PurchaseRequest } from './entities/purchase-request.entity'
import { Repository } from 'typeorm'
import { PurchaseRequestDto } from './dto/purchase-request.dto'
import { PurchaseRequestStatusesEnum } from './enums/purchase-requests-statuses.enum'
import { ParkingPlacesService } from 'src/parking-places/parking-places.service'
import { ParkingPlaceStatusesEnum } from 'src/infrastructure/enums/place-statuses.enum'

@Injectable()
export class PurchaseRequestsService {
  constructor(
    @InjectRepository(PurchaseRequest)
    private purchaseRequestRepository: Repository<PurchaseRequest>,
    private parkingPlacesService: ParkingPlacesService,
  ) {}

  async create(purchaseRequestDto: PurchaseRequestDto): Promise<PurchaseRequest> {
    const isPurchaseRequestForParkingPlaceExisting =
      await this.purchaseRequestRepository.exist({
        where: { parkingPlace: { id: purchaseRequestDto.parkingPlaceId } },
      })
    if (isPurchaseRequestForParkingPlaceExisting) {
      throw new BadRequestException(
        `Purchase request with parking place id ${purchaseRequestDto.parkingPlaceId} already exists`,
      )
    }
    const parkingPlace = await this.parkingPlacesService.findOne(
      purchaseRequestDto.parkingPlaceId,
    )
    const purchaseRequest = this.purchaseRequestRepository.create({
      ...purchaseRequestDto,
      parkingPlace,
      status: PurchaseRequestStatusesEnum.Idle,
    })
    await this.purchaseRequestRepository.save(purchaseRequest)
    await this.parkingPlacesService.update(parkingPlace.id, {
      area: parkingPlace.area,
      currentPrice: parkingPlace.currentPrice,
      floor: parkingPlace.floor,
      previousPrice: parkingPlace.previousPrice,
      status: ParkingPlaceStatusesEnum.Booked,
      type: parkingPlace.type,
    })
    return purchaseRequest
  }

  findAll(): Promise<PurchaseRequest[]> {
    return this.purchaseRequestRepository.find({ relations: { parkingPlace: true } })
  }

  async findOne(id: number): Promise<PurchaseRequest> {
    const purchaseRequest = await this.purchaseRequestRepository.findOne({
      where: { id },
      relations: { parkingPlace: true },
    })
    if (!purchaseRequest) {
      throw new NotFoundException(`Purchase request with id ${id} not found`)
    }
    return purchaseRequest
  }

  async updateStatus(id: number, status: PurchaseRequestStatusesEnum): Promise<void> {
    const purchaseRequest = await this.purchaseRequestRepository.findOne({
      where: { id },
      relations: { parkingPlace: true },
    })
    if (!purchaseRequest) {
      throw new NotFoundException(`Purchase request with id ${id} not found`)
    }
    if (purchaseRequest.status !== PurchaseRequestStatusesEnum.Idle) {
      throw new BadRequestException(
        `Purchase request with id ${id} has already been approved/rejected`,
      )
    }
    purchaseRequest.status = status
    const parkingPlace = await this.parkingPlacesService.findOne(
      purchaseRequest.parkingPlace.id,
    )
    if (status === PurchaseRequestStatusesEnum.Approved) {
      parkingPlace.status = ParkingPlaceStatusesEnum.Sold
    }
    if (status === PurchaseRequestStatusesEnum.Rejected) {
      parkingPlace.status = ParkingPlaceStatusesEnum.Free
    }
    await this.purchaseRequestRepository.save(purchaseRequest)
    await this.parkingPlacesService.update(parkingPlace.id, { ...parkingPlace })
  }

  async remove(id: number): Promise<void> {
    const isPurchaseRequestExisting = await this.purchaseRequestRepository.exist({
      where: { id },
    })
    if (!isPurchaseRequestExisting) {
      throw new NotFoundException(`Purchase request with id ${id} not found`)
    }
    await this.purchaseRequestRepository.delete(id)
  }
}
