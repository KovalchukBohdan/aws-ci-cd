import React from 'react'
import { SurveyStep, Form, QuestionHeader, ButtonContainer } from 'components'

const FirstStep = props => {
  const onSubmit = () => props.nextStep()
  return (
    <SurveyStep>
      <Form onSubmit={onSubmit}>
        <QuestionHeader>
          First off, let's gather some basic data on who you are.
        </QuestionHeader>
        <ButtonContainer />
      </Form>
    </SurveyStep>
  )
}

export default FirstStep
