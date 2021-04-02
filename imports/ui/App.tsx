import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'

import { Context, ContextProvider } from './context'
import { Header, NewExploration, ExplorationsList, Compass } from './components'

const PageWrapper = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const NameInput = ({ setName }) => {
    const [value, setValue] = React.useState('')

    return (
        <div>
            <label>What is your name?</label>
            <input
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>
            <button onClick={() => setName(value)}>Submit</button>
        </div>
    )
}

const App = () => {
    const { userId, setUserId } = React.useContext(Context)

    const [isReady] = useTracker(() => {
        const handles = [Meteor.subscribe('routes.public')]
        const isReady = handles.every((handle) => handle.ready())
        return [isReady]
    }, [])

    if (!userId) {
        return <NameInput setName={setUserId} />
    }

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

const ContextApp = () => {
    return (
        <ContextProvider>
            <App />
        </ContextProvider>
    )
}

export default ContextApp
