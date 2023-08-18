import Option from './Option'

interface WhitelistWalletAddressForm {
  name: string
  owner: Option
  address: string
  network: Option
  assetTypes: Option[]
}

export default WhitelistWalletAddressForm
