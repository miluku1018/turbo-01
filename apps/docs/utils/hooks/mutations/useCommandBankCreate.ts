import { COMMAND_BANK_CREATE } from '@core/graphql/mutations'
import useMutation from '../useMutation'
import { BankCreateInput, BankCreateOperation } from '@core/graphql/types'

export const useCommandBankCreate = () => {
  return useMutation<
    { commandBankCreate: BankCreateOperation },
    {
      input: BankCreateInput
    }
  >(COMMAND_BANK_CREATE)
}
