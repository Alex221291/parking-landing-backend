import { Module } from '@nestjs/common'
import { ParkingPlacesService } from './parking-places.service'
import { ParkingPlacesController } from './parking-places.controller'

@Module({
  controllers: [ParkingPlacesController],
  providers: [ParkingPlacesService],
  exports: [ParkingPlacesService],
})
export class ParkingPlacesModule {}
