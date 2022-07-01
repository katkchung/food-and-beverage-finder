import axios from 'axios';
import { Coordinates, DrivingTime } from '../types';
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


export async function getDrivingTime(address1: string, address2: string): Promise<DrivingTime> {
  try {
    const res = await axios
      .get(
        `http://www.mapquestapi.com/directions/v2/optimizedroute?key=${MAPQUEST_KEY}&json={"locations":["${address1}", "${address2}"]} `
        )
    const time = res.data.route.formattedTime.split(':');
    const minutes = parseInt(time[1])
    const seconds = parseInt(time[2])
    return {minutes, seconds}
  } catch (err) {
    throw(err)
  }
}
