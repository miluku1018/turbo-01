import { gql } from '@apollo/client'

export const ASSET_TYPE_FIELDS = gql`
  fragment assetTypeFields on AssetType {
    ... on CoinAssetType {
      id
      name
      icon
      symbol
    }

    ... on TokenAssetType {
      id
      name
      icon
      symbol
      tokenType
    }
  }
`
