import { Module } from '@nestjs/common'
import { SeedService } from './seed.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/users/entities/user.entity'
import { ParkingPlace } from 'src/parking-places/entities/parking-place.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, ParkingPlace])],
  providers: [SeedService],
})
export class SeedModule {}
