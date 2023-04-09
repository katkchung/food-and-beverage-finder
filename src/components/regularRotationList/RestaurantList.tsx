import { Grid, Typography } from "@mui/material";
import { useState, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import TopNav from "../TopNav";
import { getRestaurantGenres } from "../../apis/utility";
import { Genre, RestaurantDTO, RestaurantMap } from "../../types";

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
  };
};
const useStyles = makeStyles(styles);
const RestaurantList = () => {
  const classes = useStyles();
  const restaurantTypes = Object.values(Genre);

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
              {Array.from(RestaurantMap)
                .filter((restaurant) => restaurant[1].genre === genre)
                .map((res) => (
                  <div className={classes.name} key={res[0]}>
                    <Link to={res[0]} key={res[1].id} className={classes.links}>
                      <Typography>{res[0]}</Typography>
                    </Link>
                  </div>
                ))}
            </Fragment>
          ))}
        </Grid>
        <Grid item xs>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default RestaurantList;
