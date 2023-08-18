import { AssetType, NetworkInfo, WhitelistedWalletOwnerType } from '@core/graphql/types'
import Option from './Option'

interface Owner {
  owner: Option<WhitelistedWalletOwnerType>
  proofOfRelationship?: { id: string }
}

interface WhitelistedWalletForm {
  name: string
  owner: Owner
  address: string
  network: Option<{ networkInfo: NetworkInfo }>
  assetTypes: Option<AssetType>[]
}

export default WhitelistedWalletForm
