import Option from './Option'

interface PolicyForm {
  name: string
  description: string
  viewers: Option[]
  approvers: any[]
  requesters: any[]
}

export default PolicyForm
