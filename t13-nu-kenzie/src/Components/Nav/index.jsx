import "./Nav.css";
import React from "react";
import Nu from "./Nu.png";
import { useState } from "react";
import Inicial from "../Telainicial";

const Nav = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow ? 
        <Inicial className="Display-flex" />
       : 
        <Inicial className="Display-none" />
      }
      <nav className="Nav">
        <img className="Imgnav" src={Nu} alt="" />
        <button type="button" onClick={() => setIsShow(!isShow)}>
          Inicio
        </button>
      </nav>
    </>
  );
};

export default Nav;
