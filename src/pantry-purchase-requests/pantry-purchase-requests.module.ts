import { Module } from '@nestjs/common'
import { PantryPurchaseRequestsService } from './pantry-purchase-requests.service'
import { PantryPurchaseRequestsController } from './pantry-purchase-requests.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PantryPurchaseRequest } from './entities/pantry-purchase-request.entity'
import { PantryPlacesModule } from 'src/pantry-places/pantry-places.module'

@Module({
  imports: [TypeOrmModule.forFeature([PantryPurchaseRequest]), PantryPlacesModule],
  controllers: [PantryPurchaseRequestsController],
  providers: [PantryPurchaseRequestsService],
})
export class PantryPurchaseRequestsModule {}
