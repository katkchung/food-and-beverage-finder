import { makeStyles } from "@material-ui/core";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const styles = () => {
  return {
    navBar: {
      width: "100%",
      paddingTop: "16px",
      paddingBottom: "4px",
      paddingLeft: "24px",
      marginBottom: "16px",
      backgroundColor: "rgba(1255,174,66, 0.35)",
    },
    button: {
      //still doesn't work and it's upsetting
      borderTopLeftRadius: "64px",
      borderTopRIghtRadius: "64px",
      "&:hover": {
        backgroundColor: "transparent", //this doesn't work and it makes me mad
      },
    },
    links: {
      textDecoration: "none",
    },
  };
};
const useStyles = makeStyles(styles);

const TopNav = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.navBar}>
      <Grid item xs={1}>
        <Link to="/" className={classes.links}>
          <Button fullWidth classes={{ root: classes.button }}>
            Home
          </Button>
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link to="/coffeeshops" className={classes.links}>
          <Button fullWidth classes={{ root: classes.button }}>
            Coffeeshops
          </Button>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/frequent-customer" className={classes.links}>
          <Button fullWidth classes={{ root: classes.button }}>
            Regular Restaurants
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default TopNav;
