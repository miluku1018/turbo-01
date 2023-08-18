import Option from './Option'

interface TokenAmount {
  token: Option
  amount: number
}

interface WithdrawalAmountForm {
  description: string
  wallet: Option
  tokenAmount: TokenAmount
  whitelistedWallet: Option
}

export default WithdrawalAmountForm
