import "./Nav.css";
import React from "react";
import Nu from "./Nu.png";



const Nav = ({setIsShow},{isShow}) => {
  
  return (
    <>
      
      <nav className="Nav">
        <img className="Imgnav" src={Nu} alt="" />
        <button type="button" onClick={() => setIsShow(isShow)}>
          Inicio
        </button>
      </nav>
    </>
  );
};

export default Nav;
