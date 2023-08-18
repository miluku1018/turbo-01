import { gql } from '@apollo/client'
import { WHITELISTED_BANK_FIELDS } from '../fragment/whitelistedBankFields'

export const WHITELISTED_BANKS = gql`
  ${WHITELISTED_BANK_FIELDS}
  query whitelistedBanks($clientId: UUID, $offset: Int = 0, $limit: Int = 10) {
    whitelistedBanks(clientId: $clientId, offset: $offset, limit: $limit) {
      total
      list {
        ...whitelistedBankFields
      }
    }
  }
`
