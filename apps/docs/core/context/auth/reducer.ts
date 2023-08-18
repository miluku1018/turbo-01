type State = {
  me?: any
  status: 'loading' | 'reviewing' | 'onboarding' | 'authenticated' | 'unauthenticated'
}

type Action =
  | { type: 'loading' }
  | { type: 'reviewing'; payload: any }
  | { type: 'onboarding'; payload: any }
  | { type: 'authenticated'; payload: any }
  | { type: 'unauthenticated' }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'loading':
      return { status: 'loading', me: undefined }
    case 'reviewing':
      return { status: 'reviewing', me: action.payload }
    case 'onboarding':
      return { status: 'onboarding', me: action.payload }
    case 'authenticated':
      return { status: 'authenticated', me: action.payload }
    case 'unauthenticated':
      return { status: 'unauthenticated', me: undefined }
    default:
      return { ...state }
  }
}
