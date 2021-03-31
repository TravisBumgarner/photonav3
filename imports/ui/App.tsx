import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header, NewExploration, Compass } from './components'

const PageWrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const App = () => {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Header />
        <Switch>
          <Route path="/new">
            <NewExploration />
          </Route>
          <Route path="/compass">
            <Compass />
          </Route>
        </Switch>
      </PageWrapper>
    </BrowserRouter>
  )
}

export default App
