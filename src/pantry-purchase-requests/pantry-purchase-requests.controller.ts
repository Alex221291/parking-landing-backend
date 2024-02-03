import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'
import { PantryPurchaseRequestsService } from './pantry-purchase-requests.service'
import { PantryPurchaseRequestDto } from './dto/pantry-purchase-request.dto'
import { UserRolesEnum } from 'src/infrastructure/enums/user-roles.enum'
import { RequiredRoles } from 'src/infrastructure/decorators/required-roles.decorator'
import { PublicRoute } from 'src/infrastructure/decorators/public-route.decorator'
import { UpdatePantryPurchaseRequestStatusDto } from './dto/update-pantry-purchase-request-status.dto'

@Controller('pantry-purchase-requests')
export class PantryPurchaseRequestsController {
  constructor(
    private readonly pantryPurchaseRequestsService: PantryPurchaseRequestsService,
  ) {}

  @PublicRoute()
  @Post()
  create(@Body() pantryPurchaseRequestDto: PantryPurchaseRequestDto) {
    return this.pantryPurchaseRequestsService.create(pantryPurchaseRequestDto)
  }

  @Get()
  findAll() {
    return this.pantryPurchaseRequestsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pantryPurchaseRequestsService.findOne(id)
  }

  @Patch(':id/update-status')
  approve(
    @Body() updatePantryPurchaseRequestStatusDto: UpdatePantryPurchaseRequestStatusDto,
  ) {
    return this.pantryPurchaseRequestsService.updateStatus(
      updatePantryPurchaseRequestStatusDto,
    )
  }

  @RequiredRoles(UserRolesEnum.SuperAdmin)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pantryPurchaseRequestsService.remove(id)
  }
}
