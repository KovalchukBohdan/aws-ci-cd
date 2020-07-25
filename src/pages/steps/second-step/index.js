import React, { useContext } from 'react'
import { SurveyStep, Form, QuestionHeader, ButtonContainer, Input } from 'Components'

const FirstStep = props => {
  const { name } = props

  return (
    <SurveyStep>
      <Form {...props}>
        <QuestionHeader counter={1}>
          What is your first and last name?
        </QuestionHeader>
        <Input name={name}/>

        <ButtonContainer content="OK" withIcon />
      </Form>
    </SurveyStep>
  )
}

export default FirstStep
