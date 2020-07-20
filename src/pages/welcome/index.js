import React, { useEffect } from 'react'
import { Font, Form, SurveyStep, ImgContainer, ButtonContainer } from 'components'
import welcomeImg from 'assets/welcome.png'

const WelcomeStep = props => {
  const onFormSubmit = e => {
    props.nextStep()
  }

  return (
    <SurveyStep width={880} textAlign="center">
      <Form onSubmit={onFormSubmit}>
        <ImgContainer src={welcomeImg} alt="Welcome to the MAHA Purpose Experience!"/>
        <Font type="heading" element="h1">
          Welcome to the MAHA Purpose Experience!
        </Font>
        <ButtonContainer fontType="heading" content="Start" align="center" />
      </Form>
    </SurveyStep>
  )
}

export default WelcomeStep
