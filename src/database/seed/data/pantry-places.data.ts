import {
  PantryPlacesAmountOn1Floor,
  PantryPlacesAmountOn2Floor,
  PantryPlacesAmountOn3Floor,
  PantryPlacesAmountOn4Floor,
  PantryPlacesAmountOn5Floor,
} from 'src/infrastructure/constants/pantry-places-amount.constant'
import { PantryPlaceDto } from 'src/pantry-places/dto/pantry-place.dto'
import { PlaceStatusesEnum } from 'src/infrastructure/enums/place-statuses.enum'

export const pantryPlacesSeedData: PantryPlaceDto[] = [
  ...Array.from(Array(PantryPlacesAmountOn1Floor).keys()).map((): PantryPlaceDto => {
    return {
      floor: 1,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array.from(Array(PantryPlacesAmountOn2Floor).keys()).map((): PantryPlaceDto => {
    return {
      floor: 2,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array.from(Array(PantryPlacesAmountOn3Floor).keys()).map((): PantryPlaceDto => {
    return {
      floor: 3,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array.from(Array(PantryPlacesAmountOn4Floor).keys()).map((): PantryPlaceDto => {
    return {
      floor: 4,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array.from(Array(PantryPlacesAmountOn5Floor).keys()).map((): PantryPlaceDto => {
    return {
      floor: 5,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
]
