import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context'

const HeaderSubWrapper = styled.div`
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
    { to: '/compass', text: 'Compass' },
]

const Navigation = styled.ul`
    display: flex;
    list-style: none;
`

const NavigationItem = styled.li`
    margin-right: 1rem;
`

const Header = () => {
    const { userId: user } = React.useContext(Context)

    return (
        <div>
            <HeaderSubWrapper>
                <Title>Photoxploration!</Title>
                <Navigation>
                    {links.map(({ to, text }) => (
                        <NavigationItem key={to}>
                            <Link to={to}>{text}</Link>
                        </NavigationItem>
                    ))}
                </Navigation>
            </HeaderSubWrapper>
            <HeaderSubWrapper>Hi, {user}</HeaderSubWrapper>
        </div>
    )
}

export default Header
