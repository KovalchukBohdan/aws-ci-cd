import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { useForm, FormProvider } from 'react-hook-form'
import {
  gql,
  useQuery,
} from '@apollo/client'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { DataContext, HeaderContext } from 'Context'
import { StickyHeader } from 'Components'
import AnimatedSurveyRoutes from './pages/animated-survey-routes'
import styles from './App.module.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3d3d3d',
    },
    secondary: {
      main: '#4fb0ae',
    },
  },
})

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

const App = props => {
  const { history, location } = props

  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  // Response from BE call
  const response = {
    name: 'Great',
    lastname: 'q',
  }

  const methods = useForm({ defaultValues: response })

  useEffect(() => {
    // The Welcome step by default or will push the user into the last unfilled step
    history.push('/welcome')
  }, [history])

  const nextStep = path => () => {
    if (location.pathname !== path) {
      history.push({
        pathname: path,
      })
    }
  }

  const [dataContext, setDataContext] = useState(response)
  const [headerContext, setHeaderContext] = useState({})

  return (
    <ThemeProvider theme={theme}>
      <DataContext.Provider value={[dataContext, setDataContext]}>
        <HeaderContext.Provider value={[headerContext, setHeaderContext]}>
          <FormProvider {...methods}>
            <div className={styles.container}>
              <StickyHeader />
              <AnimatedSurveyRoutes nextStep={nextStep} />
            </div>
          </FormProvider>
        </HeaderContext.Provider>
      </DataContext.Provider>
    </ThemeProvider>
  )
}

export default withRouter(App)
