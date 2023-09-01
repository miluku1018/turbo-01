import { QueryHookOptions } from '@apollo/client'
import { useAuth } from '@core/context/auth'
import { WALLETS } from '@core/graphql/queries'
import { Network, TokenType, WalletPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  wallets: WalletPage
}

interface Variables {
  clientId?: string
  network?: Network
  isRequester?: boolean
  tokenTypes?: TokenType[]
  offset?: number
  limit?: number
}

export const useWallets = (options?: QueryHookOptions<Data, Variables>) => {
  const { me } = useAuth()

  const { data, ...props } = useQuery<Data, Variables>(WALLETS, options)

  const dataWithAmounts = data
    ? {
        wallets: {
          ...data.wallets,
          list: data.wallets.list.map(wallet => ({
            ...wallet,
            assets: wallet.assets.filter(asset => +asset.amount > 0),
          })),
        },
      }
    : undefined

  const getOptions = (options?: { isEditor?: boolean }) => {
    const list = options?.isEditor
      ? data?.wallets.list.filter(({ policy }) =>
          policy.requesters.reduce((prev, curr) => prev || curr.user.email === me?.email, false),
        )
      : data?.wallets.list
    return list?.map(item => ({
      label: item.name,
      value: item,
    }))
  }

  return { ...props, data, dataWithAmounts, getOptions }
}
