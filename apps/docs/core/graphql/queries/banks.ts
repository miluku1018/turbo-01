import { gql } from '@apollo/client'
import { BANK_FIELDS } from '../fragment'

export const BANKS = gql`
  ${BANK_FIELDS}
  query banks($clientId: ID, $offset: Int = 0, $limit: Int = 1000) {
    banks(clientId: $clientId, offset: $offset, limit: $limit) {
      total
      list {
        ...bankFields
      }
    }
  }
`
