import { useState, useEffect } from "react";
import {
  getCoordinates,
  setCurrentAddress,
} from "./store/mapquestAPI/mapquestActions";
import { AppState } from "./store/rootReducer";
import { connect } from "react-redux";
import { Button, Icon, SvgIcon, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import YelpLogo from "./yelp_logo.svg";

const styles = () => {
  return {
    root: {
      margin: "16px",
    },
    logo: {
      height: "50px",
    },
  };
};

const useStyles = makeStyles(styles);

export interface Props {
  getCoordinates: Function;
  setCurrentAddress: Function;
}

const AddressInput = ({ getCoordinates, setCurrentAddress }: Props) => {
  const classes = useStyles();
  const [address, setAddress] = useState<string>("");

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item xs={1}>
          <img className={classes.logo} src={YelpLogo} />
        </Grid>
        <Grid item xs={9}>
          <TextField
            label="Address"
            variant="outlined"
            value={address}
            onChange={(event) => setAddress(event?.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            onClick={() => {
              if (address != "") {
                setCurrentAddress(address);
                getCoordinates(address);
              }
            }}
          >
            Search For Coffee Shops
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentLat: state.map.currentLat,
  currentLong: state.map.currentLong,
});

const mapDispatchToProps = {
  getCoordinates,
  setCurrentAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressInput);
