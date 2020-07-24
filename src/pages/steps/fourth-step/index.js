import React, { useContext } from 'react'
import { SurveyStep, Form, QuestionHeader, ButtonContainer, Rate } from 'components'
import DataContext from 'context'

const FourthStep = props => {
  const { name } = props
  const data = useContext(DataContext)

  return (
    <SurveyStep>
      <Form defaultValues={data[name]} {...props}>
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
