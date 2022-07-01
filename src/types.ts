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