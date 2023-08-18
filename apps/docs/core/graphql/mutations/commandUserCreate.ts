import { gql } from '@apollo/client'

export const COMMAND_USER_CREATE = gql`
  mutation commandUserCreate($input: CommandUserCreateInput!) {
    commandUserCreate(input: $input) {
      __typename
    }
  }
`
