import { gql } from '@apollo/client'
import { OPERATION_LOGS_FIELDS } from './operationLogsFields'

export const WHITELISTED_BANK_FIELDS = gql`
  ${OPERATION_LOGS_FIELDS}
  fragment whitelistedBankFields on WhitelistedBank {
    id
    currency
    accountName
    account
    routingType
    routingCode
    domesticCode
    notes
    ownerType
    bankInfo {
      name
      country
      address
      city
      state
      zip
      alias
      icon
    }

    operationLogs {
      ...operationLogsFields
    }
  }
`
