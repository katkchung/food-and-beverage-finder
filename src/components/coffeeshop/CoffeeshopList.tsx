import { useState, useEffect } from "react";
import { getLocalCoffeeShops } from "../../apis/yelpActions";
import ShopCard from "../ShopCard";
import { Grid } from "@mui/material";
import { Coffeeshop, Coordinates } from "../../types";

export interface Props {
  currentAddress: string;
  currentCoordinates: Coordinates;
}

const CoffeeshopList = ({ currentCoordinates, currentAddress }: Props) => {
  const [coffeeShops, setCoffeeShops] = useState<Coffeeshop[]>([]);
  useEffect(() => {
    getLocalCoffeeShops(currentCoordinates).then((result: Coffeeshop[]) =>
      setCoffeeShops(result)
    );
  }, [currentCoordinates]);

  return (
    <div>
      <Grid container spacing={2}>
        {coffeeShops &&
          coffeeShops.map((shop: Coffeeshop) => (
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

export default CoffeeshopList;
