import React, { useEffect } from 'react'
import { useForm, FormProvider } from "react-hook-form"

export default function Form({
  defaultValues,
  children,
  nextStep,
  prevStep,
  onSubmit,
}) {
  const methods = useForm({ defaultValues })
  const {
    register,
    errors,
    handleSubmit,
    getValues,
    watch,
    formState: { isDirty, isSubmitting, touched, submitCount },
  } = methods

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        handleSubmit(onSubmitHandle)()
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  const onSubmitHandle = data => {
    console.log('=> data', data)
    onSubmit && onSubmit()
    nextStep()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        {React.Children.map(children, child => {
          return child && child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: register,
                  key: child.props.name,
                  errors: errors[child.props.name],
                },
              })
            : child
        })}
      </form>
    </FormProvider>
  )
}
