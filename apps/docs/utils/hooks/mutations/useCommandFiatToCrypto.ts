import { COMMAND_FIAT_TO_CRYPTO } from '@core/graphql/mutations'
import { CommandFiatToCryptoInput, FiatToCryptoCommand } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandFiatToCrypto = () => {
  return useMutation<
    { commandFiatToCrypto: FiatToCryptoCommand },
    { bankId: string; input: CommandFiatToCryptoInput }
  >(COMMAND_FIAT_TO_CRYPTO)
}
