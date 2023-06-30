import React from "react";
import { useSelector } from "react-redux";
import ParcelItem from "./ParcelItem";
import "../../styles/ParcelList.css";

const ParcelList = () => {
  const parcels = useSelector((state) => state.parcel.parcelData);

  return (
    <div className="parcel_list">
      {parcels.map((parcel) => (
        <ParcelItem key={parcel.id} parcel={parcel} />
      ))}
    </div>
  );
};

export default ParcelList;
