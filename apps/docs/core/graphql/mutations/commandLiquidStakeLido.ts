import { gql } from '@apollo/client'

export const COMMAND_LIQUID_STAKE_LIDO = gql`
  mutation commandLiquidStakeLido($walletId: UUID!, $input: CommandLiquidStakeLidoInput!) {
    commandLiquidStakeLido(walletId: $walletId, input: $input) {
      __typename
    }
  }
`
