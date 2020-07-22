import React, { useState, useEffect } from 'react'
import CheckIcon from '@material-ui/icons/Check'
import { Transition } from 'react-transition-group'
import Button from 'components/button'
import Font from 'components/font'
import { useFormContext } from 'react-hook-form'
import isEmpty from 'lodash.isempty'
import styles from './styles.module.scss'

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const ButtonContainer = props => {
  const {
    content = 'Continue',
    align = 'left',
    onClick = null,
    withIcon = false,
    withoutError = false,
    withoutAnimateButton = false,
  } = props

  const [inProp, setInProp] = useState(withoutAnimateButton)
  const { watch } = useFormContext()
  const watchAll = watch()

  useEffect(() => {
    if (!withoutAnimateButton) {
      setInProp(!isEmpty(watchAll))
    }
  }, [watchAll])

  return (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div
          className={styles.buttonBlock}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
            justifyContent: align,
            paddingTop: withoutError ? 32 : 12,
          }}
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
      )}
    </Transition>
  )
}

export default ButtonContainer
