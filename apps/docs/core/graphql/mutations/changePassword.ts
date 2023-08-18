import { gql } from '@apollo/client'

export const CHANGE_PASSWORD = gql`
  mutation changePassword($currentPassword: String!, $newPassword: String!) {
    changePassword(currentPassword: $currentPassword, newPassword: $newPassword) {
      ... on InvalidCurrentPasswordError {
        message
      }
    }
  }
`
