import React, { useContext } from 'react'
import { SurveyStep, Form, QuestionHeader, ButtonContainer, Input } from 'components'
import DataContext from 'context'

const FirstStep = props => {
  const { name } = props
  const data = useContext(DataContext)

  return (
    <SurveyStep>
      <Form defaultValues={data[name]} {...props}>
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
