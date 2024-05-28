'use client'

import {
  CriteriaMode,
  DefaultValues,
  FieldValues,
  FormProvider,
  useForm,
  useFormState,
} from 'react-hook-form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/presentation/components/ui/popover'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodType, ZodTypeDef } from 'zod'
import { FormResolver } from '@/utils/Classes'
import { FormHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Controller, useFormContext } from 'react-hook-form'
import { Input, InputProps } from './ui/input'
import { Button, ButtonProps } from './ui/button'
import { Calendar } from './ui/calendar'
import { format } from 'date-fns'

export type FormState = {
  isDirty: boolean
}

interface Props<
  T extends FieldValues,
  F extends FieldValues | undefined = undefined
> extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  initialValues?: DefaultValues<T>
  children: React.ReactNode
  criteriaMode?: CriteriaMode | undefined
  mode?: 'onSubmit' | 'all' | 'onBlur' | 'onChange' | 'onTouched'
  schema?: ZodType<unknown, ZodTypeDef, unknown>
  disabled?: boolean
  onSubmit: (
    data: F extends FieldValues ? F : T,
    state: FormState
  ) => Promise<void> | void
}

function Form<T extends FieldValues, F extends FieldValues = T>({
  initialValues,
  children,
  schema,
  onSubmit,
  mode,
  criteriaMode,
  disabled,
  className,
  ...rest
}: Props<T, F>) {
  const methods = useForm<T, unknown, F>({
    mode,
    criteriaMode,
    defaultValues: initialValues,
    disabled,
    resolver: schema
      ? zodResolver(schema, {
          errorMap: (error) => FormResolver.resolve(error),
        })
      : undefined,
  })

  const handleSubmit = async (data: F extends FieldValues ? F : T) => {
    const hasDirtyFields = Object.keys(methods.formState.dirtyFields).length > 0
    await onSubmit(data, { isDirty: hasDirtyFields })
  }

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={methods.handleSubmit(handleSubmit as any)}
        className={cn('flex flex-col h-full', className)}
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  )
}

interface FormInputProps extends InputProps {
  name: string
}

function FormInput({ name, className, ...rest }: FormInputProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ...field }, fieldState }) => {
        return (
          <Input
            data-error={!!fieldState.error?.message}
            className={cn(
              'data-[error=true]:ring-1 ring-red-400 disabled:bg-gray-100 placeholder:text-gray-400',
              className
            )}
            {...rest}
            {...field}
          />
        )
      }}
    />
  )
}

interface FormDatePickerProps {
  id?: string
  name: string
  className?: string
  placeholder?: string
}

function FormDatePicker({
  name,
  className,
  placeholder,
  ...props
}: FormDatePickerProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-full h-10 justify-start text-left font-normal px-4 bg-card',
                  !field.value && 'text-muted-foreground',
                  !!fieldState.error?.message && 'ring-1 ring-red-400',
                  className
                )}
                {...props}
              >
                {field.value ? (
                  format(field.value, 'dd/MM/yyyy')
                ) : (
                  <span>{placeholder || 'Selecione uma data'}</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                initialFocus
                selected={field.value}
                onSelect={field.onChange}
              />
            </PopoverContent>
          </Popover>
        )
      }}
    />
  )
}

function FormButton({
  children,
  ...rest
}: React.PropsWithChildren<ButtonProps>) {
  const {
    formState: { isSubmitting },
  } = useFormContext()

  return (
    <Button type="submit" isLoading={isSubmitting} {...rest}>
      {children}
    </Button>
  )
}

interface FormErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
}

function FormError({ name, className, ...rest }: FormErrorProps) {
  const { errors } = useFormState({
    name,
  })
  const message = errors[name]?.message
  const error = message ? message.toString() : null

  if (!error) return <></>

  return (
    <div className={cn('absolute bottom-[-24px]', className)} {...rest}>
      <span className="text-xs font-normal text-red-400">{error}</span>
    </div>
  )
}

export { Form, FormInput, FormDatePicker, FormButton, FormError }
