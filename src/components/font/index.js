import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Font = forwardRef((props, ref) => {
  const {element, className, type, weight, color, ...otherProps} = props,
    classes = [
      className,
      styles[type],
      styles[weight],
      styles[color]
    ].filter(Boolean), // Remove falsy values
    Component = element

  return <Component ref={ref} className={classes.join(' ')} {...otherProps}/>
})

Font.propTypes = {
  element: PropTypes.string,
  type: PropTypes.oneOf([
    'heading',
    'bodyLarge',
    'body',
    'bodySmall',
    'counter',
    'disclaimer',
    'inherit'
  ]),
  weight: PropTypes.oneOf([
    'regular',
    'semiBold',
    'bold',
    'extraBold'
  ]),
  color: PropTypes.oneOf([
    'neutral',
    'lighter',
    'secondary',
    'error',
    'white'
  ])
}

Font.defaultProps = {
  element: 'p',
  type: 'body'
}

Font.displayName = 'Font'

export default Font
