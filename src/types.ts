export interface Coffeeshop {
    name: string,
    address: string
    imageUrl: string,
    drivingTime: DrivingTime
  }
  
  export interface Restaurant {
    name: string, 
    address: string,
    imageUrl: string,
    rating: number,
    currentlyOpen: boolean
  }

export interface Coordinates {
    lat: string
    long: string
  }

export interface DrivingTime {
    minutes: number
    seconds: number
}

export enum Genre {
  American = "American",
  Asian = "Asian",
  Boba = "Boba",
  Brunch = "Brunch",
  Mediterranean = "Mediterranean",
  Mexican = "Mexican",
  Italian = "Italian"
}

interface RestaurantDTO {
  id: string, 
  genre: Genre
}

export const RestaurantMap: Record<string, RestaurantDTO> = {
  "Sushi Train": {id: "FR9ZFGmwrrxCrolxZDy6NQ", genre: Genre.Asian},
  "Sushi Takatsu": {id: "ddpjLv0P6iu7p1dRGCPWWw", genre: Genre.Asian},
  "Namaste Cafe": {id: "_NNDqkAE_I37bbnZBIzh3w", genre: Genre.Asian},
  "On's Thai Kitchen": {id: "oiV59HR1Js_-rfIN8UWtUw", genre: Genre.Asian},
  "Lemon Grass Thai Cuisine" : {id: "JVIwGOKo9E774uLGVFYNwA", genre: Genre.Asian},
  "Mi-Sant": {id: "WJX03pS0ZNZ0FRIxHRgYuA", genre: Genre.Asian},
  "Quang Restaurant": {id: "Losq2H67kunQy6qQ6LFjmg", genre: Genre.Asian}, 
  "Ishita Ramen": {id: "7b-Qkf3LBN9i92xUJrsHPQ", genre: Genre.Asian},
  "Tea House Chinese Restaurant": {id: "Mopw-koOu2bP9kPIl1v6Sg", genre: Genre.Asian},
  "Peking Garden": {id: "w6s7oKGHCCDNzSbAjw6FjA", genre: Genre.Asian},
  "Moto-i Ramen and Sake House": {id: "oidsSjjDxAliG3PFXxLQiA", genre: Genre.Asian},
  "Peninsula Malaysian Cuisine": {id: "Xnsa4CJMPqyHkyISgxrzxg", genre: Genre.Asian},
  "Hong Kong Noodle": {id: "r8YD1Wbqp9iq-JFgTZ_Viw", genre: Genre.Asian},
  "King's Restaurant": {id: "kDVFmozQLPytbZ0Qn_a5qg", genre: Genre.Asian},
  "Wally's Falafel and Hummus": {id: "VVU19gaxLPKyzWSITKMC1Q", genre: Genre.Mediterranean},
  "Olympia Cafe & Gyros": {id: "XBoB1vc_b9RU_UzxsBie-g", genre: Genre.Mediterranean},
  "Hell's Kitchen": {id: "g7bbpP7x5KAc33i7pgOkLA", genre: Genre.American},
  "Blue Door Pub Como": {id: "TuFYsQCKhNKuiKIZ6Bw3EA", genre: Genre.American},
  "Portillo's": {id: "LBSPrKiiWGdxT67YZtZvMg", genre: Genre.American},
  "Matt's Bar": {id: "ErvVFzAYVArZS7gcWgY0rg", genre: Genre.American},
  "Rusty Taco": {id: "fq9jC-Jl55VySyZ66-nN1A", genre: Genre.Mexican},
  "Yeah Yeah Taco": {id: "R5371sng0zz7icCHxlpsoQ", genre: Genre.Mexican},
  "Nico's Taco and Tequila Bar": {id: "HL8GOJJsauMCD8TET7UmNg", genre: Genre.Mexican},
  "Maya Cuisine": {id: "mdXoIXksYTiJhsYo-uknkQ", genre: Genre.Mexican},
  "Galactic Pizza": {id: "dBRIlzRYdvAhSdxOTBVYyw", genre: Genre.Italian},
  "Young Joni": {id: "5Y2nekkwRrNMMSx3b-2EhA", genre: Genre.Italian},
  "Rinata": {id: "9EdftCquw0YwWY3XsJlZVg", genre: Genre.Italian},
  "Lands End Pasty Company": {id: "kLIRGu0p-j8ilVO-SfkWZw", genre: Genre.Brunch},
  "Isles Bun & Coffee": {id: "sdeYah2re9mvnHEsbIPsOw", genre: Genre.Brunch},
  "Eggy's Diner": {id: "cPgZaWUgM1pj3po6UAgtRw", genre: Genre.Brunch},
  "Hen House Eatery": {id: "ykTnu3sVxnnIeHpLRqE8bQ", genre: Genre.Brunch},
  "Mi Tea": {id: "43p95RkcHPHbCoJLFSpdeA", genre: Genre.Boba},
  "Ding Tea": {id: "F38zcGJ2FerUQo--3dw1cA", genre: Genre.Boba},
  "Tiger Sugar": {id: "U0nC_UNCVZoYKyJLWtTiWg", genre: Genre.Boba}
};