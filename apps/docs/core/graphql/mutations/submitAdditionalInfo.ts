import { gql } from '@apollo/client'

export const SUBMIT_ADDITIONAL_INFO = gql`
  mutation submitAdditionalInfo($id: String!, $fields: [FieldInput!]!) {
    submitAdditionalInfo(id: $id, fields: $fields) {
      __typename
    }
  }
`
