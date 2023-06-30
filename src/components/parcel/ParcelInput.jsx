import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LOCATIONS } from "../../dummyData/LOCATIONS";
import ButtonList from "../footer/ButtonList";
import "../../styles/ParcelInput.css";
const ParcelInput = (props) => {
  const [enteredParcelName, setEnteredParcelName] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("Mumbai");

  const { selectedParcel } = useSelector((state) => state.parcel);

  useEffect(() => {
    if (!selectedParcel) {
      setEnteredParcelName("");
      setSelectedGroup("Mumbai");
    }
  }, [selectedParcel]);

  return (
    <React.Fragment>
      <div className="parcel_container">
        <div className="parcel_container_form">
          <label>Enter Name: </label>
          <input
            type="text"
            placeholder="Enter Parcel Name"
            value={enteredParcelName}
            onChange={(e) => setEnteredParcelName(e.target.value)}
          />
        </div>
        <div className="parcel_container_form">
          <label>Select Location Group: </label>
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            {LOCATIONS.map((location) => (
              <option key={location.id} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ButtonList {...props} name={enteredParcelName} group={selectedGroup} />
    </React.Fragment>
  );
};

export default ParcelInput;
