import { QueryHookOptions } from '@apollo/client'
import { USERS } from '@core/graphql/queries'
import { Role, UserPage, UserRole } from '@core/graphql/types'
import { formatUser } from '@utils/format'
import useQuery from '../useQuery'

interface Data {
  users: UserPage
}

interface Variables {
  clientId?: string
  roles?: UserRole[]
  offset?: number
  limit?: number
}

export const useUsers = (options?: QueryHookOptions<Data, Variables>) => {
  const { data, ...props } = useQuery<Data, Variables>(USERS, options)

  const getOptions = (options?: { isEditor?: boolean }) => {
    const list = options?.isEditor
      ? data?.users.list.filter(item => item.role !== Role.UserViewer)
      : data?.users.list

    return list?.map(user => formatUser(user))
  }

  return { ...props, data, getOptions }
}
