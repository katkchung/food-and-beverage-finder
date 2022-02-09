import axios from 'axios';
import { Coordinates } from '../types';
import {MAPQUEST_KEY} from './constants'

export async function getCoordinates(address: string): Promise<Coordinates> {
  try {
    const res = await axios
      .get(
        `http://www.mapquestapi.com/geocoding/v1/address?key=${MAPQUEST_KEY}&location=${address}`

        )
      return {
        lat: res.data.results[0].locations[0].latLng.lat, 
        long: res.data.results[0].locations[0].latLng.lng
      }
  } catch (err) {
    throw(err)
  }
};


export async function getDrivingTime(address1: string, address2: string): Promise<number> {
  try {
    const res = await axios
      .get(
        `http://www.mapquestapi.com/directions/v2/optimizedroute?key=${MAPQUEST_KEY}&json={"locations":["${address1}", "${address2}"]} `
        )
      return Math.round(parseInt(res.data.route.realTime)/60)
  } catch (err) {
    throw(err)
  }
}
