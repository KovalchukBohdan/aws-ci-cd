import React, { useContext } from 'react'
import { SurveyStep, Form, QuestionHeader, ButtonContainer, Rate } from 'Components'

const FourthStep = props => {
  const { name } = props

  return (
    <SurveyStep>
      <Form {...props}>
        <QuestionHeader counter={3}>
          I have a clear purpose that guides my life.
        </QuestionHeader>
        
        <Rate name="rate"/> 

        <ButtonContainer content="OK" withIcon />
      </Form>
    </SurveyStep>
  )
}

export default FourthStep
