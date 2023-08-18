import { gql } from '@apollo/client'

export const COMMAND_USER_REMOVE = gql`
  mutation commandUserRemove($input: CommandRemoveUserInput!) {
    commandUserRemove(input: $input) {
      __typename
    }
  }
`
