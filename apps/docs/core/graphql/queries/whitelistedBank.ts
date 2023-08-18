import { gql } from '@apollo/client'
import { WHITELISTED_BANK_FIELDS } from '../fragment/whitelistedBankFields'

export const WHITELISTED_BANK = gql`
  ${WHITELISTED_BANK_FIELDS}
  query whitelistedBank($id: UUID!) {
    whitelistedBank(id: $id) {
      ...whitelistedBankFields
    }
  }
`
