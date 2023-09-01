import { REQUEST_WALLET_DEPOSIT_CONFIRMATION } from '@core/graphql/mutations'
import {
  RequestWalletDepositConfirmationInput,
  WalletDepositConfirmation,
} from '@core/graphql/types'
import useMutation from '../useMutation'

export const useRequestWalletDepositConfirmation = () => {
  return useMutation<
    { requestWalletDepositConfirmation: WalletDepositConfirmation },
    { input: RequestWalletDepositConfirmationInput }
  >(REQUEST_WALLET_DEPOSIT_CONFIRMATION)
}
