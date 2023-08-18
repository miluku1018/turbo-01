import { gql } from '@apollo/client'
import { BANK_FIELDS } from '../fragment'

export const BANK = gql`
  ${BANK_FIELDS}
  query bank($id: ID!) {
    bank(id: $id) {
      ...bankFields
    }
  }
`
