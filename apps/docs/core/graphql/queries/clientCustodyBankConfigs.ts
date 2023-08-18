import { gql } from '@apollo/client'
import { CUSTODY_BANK_FIELDS } from '../fragment'

export const CLIENT_CUSTODY_BANK_CONFIGS = gql`
  ${CUSTODY_BANK_FIELDS}
  query clientCustodyBankConfigs($limit: Int = 1000, $offset: Int = 0) {
    clientCustodyBankConfigs(limit: $limit, offset: $offset) {
      total
      list {
        custodyBank {
          ...custodyBankFields
        }
        id
      }
    }
  }
`
