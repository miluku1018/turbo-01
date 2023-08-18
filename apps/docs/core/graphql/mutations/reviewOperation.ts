import { gql } from '@apollo/client'

export const REVIEW_OPERATION = gql`
  mutation reviewOperation($id: UUID!, $input: ReviewOperationInput!) {
    reviewOperation(id: $id, input: $input) {
      id
    }
  }
`
