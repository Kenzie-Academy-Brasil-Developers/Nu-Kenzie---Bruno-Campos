import { useState } from "react";
import "./Envios.css";

const Envios = ({ setProfiles }) => {
  const [Descricao, setDescri] = useState("");
  const [Valor, setValor] = useState("");
  const [Select, setSelect] = useState("");
 const categories = ['Entrada','Depesa']
  function handleSubmit(event) {
    event.preventDefault();

    console.log(Descricao, Valor, Select);
    setProfiles((previousProfiles) => [
      ...previousProfiles,
      { Descricao, Valor, Select },
    ]);
    setDescri("");
    setValor("");
    setSelect("");
  }

  return (
    <>
      <div className="Envios">
        <form className="Form-envios" onSubmit={handleSubmit}>
          <div>
            <h1 className="h1">Descrição</h1>
            <input
              className="Input-descricao"
              type="text"
              placeholder="Digite aqui sua descrição"
              value={Descricao}
              onChange={(event) => setDescri(event.target.value)}
            />
            <h2 className="h2">Ex:Comprar de roupas</h2>
          </div>
          <div className="Display-valor">
            <div>
              <h1 className="h1">Valor</h1>
              <input
                className="Input-Valor"
                type="text"
                placeholder="1                    R$"
                value={Valor}
                onChange={(event) => setValor(event.target.value)}
              />
            </div>
            <div>
              <h1 className="h1">Tipo de Valor</h1>
              <select  onChange={(event) => setSelect(event.target.value)}defaultValue={Select}  className="Select" name="" id="">
                {categories.map(category =>(
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
