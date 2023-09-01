import { QueryHookOptions } from '@apollo/client'
import { useAuth } from '@core/context/auth'
import { BANKS } from '@core/graphql/queries'
import { BankPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  banks: BankPage
}

interface Variables {
  clientId?: string
  offset?: number
  limit?: number
}

export const useBanks = (options?: QueryHookOptions<Data, Variables>) => {
  const { me } = useAuth()

  const { data, ...props } = useQuery<Data, Variables>(BANKS, options)

  const getOptions = (options?: { isEditor?: boolean }) => {
    const list = options?.isEditor
      ? data?.banks.list.filter(({ policy }) =>
          policy.requesters.reduce((prev, curr) => prev || curr.user.email === me?.email, false),
        )
      : data?.banks.list
    return list?.map(item => ({
      label: item.custodyBank.accountName,
      value: item,
    }))
  }

  return { ...props, data, getOptions }
}
