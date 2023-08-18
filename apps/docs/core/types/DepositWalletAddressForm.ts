import Option from './Option'

interface TokenAmount {
  token: Option
  amount: number
}

interface DepositWalletAddressForm {
  name: string
  position: string
  transactionId: string
  wallet: Option
  tokenAmount: TokenAmount
  whitelistedWallet: Option
}

export default DepositWalletAddressForm
