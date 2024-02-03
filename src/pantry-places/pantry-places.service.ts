import { Injectable, NotFoundException } from '@nestjs/common'
import { PantryPlaceDto } from './dto/pantry-place.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { PantryPlace } from './entities/pantry-place.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PantryPlacesService {
  constructor(
    @InjectRepository(PantryPlace)
    private pantryPlaceRepository: Repository<PantryPlace>,
  ) {}

  create(pantryPlaceDto: PantryPlaceDto): Promise<PantryPlace> {
    const pantryPlace = this.pantryPlaceRepository.create(pantryPlaceDto)
    return this.pantryPlaceRepository.save(pantryPlace)
  }

  findAll(): Promise<PantryPlace[]> {
    return this.pantryPlaceRepository.find({ order: { id: 'ASC' } })
  }

  async findOne(id: number): Promise<PantryPlace> {
    const pantryPlace = await this.pantryPlaceRepository.findOneBy({ id })
    if (!pantryPlace) {
      throw new NotFoundException(`Pantry place with id ${id} not found`)
    }
    return pantryPlace
  }

  async update(id: number, pantryPlaceDto: PantryPlaceDto): Promise<PantryPlace> {
    const pantryPlace = await this.pantryPlaceRepository.findOneBy({ id })
    if (!pantryPlace) {
      throw new NotFoundException(`Pantry place with id ${id} not found`)
    }
    const updatedPantryPlace = { ...pantryPlace, ...pantryPlaceDto }
    return this.pantryPlaceRepository.save(updatedPantryPlace)
  }

  async remove(id: number): Promise<void> {
    const isPantryPlaceExisting = await this.pantryPlaceRepository.exist({
      where: { id },
    })
    if (!isPantryPlaceExisting) {
      throw new NotFoundException(`Pantry place with id ${id} not found`)
    }
    await this.pantryPlaceRepository.delete(id)
  }
}
