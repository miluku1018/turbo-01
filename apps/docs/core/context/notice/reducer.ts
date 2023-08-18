type State = {
  notice: { [key: string]: number }
  status: 'loading' | 'success'
}

type Action = { type: 'loading' } | { type: 'success'; payload: { [key: string]: number } }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'loading':
      return { status: 'loading', notice: {} }
    case 'success':
      return { status: 'success', notice: action.payload }
    default:
      return { ...state }
  }
}
