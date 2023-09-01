import { QueryHookOptions } from '@apollo/client'
import { WAITING_FOR_VIEWER_COUNTS } from '@core/graphql/queries'
import { WaitingForViewerCountsDto } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  waitingForViewerCounts: WaitingForViewerCountsDto
}

export const useWaitingForViewerCounts = (options?: QueryHookOptions<Data>) => {
  return useQuery<Data>(WAITING_FOR_VIEWER_COUNTS, options)
}
