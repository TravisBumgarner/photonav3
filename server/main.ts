import { Meteor } from 'meteor/meteor'
import { RoutesCollection } from '/imports/api/routes'

function insertRoute() {
  RoutesCollection.insert({
    userId: 'Bob',
    route: ['NE'],
    createdAt: new Date(),
  })
}

Meteor.startup(() => {
  // If the Routes collection is empty, add some data.
  if (RoutesCollection.find().count() === 0) {
    insertRoute()
    insertRoute()
  }
})
