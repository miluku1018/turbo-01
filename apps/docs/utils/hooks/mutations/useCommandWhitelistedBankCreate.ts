import { COMMAND_WHITELISTED_BANK_CREATE } from '@core/graphql/mutations'
import {
  CommandWhitelistedBankCreateInput,
  WhitelistedBankCreateCommand,
} from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandWhitelistedBankCreate = () => {
  return useMutation<
    { commandWhitelistedBankCreate: WhitelistedBankCreateCommand },
    { input: CommandWhitelistedBankCreateInput }
  >(COMMAND_WHITELISTED_BANK_CREATE)
}
