
  export const initialMapState: {
    currentAddress: string | null
    currentLat: string | null
    currentLong: string | null
    drivingTimes: []

  } = {
    currentAddress: null,
    currentLat: null,
    currentLong: null,
    drivingTimes: []
  }
  
  export const mapquestReducer = (
    state = initialMapState,
    action: any
  ) => {
    const { type, payload } = action
    switch (type) {
      case 'SET_CURRENT_ADDRESS': {
        return {
          ...state,
          currentAddress: payload
        }
      }
      
      case 'GET_LAT_LONG_COORDINATES': {
        return {
          ...state,
          currentLat: payload.results[0].locations[0].latLng.lat,
          currentLong: payload.results[0].locations[0].latLng.lng
        }
      }

      case 'UPDATE_LIST_OF_DRIVING_TIMES': {
        return {
          ...state,
          drivingTimes: [...state.drivingTimes, payload]
        }
      }
      default:
        return state
    }
  }
  