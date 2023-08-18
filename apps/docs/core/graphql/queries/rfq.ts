import { gql } from '@apollo/client'

export const RFQ = gql`
  query rfq($providerId: UUID!, $input: RfqInput!) {
    rfq(providerId: $providerId, input: $input) {
      price
    }
  }
`
