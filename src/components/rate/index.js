import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Font } from 'components'
import styles from './styles.module.scss'

const RateItem = props => {
  const { name, value } = props
  const { register, errors } = useFormContext()

  return (
    <>
      <input
        className={styles.input}
        type="radio"
        name={name}
        id={`${name}-${value}`}
        value={value}
        ref={register({ required: 'This is required' })}
        helperText={errors && errors.message}
      />
      <label className={styles.label} for={`${name}-${value}`}>
        <Font className={styles.text} element="div" color="secondary">
          {value}
        </Font>
      </label>
    </>
  )
}

const Rate = props => {
  return (
    <>
      <div className={styles.container}>
        <RateItem value={1} name={props.name} />
        <RateItem value={2} name={props.name} />
        <RateItem value={3} name={props.name} />
        <RateItem value={4} name={props.name} />
        <RateItem value={5} name={props.name} />
      </div>
      <div className={styles.legend}>
        <Font type="bodySmall" color="secondary" className={styles.legendItem}>
          disagree
        </Font>
        <Font type="bodySmall" color="secondary" className={styles.legendItem}>
          neutral
        </Font>
        <Font type="bodySmall" color="secondary" className={styles.legendItem}>
          strongly agree
        </Font>
      </div>
    </>
  )
}

export default Rate
