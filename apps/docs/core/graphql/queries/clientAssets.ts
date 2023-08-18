import { gql } from '@apollo/client'
import { ASSET_TYPE_FIELDS } from '../fragment'

export const CLIENT_TYPES = gql`
  ${ASSET_TYPE_FIELDS}
  query clientAssets {
    clientAssets {
      cryptoAssets {
        assetType {
          ...assetTypeFields
        }
        totalAmount
      }
      usdAmount
    }
  }
`
