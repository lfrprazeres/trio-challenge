export default interface Amount {
  rentAmount: number,
  fee: number,
  totalAmount: number
}

export interface AmountError {
  errorType: 'InvalidDatesError',
  message: string
}