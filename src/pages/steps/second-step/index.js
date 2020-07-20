import React, { useContext } from 'react'
import Input from 'components/input'
import { SurveyStep, Form, QuestionHeader, ButtonContainer } from 'components'
import DataContext from 'context'

const FirstStep = props => {
  const onSubmit = data => console.log(data)
  const data = useContext(DataContext);
  const handleChange = e => {
    console.log('=====e', e);
  }

  return (
    <SurveyStep>
      <Form onSubmit={onSubmit} defaultValues={{ name: 'Great' }}>
        <QuestionHeader counter={1}>
          What is your first and last name?
        </QuestionHeader>
        <Input name="name" onChange={handleChange}/>

        <ButtonContainer content="OK" withIcon />
      </Form>
    </SurveyStep>
  )
}

export default FirstStep
