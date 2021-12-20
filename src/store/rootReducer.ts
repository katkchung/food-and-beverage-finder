import { combineReducers } from 'redux'
import { mapquestReducer } from './mapquestAPI/mapquestReducer'
import { yelpReducer } from './yelpApi/yelpReducer'

export const rootReducer: any = combineReducers({
  yelp: yelpReducer,
  map: mapquestReducer
})

export type AppState = ReturnType<typeof rootReducer>
