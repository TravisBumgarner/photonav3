import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'

import { Header, NewExploration, ExplorationsList, Compass } from './components'

const PageWrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const App = () => {
  const [isReady] = useTracker(() => {
    const handles = [Meteor.subscribe('routes.public')]
    const isReady = handles.every((handle) => handle.ready())
    return [isReady]
  }, [])

  if (!isReady) {
    return <p>Loading</p>
  }

  return (
    <BrowserRouter>
      <PageWrapper>
        <Header />
        <Switch>
          <Route path="/new">
            <NewExploration />
          </Route>
          <Route path="/explorations/me">
            <ExplorationsList />
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
