import { gql } from '@apollo/client'
import { ASSET_TYPE_FIELDS } from './assetTypeFields'

export const WALLET_ASSET_FIELDS = gql`
  ${ASSET_TYPE_FIELDS}
  fragment walletAssetFields on WalletAsset {
    amount
    lockedAmount
    confirmedAmount
    availableAmount
    assetType {
      ...assetTypeFields
    }
  }
`
