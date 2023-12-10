import { Injectable } from '@nestjs/common'
import { usersSeedData } from './data/users.data'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/users/entities/user.entity'
import { Repository } from 'typeorm'
import { ParkingPlace } from 'src/parking-places/entities/parking-place.entity'
import { parkingPlacesSeedData } from './data/parking-places.data'

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(ParkingPlace)
    private parkingPlaceRepository: Repository<ParkingPlace>,
  ) {}

  async seedUsers() {
    console.group('Users Seed')
    console.log('Users seed start')
    const usersAmount = await this.userRepository.count()
    if (usersAmount >= usersSeedData.length) {
      console.log('There is already %d users in database', usersAmount)
      console.log('Users seed is skipped')
      console.groupEnd()
      return
    }
    const createUserPromises = usersSeedData.map((userSeedData) => {
      const isUserExisting = this.userRepository.exist({
        where: { username: userSeedData.username },
      })
      if (isUserExisting) {
        return async (): Promise<void> => null
      }
      const user = this.userRepository.create(userSeedData)
      console.log(userSeedData.username, 'created')
      return this.userRepository.save(user)
    })
    await Promise.all(createUserPromises)
    console.log('Users seed end')
    console.groupEnd()
  }

  async seedParkingPlaces() {
    console.group('Parking Places Seed')
    console.log('Parking places seed start')
    const parkingPlacesAmount = await this.parkingPlaceRepository.count()
    if (parkingPlacesAmount) {
      console.log('There is already %d parkingPlaces in database', parkingPlacesAmount)
      console.log('Parking places seed is skipped')
      console.groupEnd()
      return
    }
    const createParkingPlacePromises = parkingPlacesSeedData.map(
      (parkingPlaceSeedData) => {
        const parkingPlace = this.parkingPlaceRepository.create(parkingPlaceSeedData)
        return this.parkingPlaceRepository.save(parkingPlace)
      },
    )
    await Promise.all(createParkingPlacePromises)
    console.log('Created and saved %d parking places', parkingPlacesSeedData.length)
    console.log('Parking places seed end')
    console.groupEnd()
  }
}
