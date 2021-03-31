import React from 'react'
import styled from 'styled-components'
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'

import { RoutesCollection } from '/imports/api/routes'

type Direction = 'NW' | 'N' | 'NE' | 'W' | 'C' | 'E' | 'SE' | 'S' | 'SE'

type TileProps = {
  direction: Direction
  className?: string
  setRoute: () => void
}

const PageWrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TileTable = styled.div`
  display: flex;
  flex-direction: column;
  height: min(80vw, 80vh);
  width: min(80vw, 80vh);
`

const TileRow = styled.div`
  display: flex;
  flex-direction: row;
`

const Tile = styled(({ direction, className, setRoute }: TileProps) => (
  <div className={className}>
    <button
      onClick={() => {
        setRoute((prevRoute: Direction) => [...prevRoute, direction])
      }}
    >
      {direction}
    </button>
  </div>
))`
  background-color: gray;
  height: auto;
  flex: 1 0 auto;
  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    float: left;
    padding-top: 100%;
  }
`

const saveRoute = (route: Direction[]) => {
  RoutesCollection.insert({
    userId: 'Mike',
    route,
    createdAt: new Date(),
  })
}

const DIRECTIONS = [
  ['NW', 'N', 'NE'],
  ['W', 'C', 'E'],
  ['SW', 'S', 'SE'],
]

export const Compass = () => {
  const [route, setRoute] = React.useState([])

  const [isLoading, routes] = useTracker(() => {
    const handle = Meteor.subscribe('routes.public')
    const data = RoutesCollection.find().fetch()
    console.log(RoutesCollection)
    return [!handle.ready(), data]
  }, [])

  if (isLoading) {
    return <p>Loading</p>
  }
  console.log(routes)
  return (
    <PageWrapper>
      <button onClick={() => saveRoute(route)}>Save Route</button>
      <TileTable>
        {DIRECTIONS.map((row) => {
          return (
            <TileRow key={row[0]}>
              {row.map((cell) => (
                <Tile key={cell} direction={cell} setRoute={setRoute} />
              ))}
            </TileRow>
          )
        })}
      </TileTable>
    </PageWrapper>
  )
}

export default Compass
