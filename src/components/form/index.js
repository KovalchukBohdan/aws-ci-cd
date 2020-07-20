import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function Form({ defaultValues, children, onSubmit }) {
  const methods = useForm({ defaultValues })
  const { errors, handleSubmit } = methods

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        handleSubmit(onSubmit)()
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child => {
        return child && child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
                errors: errors[child.props.name]
              },
            })
          : child
      })}
    </form>
  )
}
