import AddressInput from "../AddressInput";
import List from "./List";
import { useState } from "react";
import { Coordinates } from "../apis/mapquestActions";

const Homepage = () => {
  const [currentAddress, setCurrentAddress] = useState<string>("");
  const [coordinates, setCoordinates] = useState<Coordinates | undefined>(
    undefined
  );

  return (
    <div>
      <AddressInput
        setCurrentAddress={setCurrentAddress}
        setCoordinates={setCoordinates}
      />
      {currentAddress !== "" && coordinates != undefined && (
        <List
          currentAddress={currentAddress}
          currentCoordinates={coordinates}
        />
      )}
    </div>
  );
};

export default Homepage;
