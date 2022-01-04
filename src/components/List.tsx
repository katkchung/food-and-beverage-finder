import { useState, useEffect } from "react";
import { getLocalCoffeeShops } from "../apis/yelpActions";
import { Coordinates } from "../apis/mapquestActions";
import ShopCard from "./ShopCard";
import { Grid } from "@mui/material";

export interface Props {
  currentAddress: string;
  currentCoordinates: Coordinates;
}

const List = ({ currentCoordinates, currentAddress }: Props) => {
  const [coffeeShops, setCoffeeShops] = useState<String[]>([]);
  useEffect(() => {
    getLocalCoffeeShops(currentCoordinates).then((result: any) =>
      setCoffeeShops(result)
    );
  }, [currentCoordinates]);

  return (
    <div>
      <Grid container spacing={2}>
        {coffeeShops &&
          coffeeShops.map((shop: any) => (
            <Grid item key={shop.address} xs={3}>
              <ShopCard
                name={shop.name}
                address={shop.address}
                imageUrl={shop.imageUrl}
                currentAddress={currentAddress}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default List;
