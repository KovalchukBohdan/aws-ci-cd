import React from 'react'
import { Animated } from 'react-animated-css'
import CheckIcon from '@material-ui/icons/Check'
import Button from 'components/button'
import Font from 'components/font'
import styles from './styles.module.scss'

const ButtonContainer = props => {
  const {
    content = 'Continue',
    align = 'left',
    onClick = null,
    withIcon = false,
    withoutError = false,
  } = props

  return (
    <Animated
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      animationInDuration={400}
      animationOutDuration={400}
      isVisible={true}
    >
      <div
        className={styles.buttonBlock}
        style={{ justifyContent: align, marginTop: withoutError ? 32 : 12 }}
      >
        <Button onClick={onClick} {...props}>
          {content}
          {withIcon && <CheckIcon className={styles.icon} />}
        </Button>
        <div className={styles.actionBlock}>
          <Font className={styles.command} type="disclaimer">
            press
          </Font>
          <Font className={styles.key} type="disclaimer" weight="bold">
            Enter ↵
          </Font>
        </div>
      </div>
    </Animated>
  )
}

export default ButtonContainer
