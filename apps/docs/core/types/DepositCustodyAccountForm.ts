import Option from './Option'

interface TokenAmount {
  token: Option
  amount: number
}

interface DepositCustodyAccountForm {
  custodySubAccount: Option
  sourceBankAccount: Option
  remittanceSlip: {
    id: string
  }
  depositAmount: TokenAmount
}

export default DepositCustodyAccountForm
