import axios from 'axios';
import { YELP_BEARER_TOKEN } from '../../constants';

export const getLocalCoffeeShops = (lat: string, long: string) => async (dispatch: any) => {
  try {
    const res = await axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=coffee&latitude=${lat}&longitude=${long}`,
        {
          headers: {
            Authorization:  YELP_BEARER_TOKEN,
          }
        }
      )
      const coffeeshops = res.data.businesses.map((shop: any) => ({name: shop.name, address: shop.location.address1.concat(", ", shop.location.city, ", ", shop.location.state, " ", shop.location.zip_code)}))
      dispatch({
        type: 'GET_LOCAL_COFFEE_SHOPS',
        payload: res.data
      })
  } catch (err) {
    console.error("Yelp API", err);
    return undefined
  }
};