import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

const Form = ({ defaultValues, children, nextStep, prevStep, onSubmit }) => {
  const {
    register,
    errors,
    handleSubmit,
    getValues,
    watch,
    formState: { isDirty, isSubmitting, touched, submitCount },
  } = useFormContext()

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

  return <form onSubmit={handleSubmit(onSubmitHandle)}>{children}</form>
}

export default Form
