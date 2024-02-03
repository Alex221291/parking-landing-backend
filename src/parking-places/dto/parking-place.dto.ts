import { ParkingPlaceStatusesEnum } from '../../infrastructure/enums/place-statuses.enum'
import { ParkingPlaceTypesEnum } from '../enums/parking-place-types.enum'

export class ParkingPlaceDto {
  floor: number
  type: ParkingPlaceTypesEnum
  area: number
  currentPrice: number
  previousPrice: number
  status: ParkingPlaceStatusesEnum
}
