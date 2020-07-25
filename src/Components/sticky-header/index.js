import React, { useContext, useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'
import { HeaderContext } from 'Context'
import { QuestionHeader } from 'Components'
import isEmpty from 'lodash.isempty'
import styles from './styles.module.scss'

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const StickyHeader = props => {
  const [headerContext] = useContext(HeaderContext)
  const { counter, content } = headerContext

  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setInProp(!isEmpty(headerContext))
  }, [headerContext])

  return (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div
          className={styles.container}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className={styles.wrapper}>
            <QuestionHeader counter={counter} type="body" marginBottom={0}>
              {content}
            </QuestionHeader>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default StickyHeader
