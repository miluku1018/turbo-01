import { SUBMIT_ADDITIONAL_INFO } from '@core/graphql/mutations'
import { Onboarding } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useSubmitAdditionalInfo = () => {
  return useMutation<{ submitAdditionalInfo: Onboarding }, { id: string; fields: any[] }>(
    SUBMIT_ADDITIONAL_INFO,
  )
}
