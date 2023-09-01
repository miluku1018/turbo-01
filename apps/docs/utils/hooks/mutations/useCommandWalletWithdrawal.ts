import { COMMAND_WALLET_WITHDRAWAL } from '@core/graphql/mutations'
import { CommandWalletWithdrawalInput, WalletWithdrawalCommand } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandWalletWithdrawal = () => {
  return useMutation<
    { commandWalletWithdrawal: WalletWithdrawalCommand },
    { walletId: string; input: CommandWalletWithdrawalInput }
  >(COMMAND_WALLET_WITHDRAWAL)
}
