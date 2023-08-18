import { Control, FieldValues, UseFormSetValue } from 'react-hook-form'
import FieldConfig from './FieldConfig'

interface Form<T extends FieldValues = any> {
  errors?: any
  control: Control<T>
  setValue?: UseFormSetValue<any>
}

interface FieldController<T extends FieldValues = any> extends Omit<FieldConfig, 'type'> {
  form: Form<T>
}

export type { Form }

export default FieldController
