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
import { CallRequestsService } from './call-requests.service'
import { CallRequestDto } from './dto/call-request.dto'
import { CallRequestStatusesEnum } from './enums/call-requests-statuses.enum'
import { RequiredRoles } from 'src/infrastructure/decorators/required-roles.decorator'
import { UserRolesEnum } from 'src/infrastructure/enums/user-roles.enum'
import { PublicRoute } from 'src/infrastructure/decorators/public-route.decorator'

@Controller('call-requests')
export class CallRequestsController {
  constructor(private readonly callRequestsService: CallRequestsService) {}

  @PublicRoute()
  @Post()
  create(@Body() callRequestDto: CallRequestDto) {
    return this.callRequestsService.create(callRequestDto)
  }

  @Get()
  findAll() {
    return this.callRequestsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.callRequestsService.findOne(id)
  }

  @Patch(':id/close')
  approve(@Param('id', ParseIntPipe) id: number) {
    return this.callRequestsService.updateStatus(id, CallRequestStatusesEnum.Closed)
  }

  @RequiredRoles(UserRolesEnum.SuperAdmin)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.callRequestsService.remove(id)
  }
}
