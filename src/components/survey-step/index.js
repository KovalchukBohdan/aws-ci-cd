import React from 'react'
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const SurveyStep = props => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} style={{ width: props.width, textAlign: props.textAlign }}>
        {props.children}
      </div>
    </div>
  )
}

SurveyStep.propTypes = {
  maxWidth: PropTypes.number,
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
}

SurveyStep.defaultProps = {
  maxWidth: null,
  textAlign: 'left'
}

export default SurveyStep
