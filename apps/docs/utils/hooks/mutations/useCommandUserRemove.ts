import { COMMAND_USER_REMOVE } from '@core/graphql/mutations'
import { CommandRemoveUserInput, CommandUserRemoveResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandUserRemove = () => {
  return useMutation<
    { commandUserRemove: CommandUserRemoveResponse },
    { input: CommandRemoveUserInput }
  >(COMMAND_USER_REMOVE)
}
