import React from "react";
import "../../styles/SelectedParcel.css";
import { useSelector } from "react-redux";

const SelectedParcel = () => {
  const { selectedParcel } = useSelector((state) => state.parcel);

  return (
    <div className="selected_parcel">
      Selected Parcel: <span>{selectedParcel ? selectedParcel.name : ""}</span>
    </div>
  );
};

export default SelectedParcel;
