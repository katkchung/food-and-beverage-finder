import AddressInput from "../AddressInput";
import CoffeeshopList from "./CoffeeshopList";
import { useState } from "react";
import TopNav from "../TopNav";
import { Coordinates } from "../../types";

const CoffeeshopSearchPage = () => {
  const [currentAddress, setCurrentAddress] = useState<string>("");
  const [coordinates, setCoordinates] = useState<Coordinates | undefined>(
    undefined
  );

  return (
    <div>
      <TopNav />
      <AddressInput
        setCurrentAddress={setCurrentAddress}
        setCoordinates={setCoordinates}
      />
      {currentAddress !== "" && coordinates != null && (
        <CoffeeshopList
          currentAddress={currentAddress}
          currentCoordinates={coordinates}
        />
      )}
    </div>
  );
};

export default CoffeeshopSearchPage;
