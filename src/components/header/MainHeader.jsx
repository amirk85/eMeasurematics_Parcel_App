import React from "react";
import HeaderList from "./HeaderList";
import "../../styles/MainHeader.css";

const Header = ({ locations }) => {
  return (
    <div className="header">
      {locations.map((location) => (
        <HeaderList key={location.id} location={location} />
      ))}
    </div>
  );
};

export default Header;
