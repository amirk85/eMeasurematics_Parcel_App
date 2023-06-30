import React from "react";
import "../../styles/HeaderList.css";

const HeaderList = ({ location }) => {
  return (
    <div className={`header_item ${location.name.toLowerCase()}`}>
      <h6>{location.name}</h6>
    </div>
  );
};

export default HeaderList;
