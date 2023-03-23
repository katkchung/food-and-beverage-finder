import axios from 'axios';
import { Coffeeshop, Coordinates, Restaurant } from '../types';
import { YELP_BEARER_TOKEN } from './constants';
import { getDrivingTime } from './mapquestActions';

const restaurantIdMap: Record<string, string> = {
  "Sushi Train": "FR9ZFGmwrrxCrolxZDy6NQ",
  "Sushi Takatsu": "ddpjLv0P6iu7p1dRGCPWWw",
  "Namaste Cafe": "_NNDqkAE_I37bbnZBIzh3w",
  "On's Thai Kitchen": "oiV59HR1Js_-rfIN8UWtUw",
  "Lemon Grass Thai Cuisine" : "JVIwGOKo9E774uLGVFYNwA",
  "Mi-Sant": "WJX03pS0ZNZ0FRIxHRgYuA",
  "Quang Restaurant": "Losq2H67kunQy6qQ6LFjmg", 
  "Ishita Ramen": "7b-Qkf3LBN9i92xUJrsHPQ",
  "Tea House Chinese Restaurant": "Mopw-koOu2bP9kPIl1v6Sg",
  "Peking Garden": "w6s7oKGHCCDNzSbAjw6FjA",
  "Moto-i Ramen and Sake House": "oidsSjjDxAliG3PFXxLQiA",
  "Peninsula Malaysian Cuisine": "Xnsa4CJMPqyHkyISgxrzxg",
  "Hong Kong Noodle": "r8YD1Wbqp9iq-JFgTZ_Viw",
  "King's Restaurant": "kDVFmozQLPytbZ0Qn_a5qg",
  "Wally's Falafel and Hummus": "VVU19gaxLPKyzWSITKMC1Q",
  "Olympia Cafe & Gyros": "XBoB1vc_b9RU_UzxsBie-g",
  "Hell's Kitchen": "g7bbpP7x5KAc33i7pgOkLA",
  "Blue Door Pub Como": "TuFYsQCKhNKuiKIZ6Bw3EA",
  "Portillo's": "LBSPrKiiWGdxT67YZtZvMg",
  "Matt's Bar": "ErvVFzAYVArZS7gcWgY0rg",
  "Rusty Taco": "fq9jC-Jl55VySyZ66-nN1A",
  "Yeah Yeah Taco": "R5371sng0zz7icCHxlpsoQ",
  "Nico's Taco and Tequila Bar": "HL8GOJJsauMCD8TET7UmNg",
  "Maya Cuisine": "mdXoIXksYTiJhsYo-uknkQ",
  "Zettas": "x7Kij5bIpFEYdABsSUdEHA",
  "Galactic Pizza": "dBRIlzRYdvAhSdxOTBVYyw",
  "Young Joni": "5Y2nekkwRrNMMSx3b-2EhA",
  "Rinata": "9EdftCquw0YwWY3XsJlZVg",
  "Lands End Pasty Company": "kLIRGu0p-j8ilVO-SfkWZw",
  "Isles Bun & Coffee": "sdeYah2re9mvnHEsbIPsOw",
  "Eggy's Diner": "cPgZaWUgM1pj3po6UAgtRw",
  "Hen House Eatery": "ykTnu3sVxnnIeHpLRqE8bQ",
  "Mi Tea": "43p95RkcHPHbCoJLFSpdeA",
  "Ding Tea": "F38zcGJ2FerUQo--3dw1cA",
  "Tiger Sugar": "U0nC_UNCVZoYKyJLWtTiWg"
};

export async function getLocalCoffeeShops(coordinates: Coordinates, currentAddress: string): Promise<Coffeeshop[]> {
  try {
    const res = await axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=coffee&latitude=${coordinates.lat}&longitude=${coordinates.long}&limit=48`,
        {
          headers: {
            Authorization:  YELP_BEARER_TOKEN,
          }
        }
      )
      const coffeeshops = res.data.businesses.map((shop: any) => ({name: shop.name, address: shop.location.address1.concat(", ", shop.location.city, ", ", shop.location.state, " ", shop.location.zip_code), imageUrl: shop.image_url, drivingTime: 0}))

      let promises: any[] = []
      coffeeshops.map(async (shop: any) => 
        promises.push(getDrivingTime(currentAddress, shop.address).then((result) => {return {...shop, drivingTime: result}})
        )

      )
      const coffeeshopsWithDrivingTime = await Promise.all(promises)
      return coffeeshopsWithDrivingTime
  } catch (err) {
    throw(err)
  }
};

export async function getBusinessDetails(name: string): Promise<Restaurant> {
  try {
    const res = await axios
      .get(
        `https://api.yelp.com/v3/businesses/${restaurantIdMap[name]}`,
        {
          headers: {
            Authorization:  YELP_BEARER_TOKEN,
          }
        }
      )
      const shop = res.data
      const restaurant = {
        name: shop.name,
        address: shop.location.address1.concat(", ", shop.location.city, ", ", shop.location.state, " ", shop.location.zip_code),
        imageUrl: shop.image_url,
        rating: shop.rating,
        currentlyOpen: !shop.is_closed
      }
      return restaurant
  } catch (err) {
    throw(err)
  }
};