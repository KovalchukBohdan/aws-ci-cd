import React, { useContext } from 'react'
import { SurveyStep, Form, QuestionHeader, ButtonContainer, Radio } from 'components'
import DataContext from 'context'

const FirstStep = props => {
  const { name } = props
  const data = useContext(DataContext)

  return (
    <SurveyStep>
      <Form defaultValues={data[name]} {...props}>
        <QuestionHeader counter={2}>
          What is your first and last name?
        </QuestionHeader>
        <div>
          <Radio name="lastname" value="q"/>
          <Radio name="lastname" value="w"/>
          <Radio name="lastname" value="e"/>
          <Radio name="lastname" value="r"/>
        </div>

        <ButtonContainer content="OK" withIcon />
      </Form>
    </SurveyStep>
  )
}

export default FirstStep
