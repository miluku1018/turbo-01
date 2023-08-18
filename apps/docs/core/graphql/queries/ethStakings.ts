import { gql } from '@apollo/client'
import { NETWORK_INFO_FIELDS, OPERATION_FIELDS, OPERATION_LOGS_FIELDS } from '../fragment'

export const ETH_STAKINGS = gql`
  ${OPERATION_FIELDS}
  ${NETWORK_INFO_FIELDS}
  ${OPERATION_LOGS_FIELDS}
  query ethStakings($clientId: UUID, $offset: Int = 0, $limit: Int = 10) {
    ethStakings(clientId: $clientId, offset: $offset, limit: $limit) {
      total
      list {
        validator
        createdAt
        wallet {
          name
          networkInfo {
            ...networkInfoFields
          }
        }

        operation {
          depositDataRoot
          depositData {
            amount
            signature
            validatorPubkey
            withdrawalCredentials
          }
        }

        operationLogs {
          ...operationLogsFields
        }
      }
    }
  }
`
