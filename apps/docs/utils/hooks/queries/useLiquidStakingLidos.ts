import { QueryHookOptions } from '@apollo/client'
import { LIQUID_STAKING_LIDOS } from '@core/graphql/queries'
import { LiquidStakingLidoPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  liquidStakingLidos: LiquidStakingLidoPage
}

interface Variables {
  clientId?: string
  offset?: number
  limit?: number
}

export const useLiquidStakingLidos = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(LIQUID_STAKING_LIDOS, options)
}
