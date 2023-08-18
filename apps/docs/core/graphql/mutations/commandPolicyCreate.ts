import { gql } from '@apollo/client'

export const COMMAND_POLICY_CREATE = gql`
  mutation commandPolicyCreate($input: CommandPolicyCreateInput!) {
    commandPolicyCreate(input: $input) {
      __typename
    }
  }
`
