import Option from './Option'

interface TokenAmount {
  token: Option
  amount: number
}

interface WithdrawalBankForm {
  usage: string
  tokenAmount: TokenAmount
  sourceBankAccount: Option
  custodySubAccount: Option
}

export default WithdrawalBankForm
