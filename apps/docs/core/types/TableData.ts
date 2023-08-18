interface TableData<T> {
  data?: T
  loading: boolean
  refetch: (variables?: any) => void
}

export default TableData
