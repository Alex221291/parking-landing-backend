import { Module } from '@nestjs/common'
import { PurchaseRequestsService } from './purchase-requests.service'
import { PurchaseRequestsController } from './purchase-requests.controller'
import { ParkingPlacesModule } from 'src/parking-places/parking-places.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PurchaseRequest } from './entities/purchase-request.entity'

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseRequest]), ParkingPlacesModule],
  controllers: [PurchaseRequestsController],
  providers: [PurchaseRequestsService],
})
export class PurchaseRequestsModule {}
