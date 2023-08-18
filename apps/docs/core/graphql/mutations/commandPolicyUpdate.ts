import { gql } from '@apollo/client'

export const COMMAND_POLICY_UPDATE = gql`
  mutation commandPolicyUpdate($policyId: ID!, $input: CommandPolicyUpdateInput!) {
    commandPolicyUpdate(policyId: $policyId, input: $input) {
      __typename
    }
  }
`
