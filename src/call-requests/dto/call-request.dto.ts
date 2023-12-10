import { CallRequestStatusesEnum } from '../enums/call-requests-statuses.enum'

export class CallRequestDto {
  customerName: string
  customerPhoneNumber: string
  status: CallRequestStatusesEnum
}
