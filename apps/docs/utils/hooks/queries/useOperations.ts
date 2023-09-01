import { QueryHookOptions } from '@apollo/client'
import { OPERATIONS } from '@core/graphql/queries'
import {
  ClientType,
  CustodyEntity,
  OperationPage,
  OperationState,
  OperationType,
} from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  operations: OperationPage
}

interface Variables {
  custodyEntity?: CustodyEntity
  operationTypes: OperationType[]
  clientType?: ClientType
  clientId?: string
  walletId?: string
  bankId?: string
  states?: OperationState[]
  startsAt?: Date
  endsAt?: Date
  waitingForViewer?: boolean
  offset?: number
  limit?: number
}

export const useOperations = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(OPERATIONS, options)
}
