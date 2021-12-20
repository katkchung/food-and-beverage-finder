import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { getDrivingTime } from "../store/mapquestAPI/mapquestActions";
import { AppState } from "../store/rootReducer";
import { connect } from "react-redux";

const styles = () => {
  return {
    card: {
      height: "300px",
    },
    img: {
      width: "128px",
      height: "128px",
      borderRadius: "50%",
      marginBottom: "8px",
    },
  };
};

const useStyles = makeStyles(styles);

export interface Props {
  name: string;
  address: string;
  imageUrl: string;
  getDrivingTime: Function;
  currentAddress: string;
}

const ShopCard = ({
  name,
  address,
  imageUrl,
  getDrivingTime,
  currentAddress,
}: Props) => {
  const classes = useStyles();
  const [drivingTime, setDrivingTime] = useState<number | undefined>(undefined);

  useEffect(() => {
    getDrivingTime(currentAddress, address).then((res: number) => {
      setDrivingTime(Math.round(res));
    });
  }, [address]);

  return (
    <div>
      <Card className={classes.card} variant="outlined">
        <CardMedia component="img" height="200" image={imageUrl} alt={name} />
        <CardContent>
          <Typography noWrap gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography noWrap gutterBottom variant="body2">
            {address}
          </Typography>
          <Typography noWrap gutterBottom variant="caption">
            {drivingTime} minutes driving
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentAddress: state.map.currentAddress,
});

const mapDispatchToProps = {
  getDrivingTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCard);

/*

  const [drivingTimes, setDrivingTimes] = useState<any | undefined>(undefined);
  coffeeShops.map((shop: any) => {
    getDrivingTime(currentAddress, shop.address).then((res: any) =>
      setDrivingTimes(res)
    );
  });
*/

/*
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">{name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.bottomSpace} variant="body2">
              {address}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <img
              className={`${classes.img} ${classes.bottomSpace}`}
              src={imageUrl}
              alt={name}
            />
          </Grid>
        </Grid>

*/
