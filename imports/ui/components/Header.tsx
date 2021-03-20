import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div``

const links: {
  to: string
  text: string
}[] = [{ to: '/', text: 'Home' }]

const Header = () => {
  return (
    <HeaderWrapper>
      <ul>
        {links.map(({ to, text }) => (
          <li key={to}>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </HeaderWrapper>
  )
}

export default Header
