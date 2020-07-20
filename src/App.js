import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import DataContext from './context'
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

const App = props => {
  const { history, location } = props

  useEffect(() => {
    history.push('/welcome')
  }, [history])

  const nextStep = path => () => {
    if (location.pathname !== path) {
      history.push({
        pathname: path,
      })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <DataContext.Provider value={{}}>
        <div className={styles.container}>
          <AnimatedSurveyRoutes nextStep={nextStep} />
        </div>
      </DataContext.Provider>
    </ThemeProvider>
  )
}

export default withRouter(App)
