import { Grid, Typography } from "@mui/material"
import { Fragment, useState } from "react"
import { Link, Outlet, useOutletContext } from "react-router-dom"
import { makeStyles } from "@material-ui/core"
import TopNav from "../TopNav"
import { Genre, restaurants } from "../../types"

const styles = () => {
  return {
    list: {
      top: "0",
      bottom: "0",
      minWidth: "350px",
    },
    name: {
      marginLeft: "16px",
    },
    genre: {
      marginLeft: "16px",
      paddingBottom: "16px",
      "&:not(:first-child)": {
        paddingTop: "32px",
      },
    },
    links: {
      textDecoration: "none",
    },
  }
}
const useStyles = makeStyles(styles)

export function useRestaurantContext() {
  return useOutletContext<{ id: string | undefined }>()
}

const RestaurantList = () => {
  const classes = useStyles()
  const restaurantTypes = Object.values(Genre)
  const [id, setId] = useState<string>("")

  return (
    <>
      <TopNav />
      <Grid container direction="row">
        <Grid
          item
          xs={3}
          className={classes.list}
          style={{ maxHeight: "100vh", overflow: "auto" }}
        >
          {restaurantTypes.map((genre) => (
            <Fragment key={genre}>
              <div className={classes.genre}>
                <Typography variant="h3">{genre}</Typography>
              </div>
              {restaurants[genre].map((restaurant) => (
                <div className={classes.name} key={restaurant.name}>
                  <Link
                    to={restaurant.name}
                    key={restaurant.id}
                    className={classes.links}
                    onClick={() => setId(restaurant.id)}
                  >
                    <Typography>{restaurant.name}</Typography>
                  </Link>
                </div>
              ))}
            </Fragment>
          ))}
        </Grid>
        <Grid item xs>
          <Outlet context={{ id }} />
        </Grid>
      </Grid>
    </>
  )
}

export default RestaurantList
