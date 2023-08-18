import { gql } from '@apollo/client'
import { NETWORK_INFO_FIELDS, WALLET_ASSET_FIELDS } from '../fragment'

export const WALLET = gql`
  ${NETWORK_INFO_FIELDS}
  ${WALLET_ASSET_FIELDS}
  query wallet($id: UUID!) {
    wallet(id: $id) {
      id
      name
      assets {
        ...walletAssetFields
      }

      networkInfo {
        ...networkInfoFields
      }
    }
  }
`
