import React from 'react'
import { Font } from 'components'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './styles.module.scss'

const QuestionHeader = props => {
  const { counter, children } = props
  return (
    <div className={styles.container}>
      {counter && (
        <Font className={styles.counter} element="div" type="counter" color="secondary">
          {counter} <ArrowForwardIcon style={{ fontSize: '14px' }}/>
        </Font>
      )}
      <Font type="heading" style={{ marginBottom: 32 }}>
        {children}
      </Font>
    </div>
  )
}

export default QuestionHeader
