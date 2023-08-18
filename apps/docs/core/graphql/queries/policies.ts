import { gql } from '@apollo/client'
import { OPERATION_LOGS_FIELDS, POLICY_FIELDS } from '../fragment'

export const POLICIES = gql`
  ${POLICY_FIELDS}
  ${OPERATION_LOGS_FIELDS}
  query policies($limit: Int = 10, $offset: Int = 0, $clientId: UUID) {
    policies(limit: $limit, offset: $offset, clientId: $clientId) {
      total
      list {
        ...policyFields
        operationLogs {
          ...operationLogsFields
        }
      }
    }
  }
`
