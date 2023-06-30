import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { HANDLE_SELECT_PARCEL } from "../../store/parcel-slice";

import "../../styles/ParcelItem.css";

const ParcelItem = (props) => {
  const { parcel } = props;

  const { selectedParcel } = useSelector((state) => state.parcel);

  const dispatch = useDispatch();
  let className = "parcel_item ";
  if (selectedParcel?.id === parcel.id) {
    className += "selected";
  }

  return (
    <div
      className={className}
      onClick={() => dispatch(HANDLE_SELECT_PARCEL(parcel))}
    >
      <p>{parcel.name}</p>
      <div className={parcel.group?.toLowerCase()}>
        <h6>{parcel.sequence}</h6>
      </div>
    </div>
  );
};

export default ParcelItem;
