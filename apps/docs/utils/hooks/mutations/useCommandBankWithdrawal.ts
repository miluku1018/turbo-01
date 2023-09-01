import { BankWithdrawalOperation, CommandBankWithdrawalInput } from '@core/graphql/types'
import useMutation from '../useMutation'
import { COMMAND_BANK_WITHDRAWAL } from '@core/graphql/mutations'

export const useCommandBankWithdrawal = () => {
  return useMutation<
    { commandBankWithdrawal: BankWithdrawalOperation },
    {
      bankId: string
      input: CommandBankWithdrawalInput
    }
  >(COMMAND_BANK_WITHDRAWAL)
}
