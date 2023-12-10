import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ParkingPlace } from './entities/parking-place.entity'
import { ParkingPlaceDto } from './dto/parking-place.dto'

@Injectable()
export class ParkingPlacesService {
  constructor(
    @InjectRepository(ParkingPlace)
    private parkingPlaceRepository: Repository<ParkingPlace>,
  ) {}

  create(parkingPlaceDto: ParkingPlaceDto): Promise<ParkingPlace> {
    const parkingPlace = this.parkingPlaceRepository.create(parkingPlaceDto)
    return this.parkingPlaceRepository.save(parkingPlace)
  }

  findAll(): Promise<ParkingPlace[]> {
    return this.parkingPlaceRepository.find()
  }

  async findOne(id: number): Promise<ParkingPlace> {
    const parkingPlace = await this.parkingPlaceRepository.findOneBy({ id })
    if (!parkingPlace) {
      throw new NotFoundException(`Parking place with id ${id} not found`)
    }
    return parkingPlace
  }

  async update(id: number, parkingPlaceDto: ParkingPlaceDto): Promise<ParkingPlace> {
    const parkingPlace = await this.parkingPlaceRepository.findOneBy({ id })
    if (!parkingPlace) {
      throw new NotFoundException(`Parking place with id ${id} not found`)
    }
    const updatedParkingPlace = { ...parkingPlace, ...parkingPlaceDto }
    return this.parkingPlaceRepository.save(updatedParkingPlace)
  }

  async remove(id: number): Promise<void> {
    const isParkingPlaceExisting = await this.parkingPlaceRepository.exist({
      where: { id },
    })
    if (!isParkingPlaceExisting) {
      throw new NotFoundException(`Parking place with id ${id} not found`)
    }
    await this.parkingPlaceRepository.delete(id)
  }
}
