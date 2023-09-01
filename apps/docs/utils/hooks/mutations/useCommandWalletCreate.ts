import { COMMAND_WALLET_CREATE } from '@core/graphql/mutations'
import { CommandWalletCreateInput, WalletCreateCommand } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandWalletCreate = () => {
  return useMutation<
    { commandWalletCreate: WalletCreateCommand },
    { input: CommandWalletCreateInput }
  >(COMMAND_WALLET_CREATE)
}
