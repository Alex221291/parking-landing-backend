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
  ...Array(PantryPlacesAmountOn1Floor).map((): PantryPlaceDto => {
    return {
      floor: 1,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array(PantryPlacesAmountOn2Floor).map((): PantryPlaceDto => {
    return {
      floor: 2,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array(PantryPlacesAmountOn3Floor).map((): PantryPlaceDto => {
    return {
      floor: 3,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array(PantryPlacesAmountOn4Floor).map((): PantryPlaceDto => {
    return {
      floor: 4,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
  ...Array(PantryPlacesAmountOn5Floor).map((): PantryPlaceDto => {
    return {
      floor: 5,
      area: 1,
      currentPrice: 1,
      previousPrice: 1,
      status: PlaceStatusesEnum.Free,
    }
  }),
]
