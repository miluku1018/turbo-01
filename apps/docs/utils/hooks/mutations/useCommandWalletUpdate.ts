import { COMMAND_WALLET_UPDATE } from '@core/graphql/mutations'
import { CommandWalletUpdateInput, CommandWalletUpdateResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandWalletUpdate = () => {
  return useMutation<
    { commandWalletUpdate: CommandWalletUpdateResponse },
    { walletId: string; input: CommandWalletUpdateInput }
  >(COMMAND_WALLET_UPDATE)
}
