import React from 'react'
import { Font } from 'components'
import CheckIcon from '@material-ui/icons/Check'
import { useFormContext } from "react-hook-form";
import styles from './styles.module.scss'

const Radio = props => {
  const { name, value, label = '', key = 'A', type = 'radio' } = props
  const { register, errors } = useFormContext()

  return (
    <div>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={value}
        value={value}
        ref={register({ required: 'This is required' })}
        helperText={errors && errors.message}
      />
      <label className={styles.label} for={value}>
        <Font
          element="div"
          color="secondary"
          className={styles.key}
          weight="bold"
          type="disclaimer"
        >
          {key}
        </Font>
        <Font className={styles.text} element="div" color="secondary">
          {label}
        </Font>
        <div className={styles.check}>
          <CheckIcon color="secondary" style={{ fontSize: 22 }} />
        </div>
      </label>
    </div>
  )
}

export default Radio
