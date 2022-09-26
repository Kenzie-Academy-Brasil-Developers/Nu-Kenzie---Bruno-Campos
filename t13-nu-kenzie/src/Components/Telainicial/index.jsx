import "./telainicial.css";
import React from "react";
import Nu from "./Nu2.png";
import Group from"./Group.png"
import { useState } from "react";
const Inicial = () => {
  const[isShow,setIsShow] = useState(true);
  return (
    <>
      <div className="Div-inicial">
      <div className="Div-Iniciar" >
      <img className="Nu" src={Nu} alt="" />
      <h2>Centralize o controle das suas finanças</h2>
      <h3>de forma rápida e segura</h3>
      <button  className="button">Iniciar</button>
      </div>
      <div>
        <img src={Group} alt="" />
      </div>
      </div>
      
    </>
  );
}

export default Inicial;
