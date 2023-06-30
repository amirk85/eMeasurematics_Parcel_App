import React from "react";
import {
  PARCEL_DELETE,
  PARCEL_REFRESH,
  ADD_AFTER,
  ADD_BEFORE,
  PARCEL_REPLACE,
} from "../../store/parcel-slice";
import "../../styles/ButtonList.css";
import { useDispatch, useSelector } from "react-redux";

const ButtonList = (props) => {
  const { name, group } = props;

  const { selectedParcel, parcelData } = useSelector((state) => state.parcel);
  const dispatch = useDispatch();

  return (
    <div className="button_container">
      <button onClick={() => dispatch(ADD_AFTER({ name, group }))}>
        Add After
      </button>
      <button onClick={() => dispatch(ADD_BEFORE({ name, group }))}>
        Add Before
      </button>
      <button onClick={() => dispatch(PARCEL_REPLACE({ name, group }))}>
        Replace
      </button>
      <button onClick={() => dispatch(PARCEL_DELETE(selectedParcel))}>
        Delete
      </button>
      <button onClick={() => dispatch(PARCEL_REFRESH())}>Refresh</button>
      <button onClick={() => console.log(parcelData)}>Show Final</button>
    </div>
  );
};

export default ButtonList;
