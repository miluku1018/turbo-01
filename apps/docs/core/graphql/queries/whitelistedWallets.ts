import { gql } from '@apollo/client'
import { NETWORK_INFO_FIELDS, OPERATION_LOGS_FIELDS } from '../fragment'

export const WHITELISTED_WALLETS = gql`
  ${NETWORK_INFO_FIELDS}
  ${OPERATION_LOGS_FIELDS}
  query whitelistedWallets($clientId: UUID, $network: Network, $offset: Int = 0, $limit: Int = 10) {
    whitelistedWallets(clientId: $clientId, network: $network, offset: $offset, limit: $limit) {
      total
      list {
        id
        name
        owner
        address

        networkInfo {
          ...networkInfoFields
        }

        operationLogs {
          ...operationLogsFields
        }
      }
    }
  }
`
