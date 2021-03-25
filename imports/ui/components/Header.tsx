import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: 3rem;
`

const links: {
  to: string
  text: string
}[] = [
  { to: '/', text: 'Home' },
  { to: '/explorations/me', text: 'My Explorations' },
  { to: '/new', text: 'New Exploration' },
]

const Navigation = styled.ul`
  display: flex;
  list-style: none;
`

const NavigationItem = styled.li`
  margin-right: 1rem;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Photoxploration!</Title>
      <Navigation>
        {links.map(({ to, text }) => (
          <NavigationItem key={to}>
            <Link to={to}>{text}</Link>
          </NavigationItem>
        ))}
      </Navigation>
    </HeaderWrapper>
  )
}

export default Header
