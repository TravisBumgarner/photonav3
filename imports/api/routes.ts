import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

import { Direction } from '/imports/shared/types'

export interface Route {
  _id?: string
  userId?: string
  route: Direction[]
  createdAt: Date
}

export interface User {
  _id?: string
  userId: string
  name: string
}

if(Meteor.isServer){
  Meteor.publish('routes.public', function () {

    return RoutesCollection.find({}, {})
  })  
}

export const RoutesCollection = new Mongo.Collection<Route>('routes')
