import { COMMAND_LIQUID_STAKE_LIDO } from '@core/graphql/mutations'
import { CommandLiquidStakeLidoInput, LiquidStakeLidoCommand } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandLiquidStakeLido = () => {
  return useMutation<
    { commandLiquidStakeLido: LiquidStakeLidoCommand },
    { walletId: string; input: CommandLiquidStakeLidoInput }
  >(COMMAND_LIQUID_STAKE_LIDO)
}
