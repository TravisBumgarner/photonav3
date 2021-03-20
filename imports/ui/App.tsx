import React from 'react'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Header, Compass } from './components'

const PageWrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const PageTitle = styled.h1`
  height: 10vh;
  font-size: 3rem;
`

const App = () => {
  return (
    <BrowserRouter>
      <PageWrapper>
        <PageTitle>Photoxploration!</PageTitle>
        <Header />
        <Compass />
      </PageWrapper>
    </BrowserRouter>
  )
}

export default App
