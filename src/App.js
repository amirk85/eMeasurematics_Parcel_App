import { LOCATIONS } from "./dummyData/LOCATIONS";
import MainHeader from "./components/header/MainHeader";
import "./App.css";

import Parcels from "./components/parcel/Parcels";

const App = () => {
  return (
    <div className="App">
      <MainHeader locations={LOCATIONS} />
      <Parcels />
    </div>
  );
};

export default App;
