import {
  DocumentNode,
  LazyQueryHookOptions,
  LazyQueryResultTuple,
  OperationVariables,
  TypedDocumentNode,
  useLazyQuery as apolloLazyQuery,
} from '@apollo/client'
import { toast } from 'react-toastify'

const useLazyQuery = <TData = any, TVariables extends OperationVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: LazyQueryHookOptions<TData, TVariables>,
): LazyQueryResultTuple<TData, TVariables> => {
  return apolloLazyQuery(query, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onError: error => toast.error(error.message),
    ...options,
  })
}

export default useLazyQuery
