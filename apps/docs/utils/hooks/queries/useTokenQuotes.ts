import { QueryHookOptions } from '@apollo/client'
import { TOKEN_QUOTES } from '@core/graphql/queries'
import { TokenQuote } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  tokenQuotes: TokenQuote[]
}

interface Variables {
  symbols: string[]
}

export const useTokenQuotes = (options?: QueryHookOptions<Data, Variables>) => {
  const variables = options?.variables

  const { data, ...props } = useQuery<Data, Variables>(TOKEN_QUOTES, {
    ...options,
    skip: !variables?.symbols || variables.symbols.length === 0,
  })

  const getTokenUsd = () => {
    const tokenUsd =
      data?.tokenQuotes.reduce<{ [key: string]: number }>((prev, curr) => {
        prev[curr.symbol] = +curr.priceInUsd
        return prev
      }, {}) || {}

    return tokenUsd
  }

  return { ...props, data, getTokenUsd }
}
