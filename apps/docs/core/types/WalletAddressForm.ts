import Option from './Option'

interface WalletAddressForm {
  name: string
  usage: string
  policy: Option
  network: Option
  whitelistedWallet?: Option<string>[]
}

export default WalletAddressForm
