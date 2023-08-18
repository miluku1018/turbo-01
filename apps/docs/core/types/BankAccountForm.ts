import Option from './Option'

interface BankAccountForm {
  custodyBank: string
  accountNumber: string
  whitelistedBankAccount?: Option[]
  policy: Option
  usage: string
}

export default BankAccountForm
