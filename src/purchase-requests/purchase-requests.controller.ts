import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Patch,
} from '@nestjs/common'
import { PurchaseRequestsService } from './purchase-requests.service'
import { PurchaseRequestDto } from './dto/purchase-request.dto'
import { PublicRoute } from 'src/infrastructure/decorators/public-route.decorator'
import { UpdatePurchaseRequestStatusDto } from './dto/update-purchase-request-status.dto'

@Controller('purchase-requests')
export class PurchaseRequestsController {
  constructor(private readonly purchaseRequestsService: PurchaseRequestsService) {}

  @PublicRoute()
  @Post()
  create(@Body() purchaseRequestDto: PurchaseRequestDto) {
    return this.purchaseRequestsService.create(purchaseRequestDto)
  }

  @Get()
  findAll() {
    return this.purchaseRequestsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseRequestsService.findOne(id)
  }

  @Patch(':id/update-status')
  approve(@Body() updatePurchaseRequestStatusDto: UpdatePurchaseRequestStatusDto) {
    return this.purchaseRequestsService.updateStatus(updatePurchaseRequestStatusDto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseRequestsService.remove(id)
  }
}
