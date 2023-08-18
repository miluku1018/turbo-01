import { gql } from '@apollo/client'
import { OPERATION_FIELDS } from './operationFields'

export const OPERATION_LOGS_FIELDS = gql`
  ${OPERATION_FIELDS}
  fragment operationLogsFields on OperationLogs {
    create {
      ...operationFields
    }

    updates {
      ...operationFields
    }

    remove {
      ...operationFields
    }
  }
`
