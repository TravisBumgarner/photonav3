import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'

import { RoutesCollection } from '/imports/api/routes'
import { Context } from '../context'

const ExplorationsList = () => {
    const { userId } = React.useContext(Context)

    const { allRoutes } = useTracker(() => {
        const allRoutes = RoutesCollection.find().fetch()
        return { allRoutes }
    }, [])

    return (
        <div>
            <h2>User Routes</h2>
            <ul>
                {allRoutes
                    .filter((route) => route.userId === userId)
                    .map((route) => (
                        <li>{route.route.join(',')}</li>
                    ))}
            </ul>
            <h2>Other Routes</h2>
            <ul>
                {allRoutes
                    .filter((route) => route.userId !== userId)
                    .map((route) => (
                        <li>{route.route.join(',')}</li>
                    ))}
            </ul>
        </div>
    )
}

export default ExplorationsList
