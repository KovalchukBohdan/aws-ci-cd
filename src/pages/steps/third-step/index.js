import React, { useContext, useEffect } from 'react'
import { SurveyStep, Form, QuestionHeader, ButtonContainer, Radio } from 'Components'
import { HeaderContext } from "Context";

const FirstStep = props => {
  const { name } = props
  const [headerContext, setHeaderContext] = useContext(HeaderContext)

  useEffect(() => {
    setHeaderContext({
      counter: 3,
      content: 'To what degree do you agree with the following statements?',
    })

    return () => {
      setHeaderContext({})
    }
  }, [])

  return (
    <SurveyStep>
      <Form {...props}>
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
