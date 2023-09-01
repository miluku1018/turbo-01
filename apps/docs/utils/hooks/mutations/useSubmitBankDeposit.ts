import { SUBMIT_BANK_DEPOSIT } from '@core/graphql/mutations'
import { BankDepositOperation, SubmitBankDepositInput } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useSubmitBankDeposit = () => {
  return useMutation<
    { submitBankDeposit: BankDepositOperation },
    { bankId: string; input: SubmitBankDepositInput }
  >(SUBMIT_BANK_DEPOSIT)
}
