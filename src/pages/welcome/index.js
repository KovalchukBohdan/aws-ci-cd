import React from 'react'
import {
  Font,
  Form,
  SurveyStep,
  ImgContainer,
  ButtonContainer,
} from 'Components'
import welcomeImg from 'Assets/welcome.png'

const WelcomeStep = props => {
  return (
    <SurveyStep width={880} textAlign="center">
      <Form {...props}>
        <ImgContainer
          src={welcomeImg}
          alt="Welcome to the MAHA Purpose Experience!"
        />
        <Font type="heading" element="h1">
          Welcome to the MAHA Purpose Experience!
        </Font>
        <ButtonContainer
          fontType="heading"
          content="Start"
          align="center"
          withoutAnimateButton={props.withoutAnimateButton}
        />
      </Form>
    </SurveyStep>
  )
}

export default WelcomeStep
