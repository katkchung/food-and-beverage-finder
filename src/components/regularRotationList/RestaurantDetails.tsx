import { Grid, Typography } from "@mui/material"
import { makeStyles } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getBusinessDetails } from "../../apis/yelpActions"
import { Restaurant } from "../../types"
import { useRestaurantContext } from "./RestaurantContext"

const styles = () => {
  return {
    image: {
      width: "100%",
    },
    links: {
      textDecoration: "none",
    },
    open: {
      color: "green",
    },
    closed: {
      color: "brown",
    },
  }
}
const useStyles = makeStyles(styles)

const RestaurantDetails = () => {
  const classes = useStyles()
  const { restaurant } = useParams()
  const [restaurantDetails, setRestaurantDetails] = useState<
    Restaurant | undefined
  >(undefined)

  const { id } = useRestaurantContext()

  useEffect(() => {
    if (restaurant && id != null) {
      getBusinessDetails(id).then((result: Restaurant) =>
        setRestaurantDetails(result)
      )
    }
  }, [restaurant])

  return (
    <>
      {restaurantDetails && (
        <Grid container columnSpacing={2}>
          <Grid item xs={4}>
            <img className={classes.image} src={restaurantDetails.imageUrl} />
          </Grid>
          <Grid item xs>
            <Grid item xs={12}>
              <Typography variant="h1">{restaurantDetails.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">{restaurantDetails.address}</Typography>
            </Grid>
            <Grid item xs={12}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/star${restaurantDetails.rating}.png`
                }
              />
            </Grid>
            <Grid item xs={12}>
              {restaurantDetails.currentlyOpen ? (
                <Typography variant="h5" className={classes.open}>
                  Open
                </Typography>
              ) : (
                <Typography variant="h5" className={classes.closed}>
                  Closed
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default RestaurantDetails
