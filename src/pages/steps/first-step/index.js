import React from 'react'
import { SurveyStep, Form, QuestionHeader, ButtonContainer } from 'components'

const FirstStep = props => {
  return (
    <SurveyStep>
      <Form {...props}>
        <QuestionHeader>
          First off, let's gather some basic data on who you are.
        </QuestionHeader>
        <ButtonContainer withoutAnimateButton={props.withoutAnimateButton} />
      </Form>
    </SurveyStep>
  )
}

export default FirstStep
