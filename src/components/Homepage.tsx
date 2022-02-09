import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import bunroom from "../images/bunroom.jpg";

const styles = () => {
  return {
    bunroom: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${bunroom})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    textDiv: {
      borderRadius: "25px",
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      width: "65%",
      height: "25%",
    },
    title: {
      paddingBottom: "20px",
    },
    buttonDiv: {
      borderRadius: "4px",
      padding: "4px",
    },
    buttons: {
      "&:hover": {
        backgroundColor: "rgba(119,136,153)", //this also doesn't work and it is upsetting
      },
    },
    links: {
      textDecoration: "none",
    },
  };
};

const useStyles = makeStyles(styles);

const Homepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.bunroom}>
      <div className={classes.textDiv}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing="space-between"
        >
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            className={classes.title}
          >
            <Typography variant="h3"> What do you want to do? </Typography>
          </Grid>
          <Grid item className={classes.buttonDiv}>
            <Link to="/coffeeshops" className={classes.links}>
              <Button size="large" className={classes.buttons}>
                Find Nearby Coffeeshops
              </Button>
            </Link>
          </Grid>
          <Grid item className={classes.buttonDiv}>
            <Link to="/frequent-customer" className={classes.links}>
              <Button size="large" className={classes.buttons}>
                See Regular Restaurant Rotations List
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Homepage;
