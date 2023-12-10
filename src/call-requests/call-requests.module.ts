import { Module } from '@nestjs/common'
import { CallRequestsService } from './call-requests.service'
import { CallRequestsController } from './call-requests.controller'

@Module({
  controllers: [CallRequestsController],
  providers: [CallRequestsService],
})
export class CallRequestsModule {}
