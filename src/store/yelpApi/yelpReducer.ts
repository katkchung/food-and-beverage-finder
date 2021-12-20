
  export const initialYelpState: {
    coffeeShops: []

  } = {
    coffeeShops: [],
  }
  
  export const yelpReducer = (
    state = initialYelpState,
    action: any
  ) => {
    const { type, payload } = action
    switch (type) {
      case 'GET_LOCAL_COFFEE_SHOPS': {
        return {
          ...state,
          coffeeShops: payload.businesses.map((shop: any) => ({name: shop.name, address: shop.location.address1.concat(", ", shop.location.city, ", ", shop.location.state, " ", shop.location.zip_code), imageUrl: shop.image_url})),
        }

      }
      default:
        return state
    }
  }

    // .map((pyramid: any) => ({
  //   group_id: pyramid.value,
  //   group_name: pyramid.label,
  // }))
  