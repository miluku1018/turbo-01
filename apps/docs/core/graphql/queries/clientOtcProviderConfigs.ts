import { gql } from '@apollo/client'
import { ASSET_TYPE_FIELDS } from '../fragment'

export const CLIENT_OTC_PROVIDER_CONFIGS = gql`
  ${ASSET_TYPE_FIELDS}
  query clientOtcProviderConfigs($clientId: ID, $offset: Int = 0, $limit: Int = 1000) {
    clientOtcProviderConfigs(clientId: $clientId, offset: $offset, limit: $limit) {
      total
      list {
        createdAt
        otcProvider {
          id
          name
          networkInfos {
            network
            assetTypes {
              ...assetTypeFields
            }
          }
        }
      }
    }
  }
`
