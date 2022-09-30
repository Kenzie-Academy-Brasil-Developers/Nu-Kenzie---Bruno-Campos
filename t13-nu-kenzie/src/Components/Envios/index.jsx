import { useState } from "react";
import "./Envios.css";

const Envios = ({ setProfiles, categories }) => {
  const [Descricao, setDescri] = useState("");
  const [Valor, setValor] = useState("");
  const [Select, setSelect] = useState(categories[0]);

  function handleSubmit(event) {
    event.preventDefault();

    setProfiles((previousProfiles) => [
      ...previousProfiles,
      { Descricao, Valor, categoria: Select },
    ]);
    setDescri("");
    setValor("");
    setSelect("Entrada");
  }

  return (
    <>
      <div className="Envios">
        <form className="Form-envios" onSubmit={handleSubmit}>
          <div className="Formsub-envios">
            <h1 className="h1 h1sent">Descrição</h1>
            <input
              className="Input-descricao"
              type="text"
              placeholder="Digite aqui sua descrição"
              value={Descricao}
              onChange={(event) => setDescri(event.target.value)}
            />
            <div className="h1sent">
              <h2 className="h2">Ex:Comprar de roupas</h2>
            </div>
          </div>
          <div className="Display-valor">
            <div className="Div__Value__Select">
              <h1 className="h1 h1sent__Value__Select">Valor</h1>
              <input
                className="Input-Valor"
                type="text"
                placeholder="1      R$"
                value={Valor}
                onChange={(event) => setValor(event.target.value)}
              />
            </div>
            <div className="Div__Value__Select">
              <h1 className="h1  h1sent__Value__Select">Tipo de Valor</h1>
              <select
                onChange={(event) => setSelect(event.target.value)}
                defaultValue={Select}
                className="Select"
                name=""
                id=""
              >
                {categories.map((category) => (
                  <option value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="Div-button">
            <button className="Button-inserir" type="submit">
              inserir valor
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Envios;
