import { AppState } from "../store/rootReducer";
import { connect } from "react-redux";
import AddressInput from "../AddressInput";
import List from "./List";

export interface Props {
  currentLat: string;
  currentLong: string;
}

const Homepage = ({ currentLat, currentLong }: Props) => {
  return (
    <div>
      <AddressInput />
      {currentLat && currentLong && (
        <List lat={currentLat} long={currentLong} />
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentLat: state.map.currentLat,
  currentLong: state.map.currentLong,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
