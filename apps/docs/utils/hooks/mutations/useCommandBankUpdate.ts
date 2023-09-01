import { COMMAND_BANK_UPDATE } from '@core/graphql/mutations'
import { CommandBankUpdateInput, CommandBankUpdateResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandBankUpdate = () => {
  return useMutation<
    { commandBankUpdate: CommandBankUpdateResponse },
    { bankId: string; input: CommandBankUpdateInput }
  >(COMMAND_BANK_UPDATE)
}
