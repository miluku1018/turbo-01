import { gql } from '@apollo/client'
import { ASSET_TYPE_FIELDS, NETWORK_INFO_FIELDS } from '../fragment'

export const NETWORK_INFO = gql`
  ${ASSET_TYPE_FIELDS}
  ${NETWORK_INFO_FIELDS}
  query networkInfo($network: Network!) {
    networkInfo(network: $network) {
      id
      name
      ...networkInfoFields

      assetTypes {
        ...assetTypeFields
      }
    }
  }
`
