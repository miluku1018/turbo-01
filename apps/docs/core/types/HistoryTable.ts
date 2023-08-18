import { OperationState } from '@core/graphql/types'

interface HistoryTable<T = OperationState> {
  startsAt?: Date
  endsAt?: Date
  state?: T
}

export default HistoryTable
