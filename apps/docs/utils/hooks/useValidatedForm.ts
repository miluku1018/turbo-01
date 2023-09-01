import { FieldConfig } from '@core/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo } from 'react'
import { FieldValues, useForm, UseFormProps, UseFormReturn } from 'react-hook-form'
import * as yup from 'yup'

const useValidatedForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(
  fieldConfigs: FieldConfig[] = [],
  useFormProps?: UseFormProps<TFieldValues, TContext>,
): UseFormReturn<TFieldValues, TContext> => {
  const schema = useMemo(
    () =>
      yup.object({
        ...fieldConfigs.reduce<{ [key: string]: any }>((prev, curr) => {
          if (curr && curr.validated) prev[curr.name] = curr.validated
          return prev
        }, {}),
      }),
    [fieldConfigs],
  )

  return useForm({ ...useFormProps, resolver: yupResolver(schema) })
}

export default useValidatedForm
