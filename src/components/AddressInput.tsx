import { useState } from "react";
import { getCoordinates } from "../apis/mapquestActions";
import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import YelpLogo from "../images/yelp_logo.svg";

const styles = () => {
  return {
    root: {
      margin: "16px",
      marginTop: "0px",
    },
    logo: {
      height: "50px",
    },
  };
};

const useStyles = makeStyles(styles);

export interface Props {
  setCurrentAddress: Function;
  setCoordinates: Function;
}

const AddressInput = ({ setCoordinates, setCurrentAddress }: Props) => {
  const classes = useStyles();
  const [address, setAddress] = useState<string>("");

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item xs>
          <img className={classes.logo} src={YelpLogo} />
        </Grid>
        <Grid item xs={10}>
          <TextField
            label="Address"
            variant="outlined"
            value={address}
            onChange={(event) => setAddress(event?.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={1} pl={1}>
          <Button
            variant="contained"
            onClick={() => {
              if (address !== "") {
                setCurrentAddress(address);
                getCoordinates(address).then((result) =>
                  setCoordinates(result)
                );
              }
            }}
          >
            Search For CoffeeShops
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddressInput;
