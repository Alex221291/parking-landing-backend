import {
  ParkingPlacesAmountOn1Floor,
  ParkingPlacesAmountOn2Floor,
  ParkingPlacesAmountOn3Floor,
  ParkingPlacesAmountOn4Floor,
  ParkingPlacesAmountOn5Floor,
} from 'src/infrastructure/constants/parking-places-amount.constant'
import { ParkingPlaceDto } from 'src/parking-places/dto/parking-place.dto'
import { ParkingPlaceStatusesEnum } from 'src/parking-places/enums/parking-place-statuses.enum'
import { ParkingPlaceTypesEnum } from 'src/parking-places/enums/parking-place-types.enum'

export const parkingPlacesSeedData: ParkingPlaceDto[] = [
  ...Array.from(Array(ParkingPlacesAmountOn1Floor).keys()).map((): ParkingPlaceDto => {
    return {
      floor: 1,
      type: ParkingPlaceTypesEnum.Standard,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: ParkingPlaceStatusesEnum.Free,
    }
  }),
  ...Array.from(Array(ParkingPlacesAmountOn2Floor).keys()).map((): ParkingPlaceDto => {
    return {
      floor: 2,
      type: ParkingPlaceTypesEnum.Standard,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: ParkingPlaceStatusesEnum.Free,
    }
  }),
  ...Array.from(Array(ParkingPlacesAmountOn3Floor).keys()).map((): ParkingPlaceDto => {
    return {
      floor: 3,
      type: ParkingPlaceTypesEnum.Standard,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: ParkingPlaceStatusesEnum.Free,
    }
  }),
  ...Array.from(Array(ParkingPlacesAmountOn4Floor).keys()).map((): ParkingPlaceDto => {
    return {
      floor: 4,
      type: ParkingPlaceTypesEnum.Standard,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: ParkingPlaceStatusesEnum.Free,
    }
  }),
  ...Array.from(Array(ParkingPlacesAmountOn5Floor).keys()).map((): ParkingPlaceDto => {
    return {
      floor: 5,
      type: ParkingPlaceTypesEnum.Standard,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: ParkingPlaceStatusesEnum.Free,
    }
  }),
]
