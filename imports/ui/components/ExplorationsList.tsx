import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'

import { RoutesCollection } from '/imports/api/routes'

const ExplorationsList = () => {
  const [routes] = useTracker(() => {
    const routes = RoutesCollection.find().fetch()
    return [routes]
  }, [])

  console.log(routes)
  return (
    <div>
      <h2>Exploration List</h2>
      <ul>
        {routes.map((route) => (
          <li>{route.route.join(',')}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExplorationsList
