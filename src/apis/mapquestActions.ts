import axios from 'axios';
import {MAPQUEST_KEY} from './constants'

export interface Coordinates {
  lat: string
  long: string
}

export async function getCoordinates(address: string): Promise<Coordinates | undefined> {
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
    console.error("Mapquest API lat/long error", err);
  }
};


export async function getDrivingTime(address1: string, address2: string): Promise<number | undefined> {
  try {
    const res = await axios
      .get(
        `http://www.mapquestapi.com/directions/v2/optimizedroute?key=${MAPQUEST_KEY}&json={"locations":["${address1}", "${address2}"]} `
        )
      return Math.round(parseInt(res.data.route.realTime)/60)
  } catch (err) {
    console.error("Mapquest API driving times error", err);
  }
}
