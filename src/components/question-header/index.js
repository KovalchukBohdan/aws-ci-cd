import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Font } from 'Components'
import styles from './styles.module.scss'

const QuestionHeader = props => {
  const {
    counter,
    children,
    type = 'heading',
    marginBottom = 32,
    isDot = false,
  } = props
  return (
    <div className={styles.container} style={{ marginBottom }}>
      {counter && (
        <Font
          className={styles.counter}
          element="div"
          type="counter"
          color="secondary"
        >
          {counter}
          {isDot ? '.' : <ArrowForwardIcon style={{ fontSize: '14px' }} />}
        </Font>
      )}
      <Font type={type}>{children}</Font>
    </div>
  )
}

export default QuestionHeader
