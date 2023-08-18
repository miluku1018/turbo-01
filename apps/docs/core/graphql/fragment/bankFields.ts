import { gql } from '@apollo/client'
import { CUSTODY_BANK_FIELDS } from './custodyBankFields'
import { OPERATION_LOGS_FIELDS } from './operationLogsFields'
import { POLICY_FIELDS } from './policyFields'
import { WHITELISTED_BANK_FIELDS } from './whitelistedBankFields'

export const BANK_FIELDS = gql`
  ${POLICY_FIELDS}
  ${CUSTODY_BANK_FIELDS}
  ${OPERATION_LOGS_FIELDS}
  ${WHITELISTED_BANK_FIELDS}
  fragment bankFields on Bank {
    id
    usage
    balance
    currency
    createdAt
    policy {
      ...policyFields
    }

    custodyBank {
      ...custodyBankFields
    }

    operationLogs {
      ...operationLogsFields
    }

    whitelistedBanks {
      ...whitelistedBankFields
    }
  }
`
