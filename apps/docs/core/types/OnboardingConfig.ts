import FieldConfig from './FieldConfig'

interface OnboardingConfig {
  title: string
  subtitle: string
  formFields?: FieldConfig[]
  moreFields?: FieldConfig[]
}

export default OnboardingConfig
