import React from "react";
import title from "../imgs/Title.png";
import "../style/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={title} alt="Peaky Blinders"></img>
    </div>
  );
};

export default Header;
