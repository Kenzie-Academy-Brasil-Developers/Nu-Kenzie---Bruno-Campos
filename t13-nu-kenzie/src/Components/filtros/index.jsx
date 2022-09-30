import "./filtros.css";
import React from "react";

const Filtro = ({ categories, setFiltro }) => {
  return (
    <div className="Div-Buttons">
      <h1 className="H1-Filtred">Resumo finaceiro</h1>
      <div className="Buttons-Filtred">
      <button className="Filtred-All" onClick={() => setFiltro("")}>Todos</button>
      {categories.map((category) => (
        <button className="Filtred-All" key={category} onClick={() => setFiltro(category)}>
          {category}
        </button>
      ))}
      </div>
    </div>
  );
};

export default Filtro;
