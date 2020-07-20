import React from 'react'
import styles from './styles.module.scss'

const FieldContainer = props => {
  return (
    <div className={styles.fieldContainer}>
      {props.children}
    </div>
  )
}

export default FieldContainer
