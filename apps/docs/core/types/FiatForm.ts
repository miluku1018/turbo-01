import { Rfq } from '@core/graphql/types'
import Option from './Option'

interface Amount {
  fiat: number
  crypto: number
}

interface FiatForm {
  rfq: Rfq
  bank: Option
  wallet: Option
  amount: Amount
  provider: Option
  tradingPair: Option
  usage: string
  slippage: number
}

export default FiatForm
