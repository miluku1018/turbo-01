import BigNumber from 'bignumber.js'

export const getBpsRange = (value: string | number, range: string | number) => {
  const number = BigNumber(value)
  const min = number.isNaN() ? 0 : number.multipliedBy(BigNumber.sum(1, -range / 10000)).toString()
  const max = number.isNaN() ? 0 : number.multipliedBy(BigNumber.sum(1, +range / 10000)).toString()

  return { min, max }
}
