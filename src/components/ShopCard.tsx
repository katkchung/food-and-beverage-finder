import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles, Typography } from "@material-ui/core";
import { getDrivingTime } from "../apis/mapquestActions";

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
  currentAddress: string;
}

const ShopCard = ({ name, address, imageUrl, currentAddress }: Props) => {
  const classes = useStyles();
  const [drivingTime, setDrivingTime] = useState<number | undefined>(undefined);

  useEffect(() => {
    getDrivingTime(currentAddress, address).then((result) =>
      setDrivingTime(result)
    );
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

export default ShopCard;
