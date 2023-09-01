import { COMMAND_WHITELISTED_WALLET_CREATE } from '@core/graphql/mutations'
import {
  CommandWhitelistedWalletCreateInput,
  WhitelistedWalletCreateCommand,
} from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandWhitelistedWalletCreate = () => {
  return useMutation<
    { commandWhitelistedWalletCreate: WhitelistedWalletCreateCommand },
    { input: CommandWhitelistedWalletCreateInput }
  >(COMMAND_WHITELISTED_WALLET_CREATE)
}
