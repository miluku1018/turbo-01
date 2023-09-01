import { QueryHookOptions } from '@apollo/client'
import { DASHBOARD_COUNTS } from '@core/graphql/queries'
import { DashboardCountsDto } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  dashboardCounts: DashboardCountsDto
}

export const useDashboardCounts = (options?: QueryHookOptions<Data>) => {
  return useQuery<Data>(DASHBOARD_COUNTS, options)
}
