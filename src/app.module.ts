import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { databaseConfig } from './database/database.config'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { ParkingPlacesModule } from './parking-places/parking-places.module'
import { PurchaseRequestsModule } from './purchase-requests/purchase-requests.module';
import { CallRequestsModule } from './call-requests/call-requests.module';
import { SeedModule } from './database/seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    AuthModule,
    ParkingPlacesModule,
    PurchaseRequestsModule,
    CallRequestsModule,
    SeedModule,
  ],
})
export class AppModule {}
