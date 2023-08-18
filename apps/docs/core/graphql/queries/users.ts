import { gql } from '@apollo/client'
import { OPERATION_LOGS_FIELDS } from '../fragment'

export const USERS = gql`
  ${OPERATION_LOGS_FIELDS}
  query users($limit: Int = 10, $offset: Int = 0, $clientId: UUID) {
    users(limit: $limit, offset: $offset, clientId: $clientId) {
      total
      list {
        id
        role
        seqNo
        email
        mobile
        position
        lastName
        firstName
        client {
          displayId
        }

        removeRecord {
          reason
          createdAt
          account {
            lastName
            firstName
          }
        }

        operationLogs {
          ...operationLogsFields
        }
      }
    }
  }
`
