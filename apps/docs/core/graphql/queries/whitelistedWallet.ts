import { gql } from '@apollo/client'

export const WHITELISTED_WALLET = gql`
  query whitelistedWallet($id: UUID!) {
    whitelistedWallet(id: $id) {
      name
    }
  }
`
