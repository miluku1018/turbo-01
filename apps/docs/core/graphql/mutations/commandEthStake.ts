import { gql } from '@apollo/client'

export const COMMAND_ETH_STAKE = gql`
  mutation commandEthStake($walletId: UUID!, $input: CommandEthStakeInput!) {
    commandEthStake(walletId: $walletId, input: $input) {
      __typename
    }
  }
`
