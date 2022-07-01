import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import TopNav from "../TopNav";

const styles = () => {
  return {
    list: {
      overflowy: "scroll",
      top: "0",
      bottom: "0",
    },
    name: {
      marginLeft: "16px",
    },
    genre1: {
      marginLeft: "16px",
      paddingBottom: "16px",
    },
    genre: {
      marginLeft: "16px",
      paddingTop: "32px",
      paddingBottom: "16px",
    },
    links: {
      textDecoration: "none",
    },
  };
};
const useStyles = makeStyles(styles);

const RestaurantList = () => {
  const classes = useStyles();
  const [asianRestaurants, setAsianRestaurants] = useState<string[]>([
    "Sushi Train",
    "Sushi Takatsu",
    "Namaste Cafe",
    "On's Thai Kitchen",
    "Lemon Grass Thai Cuisine",
    "Mi-Sant",
    "Umami Fries",
    "Quang Restaurant",
    "Ishita Ramen",
    "Tea House Chinese Restaurant",
    "Peking Garden",
    "Moto-i Ramen and Sake House",
    "Peninsula Malaysian Cuisine",
    "Hong Kong Noodle",
    "King's Restaurant",
  ]);
  const [mediterraneanRestaurants, setMeditteraneanRestaurants] = useState<
    string[]
  >(["Wally's Falafel and Hummus", "Olympia Cafe & Gyros"]);
  const [americanRestaurants, setAmericanRestaurants] = useState<string[]>([
    "Hell's Kitchen",
    "Blue Door Pub Como",
    "Portillo's",
    "Matt's Bar",
  ]);
  const [mexicanRestaurants, setMexicanRestaurants] = useState<string[]>([
    "Rusty Taco",
    "Yeah Yeah Taco",
    "Nico's Taco and Tequila Bar",
    "Maya Cuisine",
  ]);
  const [italianRestaurants, setItalianRestaurants] = useState<string[]>([
    "Zettas",
    "Galactic Pizza",
    "Young Joni",
    "Rinata",
  ]);
  const [brunchRestaurants, setBrunchRestaurants] = useState<string[]>([
    "Lands End Pasty Company",
    "Isles Bun & Coffee",
    "Eggy's Diner",
    "Hen House Eatery",
  ]);
  const [bobaRestaurants, setBobaRestaurants] = useState<string[]>([
    "Mi Tea",
    "Ding Tea",
    "Tiger Sugar",
  ]);
  return (
    <>
      <TopNav />
      <Grid container direction="row">
        <Grid item xs={3} className={classes.list}>
          <div className={classes.genre1}>
            <Typography variant="h3">Asian</Typography>
          </div>
          {asianRestaurants.map((restaurant) => (
            <div className={classes.name}>
              <Link to={restaurant} key={restaurant} className={classes.links}>
                <Typography>{restaurant}</Typography>
              </Link>
            </div>
          ))}
          <div className={classes.genre}>
            <Typography variant="h3">Mediterranean</Typography>
          </div>
          {mediterraneanRestaurants.map((restaurant) => (
            <div className={classes.name}>
              <Link to={restaurant} key={restaurant} className={classes.links}>
                <Typography>{restaurant}</Typography>
              </Link>
            </div>
          ))}
          <div className={classes.genre}>
            <Typography variant="h3">American</Typography>
          </div>
          {americanRestaurants.map((restaurant) => (
            <div className={classes.name}>
              <Link to={restaurant} key={restaurant} className={classes.links}>
                <Typography>{restaurant}</Typography>
              </Link>
            </div>
          ))}
          <div className={classes.genre}>
            <Typography variant="h3">Mexican</Typography>
          </div>
          {mexicanRestaurants.map((restaurant) => (
            <div className={classes.name}>
              <Link to={restaurant} key={restaurant} className={classes.links}>
                <Typography>{restaurant}</Typography>
              </Link>
            </div>
          ))}
          <div className={classes.genre}>
            <Typography variant="h3">Italian</Typography>
          </div>
          {italianRestaurants.map((restaurant) => (
            <div className={classes.name}>
              <Link to={restaurant} key={restaurant} className={classes.links}>
                <Typography>{restaurant}</Typography>
              </Link>
            </div>
          ))}
          <div className={classes.genre}>
            <Typography variant="h3">Brunch/Breakfast/Snack</Typography>
          </div>
          {brunchRestaurants.map((restaurant) => (
            <div className={classes.name}>
              <Link to={restaurant} key={restaurant} className={classes.links}>
                <Typography>{restaurant}</Typography>
              </Link>
            </div>
          ))}
          <div className={classes.genre}>
            <Typography variant="h3">Boba</Typography>
          </div>
          {bobaRestaurants.map((restaurant) => (
            <div className={classes.name}>
              <Link to={restaurant} key={restaurant} className={classes.links}>
                <Typography>{restaurant}</Typography>
              </Link>
            </div>
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
