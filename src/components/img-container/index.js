import React from 'react'
import styles from './styles.module.scss'

const ImgContainer = props => {
  return (
    <img className={styles.img} src={props.src} alt={props.alt} />
  )
}

export default ImgContainer
