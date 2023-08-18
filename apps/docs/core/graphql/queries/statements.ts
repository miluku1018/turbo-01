import { gql } from '@apollo/client'

export const STATEMENTS = gql`
  query statements($clientId: UUID, $offset: Int = 0, $limit: Int = 10) {
    statements(clientId: $clientId, offset: $offset, limit: $limit) {
      total
      list {
        id
        createdAt
        endAmount
        startAmount
      }
    }
  }
`
