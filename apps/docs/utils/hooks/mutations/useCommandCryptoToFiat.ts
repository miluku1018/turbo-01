import { COMMAND_CRYPTO_TO_FIAT } from '@core/graphql/mutations'
import { CommandCryptoToFiatInput, CryptoToFiatCommand } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandCryptoToFiat = () => {
  return useMutation<
    { commandCryptoToFiat: CryptoToFiatCommand },
    { walletId: string; input: CommandCryptoToFiatInput }
  >(COMMAND_CRYPTO_TO_FIAT)
}
