import axios from 'axios';
import {MAPQUEST_KEY} from '../../constants'

export const getCoordinates = (address: string) => async (dispatch: any) => {
  try {
    const res = await axios
      .get(
        `http://www.mapquestapi.com/geocoding/v1/address?key=${MAPQUEST_KEY}&location=${address}`

        )
      dispatch({
        type: 'GET_LAT_LONG_COORDINATES',
        payload: res.data
      })
  } catch (err) {
    console.error("Mapquest API lat/long error", err);
    return undefined
  }
};

export const setCurrentAddress = (address: string) => (dispatch:any) => {
  dispatch({
    type: 'SET_CURRENT_ADDRESS',
    payload: address
  })
}

export const getDrivingTime = (address1: string, address2: string, shopName: string) => async (dispatch: any) => {
  try {
    const res = await axios
      .get(
        `http://www.mapquestapi.com/directions/v2/optimizedroute?key=${MAPQUEST_KEY}&json={"locations":["${address1}", "${address2}"]} `
        )
    const drivingTime = parseInt(await res.data.route.realTime)/60
    dispatch({
      type: 'UPDATE_LIST_OF_DRIVING_TIMES',
      payload: {name: shopName, drivingTime: drivingTime}
    })
    return drivingTime
  } catch (err) {
    console.error("Mapquest API driving times error", err);
  }
}
