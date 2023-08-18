import { gql } from '@apollo/client'

export const STATEMENT_SIGNED_URL = gql`
  query statementSignedUrl($id: ID!) {
    statementSignedUrl(id: $id)
  }
`
