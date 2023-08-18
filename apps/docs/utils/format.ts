import { User } from '@core/graphql/types'
import { isValid } from 'date-fns'
import dateFnsFormat from 'date-fns/format'

export const formatCurrency = (value?: string | number, style?: 'currency', digits = 2) => {
  const currencyFormatter = new Intl.NumberFormat(['en-US'], {
    style: style,
    currency: 'USD',
    minimumFractionDigits: digits,
  })

  const isEmpty = [undefined, null, ''].includes(value?.toString())
  return !isEmpty ? currencyFormatter.format(value ? +value : 0) : ''
}

export const formatDateTime = (value?: string | number | Date, format = 'yyyy-MM-dd') => {
  if (!value) return ''

  const number = Date.parse(value.toString())
  return isValid(number) ? dateFnsFormat(new Date(value), format) : ''
}

export const formatAddress = (value?: string) => {
  return value ? `${value.slice(0, 6)}...${value.slice(-4)}` : ''
}

export const formatBankAddress = (value?: string) => {
  return value ? `...${value.slice(-5)}` : ''
}

export const formatUser = (user?: User) => {
  return {
    label: `${user?.firstName} ${user?.lastName} (${user?.email})`,
    value: user?.id,
  }
}
