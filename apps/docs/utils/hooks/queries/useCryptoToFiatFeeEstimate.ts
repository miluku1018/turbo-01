import { QueryHookOptions } from '@apollo/client'
import { CRYPTO_TO_FIAT_FEE_ESTIMATE } from '@core/graphql/queries'
import { FeeEstimate } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  cryptoToFiatFeeEstimate: FeeEstimate
}

interface Variables {
  amount: string
  assetTypeId: string
  walletId: string
}

export const useCryptoToFiatFeeEstimate = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(CRYPTO_TO_FIAT_FEE_ESTIMATE, options)
}
