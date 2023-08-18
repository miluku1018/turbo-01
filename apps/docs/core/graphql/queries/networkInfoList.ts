import { gql } from '@apollo/client'
import { ASSET_TYPE_FIELDS } from '../fragment'

export const NETWORK_INFO_LIST = gql`
  ${ASSET_TYPE_FIELDS}
  query networkInfoList($enabled: Boolean) {
    networkInfoList(enabled: $enabled) {
      id
      name
      coin
      assetTypes {
        ...assetTypeFields
      }
    }
  }
`
