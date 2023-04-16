import axios from "axios"
import { Coffeeshop, Coordinates, Restaurant } from "../types"
import { YELP_BEARER_TOKEN } from "./constants"
import { getDrivingTime } from "./mapquestActions"

export async function getLocalCoffeeShops(
  coordinates: Coordinates,
  currentAddress: string
): Promise<Coffeeshop[]> {
  try {
    const res = await axios.get(
      `https://api.yelp.com/v3/businesses/search?term=coffee&latitude=${coordinates.lat}&longitude=${coordinates.long}&limit=48`,
      {
        headers: {
          Authorization: YELP_BEARER_TOKEN,
        },
      }
    )
    const coffeeshops = res.data.businesses.map((shop: any) => ({
      name: shop.name,
      address: shop.location.address1.concat(
        ", ",
        shop.location.city,
        ", ",
        shop.location.state,
        " ",
        shop.location.zip_code
      ),
      imageUrl: shop.image_url,
      drivingTime: 0,
    }))

    let promises: any[] = []
    coffeeshops.map(async (shop: any) =>
      promises.push(
        getDrivingTime(currentAddress, shop.address).then((result) => {
          return { ...shop, drivingTime: result }
        })
      )
    )
    const coffeeshopsWithDrivingTime = await Promise.all(promises)
    return coffeeshopsWithDrivingTime
  } catch (err) {
    throw err
  }
}

export async function getBusinessDetails(id: string): Promise<Restaurant> {
  try {
    const res = await axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
      headers: {
        Authorization: YELP_BEARER_TOKEN,
      },
    })
    const shop = res.data
    const restaurant = {
      name: shop.name,
      address: shop.location.address1.concat(
        ", ",
        shop.location.city,
        ", ",
        shop.location.state,
        " ",
        shop.location.zip_code
      ),
      imageUrl: shop.image_url,
      rating: shop.rating,
      currentlyOpen: !shop.is_closed,
    }
    return restaurant
  } catch (err) {
    throw err
  }
}
