import { isValidPhoneNumber } from 'libphonenumber-js'
import * as yup from 'yup'
import { FieldController } from '.'
import Option from './Option'

interface FieldConfig {
  type:
    | 'TEXT'
    | 'TEXTFILE'
    | 'PASSWORD'
    | 'DATE'
    | 'DATE_TEXTFILE'
    | 'FILE'
    | 'TOKEN'
    | 'TOKENS'
    | 'NUMBER'
    | 'NUMBER_TEXTFILE'
    | 'NETWORK'
    | 'TEXTAREA'
    | 'TEXTAREA_TEXTFILE'
    | 'CHECKBOX'
    | 'SINGLE_SELECT'
    | 'SINGLE_SELECT_TEXTFILE'
    | 'MULTIPLE_SELECT'
    | 'MULTIPLE_SELECT_TEXTFILE'
    | 'COMPONENT'
    | 'MOBILE'
    | 'COUNTRY'
    | 'ADDRESS'
    | 'JOB_STATUS'
    | 'ACCOUNT_TYPE'
  name: string
  label?: string | number | React.ReactNode
  value?: any
  accept?: string
  options?: Option[]
  loading?: boolean
  disabled?: boolean
  required?: boolean
  validated?: any
  autoFocus?: boolean
  placeholder?: string
  min?: number
  max?: number
  hint?: React.ReactNode
  hidden?: boolean
  component?: React.ComponentType<FieldController>
}

const requiredMessage = 'This is required'

const textValidated = yup.string().required(requiredMessage)

const multiValidated = yup.array().required(requiredMessage).min(1, requiredMessage)

const objectValidated = yup.mixed().notOneOf([undefined, null], requiredMessage)

const mobileValidated = yup.object({
  code: objectValidated,
  number: textValidated.test(
    'phone-number',
    'This is not a phone number',
    (value = '', context) => {
      return isValidPhoneNumber(value, context.parent.code?.value)
    },
  ),
})

const numberValidated = yup.number().required(requiredMessage)

const addressValidated = yup.object({
  city: textValidated,
  state: textValidated,
  zipCode: textValidated,
})

const passwordValidated = yup
  .string()
  .required(requiredMessage)
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    'Password must contain at least 8 characters with at least 1 number (0-9), 1 uppercase letter and 1 lowercase letter.',
  )

const checkboxValidated = yup
  .boolean()
  .required(requiredMessage)
  .oneOf([true], 'Please check this box to proceed.')

const tokenAmountValidated = yup.object({
  token: objectValidated,
  amount: numberValidated,
})

const swiftCodeValidated = yup.object({
  type: objectValidated,
  code: textValidated,
})

export {
  textValidated,
  multiValidated,
  objectValidated,
  mobileValidated,
  numberValidated,
  addressValidated,
  passwordValidated,
  checkboxValidated,
  tokenAmountValidated,
  swiftCodeValidated,
}

export default FieldConfig
