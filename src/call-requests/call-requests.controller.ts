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
  close(@Param('id', ParseIntPipe) id: number) {
    return this.callRequestsService.updateStatus(id, CallRequestStatusesEnum.Closed)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.callRequestsService.remove(id)
  }
}
