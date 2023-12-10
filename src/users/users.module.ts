import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { APP_GUARD } from '@nestjs/core'
import { UserRolesGuard } from './guards/user-roles.guard'

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: APP_GUARD,
      useClass: UserRolesGuard,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
