import React from 'react'
import TextField from '@material-ui/core/TextField'
import { FieldContainer } from 'components'
import styles from './styles.module.scss'

const Input = ({ register, name, placeholder = 'Type your answer here...', required = true, errors, ...rest }) => {
  return (
    <FieldContainer>
      <TextField
        className={styles.textInput}
        color="secondary"
        fullWidth
        error={errors}
        inputRef={register({ required: 'This is required' })}
        name={name}
        placeholder={placeholder}
        helperText={errors && errors.message}
        {...rest}
      />
    </FieldContainer>
  )
}

export default Input
