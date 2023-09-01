import { COMMAND_USER_CREATE } from '@core/graphql/mutations'
import { CommandUserCreateInput, CommandUserCreateResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandUserCreate = () => {
  return useMutation<
    { commandUserCreate: CommandUserCreateResponse },
    { input: CommandUserCreateInput }
  >(COMMAND_USER_CREATE)
}
