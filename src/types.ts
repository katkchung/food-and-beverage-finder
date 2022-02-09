export interface Coffeeshop {
    name: string,
    address: string
    imageUrl: string,
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