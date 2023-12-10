import { Module } from '@nestjs/common'
import { CallRequestsService } from './call-requests.service'
import { CallRequestsController } from './call-requests.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CallRequest } from './entities/call-request.entity'

@Module({
  imports: [TypeOrmModule.forFeature([CallRequest])],
  controllers: [CallRequestsController],
  providers: [CallRequestsService],
})
export class CallRequestsModule {}
