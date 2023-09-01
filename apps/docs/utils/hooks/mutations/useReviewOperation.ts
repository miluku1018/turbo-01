import { REVIEW_OPERATION } from '@core/graphql/mutations'
import { OperationReviewRecord, ReviewOperationInput } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useReviewOperation = () => {
  return useMutation<
    { reviewOperation: OperationReviewRecord },
    { id: string; input: ReviewOperationInput }
  >(REVIEW_OPERATION)
}
