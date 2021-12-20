import { useState, useEffect } from "react";
import { getLocalCoffeeShops } from "../store/yelpApi/yelpActions";
import { getDrivingTime } from "../store/mapquestAPI/mapquestActions";
import { AppState } from "../store/rootReducer";
import { connect } from "react-redux";
import ShopCard from "./ShopCard";
import { Grid } from "@mui/material";

export interface Props {
  coffeeShops: [];
  getLocalCoffeeShops: Function;
  currentAddress: string;
  lat: string;
  long: string;
  getDrivingTime: Function;
}

const List = ({ coffeeShops, getLocalCoffeeShops, lat, long }: Props) => {
  useEffect(() => {
    getLocalCoffeeShops(lat, long);
  }, [lat, long]);

  return (
    <div>
      <Grid container spacing={2}>
        {coffeeShops &&
          coffeeShops.map((shop: any) => (
            <Grid item xs={3}>
              <ShopCard
                name={shop.name}
                address={shop.address}
                imageUrl={shop.imageUrl}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  coffeeShops: state.yelp.coffeeShops,
  currentAddress: state.map.currentAddress,
});

const mapDispatchToProps = {
  getLocalCoffeeShops,
  getDrivingTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
