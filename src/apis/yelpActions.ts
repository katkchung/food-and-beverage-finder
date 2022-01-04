import axios from 'axios';
import { YELP_BEARER_TOKEN } from './constants';
import { Coordinates } from './mapquestActions';

export interface Coffeeshop {
  name: string,
  address: string
}

export async function getLocalCoffeeShops(coordinates: Coordinates): Promise<Coffeeshop[] | undefined> {
  try {
    const res = await axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=coffee&latitude=${coordinates.lat}&longitude=${coordinates.long}`,
        {
          headers: {
            Authorization:  YELP_BEARER_TOKEN,
          }
        }
      )
      const coffeeshops = res.data.businesses.map((shop: any) => ({name: shop.name, address: shop.location.address1.concat(", ", shop.location.city, ", ", shop.location.state, " ", shop.location.zip_code), imageUrl: shop.image_url}))
      return coffeeshops
  } catch (err) {
    console.error("Yelp API", err);
  }
};