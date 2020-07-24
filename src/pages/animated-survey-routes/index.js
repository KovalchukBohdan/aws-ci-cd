import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { withRouter } from 'react-router'

import WelcomeStep from '../welcome'
import FirstStep from '../steps/first-step'
import SecondStep from '../steps/second-step'
import ThirdStep from '../steps/third-step'
import FourthStep from '../steps/fourth-step'

import styles from './styles.module.scss'

const AnimatedSurveyRoutes = props => {
  const { history, location } = props

  const { nextStep } = props
  return (
    <Wrapper>
      <SwitchTransition mode="out-in" className={styles.transitionGroup}>
        <CSSTransition
          key={location.key}
          timeout={350}
          appear
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false)
          }}
          classNames={'fade'}
        >
          <Switch location={location}>
            <Route exact path="/welcome">
              <WelcomeStep nextStep={nextStep('/first')} withoutAnimateButton />
            </Route>
            <Route path="/first">
              <FirstStep nextStep={nextStep('/second')} withoutAnimateButton />
            </Route>
            <Route path="/second">
              <SecondStep nextStep={nextStep('/third')} name="name"/>
            </Route>
            <Route path="/third">
              <ThirdStep nextStep={nextStep("/fourth")} name="last"/>
            </Route>
            <Route path="/fourth">
              <FourthStep nextStep={nextStep("/complete")} name="rate"/>
            </Route>

            <Redirect to="/welcome" />
          </Switch>
        </CSSTransition>
      </SwitchTransition>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0;
    transform: translateY(100%);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: 350ms ease;
  }

  .fade-exit {
    opacity: 1;
    transform: translateY(0);
    transition: 350ms ease;
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateY(-100%);
    transition: 350ms;
  }
`

export default withRouter(AnimatedSurveyRoutes)
