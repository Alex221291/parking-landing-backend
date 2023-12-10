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
import { RequiredRoles } from 'src/infrastructure/decorators/required-roles.decorator'
import { UserRolesEnum } from 'src/infrastructure/enums/user-roles.enum'
import { PurchaseRequestStatusesEnum } from './enums/purchase-requests-statuses.enum'
import { PublicRoute } from 'src/infrastructure/decorators/public-route.decorator'

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

  @Patch(':id/approve')
  approve(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseRequestsService.updateStatus(
      id,
      PurchaseRequestStatusesEnum.Approved,
    )
  }

  @Patch(':id/reject')
  reject(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseRequestsService.updateStatus(
      id,
      PurchaseRequestStatusesEnum.Rejected,
    )
  }

  @RequiredRoles(UserRolesEnum.SuperAdmin)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseRequestsService.remove(id)
  }
}
