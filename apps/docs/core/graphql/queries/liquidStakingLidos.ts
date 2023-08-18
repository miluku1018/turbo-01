import { gql } from '@apollo/client'
import { NETWORK_INFO_FIELDS, OPERATION_LOGS_FIELDS } from '../fragment'

export const LIQUID_STAKING_LIDOS = gql`
  ${NETWORK_INFO_FIELDS}
  ${OPERATION_LOGS_FIELDS}
  query liquidStakingLidos($clientId: UUID, $offset: Int = 0, $limit: Int = 1000) {
    liquidStakingLidos(clientId: $clientId, offset: $offset, limit: $limit) {
      total
      list {
        amount
        createdAt
        wallet {
          name
          address
          networkInfo {
            ...networkInfoFields
          }
        }

        protocolInfo {
          name
        }

        operationLogs {
          ...operationLogsFields
        }
      }
    }
  }
`
