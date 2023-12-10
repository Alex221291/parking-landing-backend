import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { ParkingPlaceTypesEnum } from '../enums/parking-place-types.enum'
import { ParkingPlaceStatusesEnum } from '../enums/parking-place-statuses.enum'

@Entity({ name: 'ParkingPlaces' })
export class ParkingPlace {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  floor: number

  @Column({ enum: ParkingPlaceTypesEnum })
  type: ParkingPlaceTypesEnum

  @Column()
  area: number

  @Column()
  currentPrice: number

  @Column()
  previousPrice: number

  @Column({ enum: ParkingPlaceStatusesEnum })
  status: ParkingPlaceStatusesEnum

  @UpdateDateColumn()
  updatedAt: Date
}
