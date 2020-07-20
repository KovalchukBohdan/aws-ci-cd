import React from 'react'
import MaterialButton from '@material-ui/core/Button'
import Font from 'components/font'

const Button = props => {
  return (
    <MaterialButton type="submit" value="Submit" color="secondary" onClick={props.onClick} variant="contained" {...props}>
      <Font type={props.fontType || 'body'} weight="bold" color="white" style={{ textTransform: 'capitalize' }}>
        {props.children}
      </Font>
    </MaterialButton>
  )
}

export default Button
