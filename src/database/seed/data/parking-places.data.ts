import {
  ParkingPlacesAmountOn1Floor,
  ParkingPlacesAmountOn2Floor,
  ParkingPlacesAmountOn3Floor,
  ParkingPlacesAmountOn4Floor,
  ParkingPlacesAmountOn5Floor,
} from 'src/infrastructure/constants/parking-places-amount.constant'
import { ParkingPlaceDto } from 'src/parking-places/dto/parking-place.dto'
import { PlaceStatusesEnum } from 'src/infrastructure/enums/place-statuses.enum'
import { ParkingPlaceTypesEnum } from 'src/parking-places/enums/parking-place-types.enum'

export const parkingPlacesSeedData: ParkingPlaceDto[] = [
  ...Array(ParkingPlacesAmountOn1Floor).map((): ParkingPlaceDto => {
    return {
      floor: 1,
      type: ParkingPlaceTypesEnum.Standard,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array(ParkingPlacesAmountOn2Floor).map((): ParkingPlaceDto => {
    return {
      floor: 2,
      type: ParkingPlaceTypesEnum.Standard,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array(ParkingPlacesAmountOn3Floor).map((): ParkingPlaceDto => {
    return {
      floor: 3,
      type: ParkingPlaceTypesEnum.Standard,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array(ParkingPlacesAmountOn4Floor).map((): ParkingPlaceDto => {
    return {
      floor: 4,
      type: ParkingPlaceTypesEnum.Standard,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array(ParkingPlacesAmountOn5Floor).map((): ParkingPlaceDto => {
    return {
      floor: 5,
      type: ParkingPlaceTypesEnum.Standard,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
]
