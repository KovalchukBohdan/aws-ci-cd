import React from 'react'
import { useFormContext } from "react-hook-form";
import TextField from '@material-ui/core/TextField'
import { FieldContainer } from 'Components'
import styles from './styles.module.scss'

const Input = ({ name, placeholder = 'Type your answer here...', withoutValidate = false, validation = [], ...rest }) => {
  const { register, errors } = useFormContext()
  const error = errors[name]
  const required = withoutValidate ? {} : { required: 'This is required', ...validation }
  
  return (
    <FieldContainer>
      <TextField
        className={styles.textInput}
        color="secondary"
        fullWidth
        error={error}
        inputRef={register(required)}
        name={name}
        placeholder={placeholder}
        helperText={error && error.message}
        {...rest}
      />
    </FieldContainer>
  )
}

export default Input
