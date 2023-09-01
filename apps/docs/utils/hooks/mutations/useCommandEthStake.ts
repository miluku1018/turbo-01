import { COMMAND_ETH_STAKE } from '@core/graphql/mutations'
import { CommandEthStakeInput, EthStakingCommand } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandEthStake = () => {
  return useMutation<
    { commandEthStake: EthStakingCommand },
    { walletId: string; input: CommandEthStakeInput }
  >(COMMAND_ETH_STAKE)
}
