import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles, Typography } from "@material-ui/core";
import { DrivingTime } from "../types";

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
  drivingTime: DrivingTime;
}

const ShopCard = ({ name, address, imageUrl, drivingTime }: Props) => {
  const classes = useStyles();

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
            {drivingTime.minutes} minutes {drivingTime.seconds} seconds
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopCard;
