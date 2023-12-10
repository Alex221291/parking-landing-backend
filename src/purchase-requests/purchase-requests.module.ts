import { Module } from '@nestjs/common'
import { PurchaseRequestsService } from './purchase-requests.service'
import { PurchaseRequestsController } from './purchase-requests.controller'
import { ParkingPlacesModule } from 'src/parking-places/parking-places.module'

@Module({
  imports: [ParkingPlacesModule],
  controllers: [PurchaseRequestsController],
  providers: [PurchaseRequestsService],
})
export class PurchaseRequestsModule {}
