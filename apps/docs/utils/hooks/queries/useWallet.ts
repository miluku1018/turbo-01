import { QueryHookOptions } from '@apollo/client'
import { WALLET } from '@core/graphql/queries'
import { Wallet } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  wallet: Wallet
}

interface Variables {
  id: string
}

export const useWallet = (options?: QueryHookOptions<Data, Variables>) => {
  const variables = options?.variables

  return useQuery<Data, Variables>(WALLET, {
    ...options,
    skip: !variables?.id,
  })
}
