import "./App.css";
import Nav from "./Components/Nav";
import Envios from "./Components/Envios";
import Profiles from "./Components/Enviados";
import { useState } from "react";
import Inicial from "./Components/Telainicial";
import Filtro from "./Components/filtros";
import "./colors.css"



const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [filtro, setFiltro] = useState("");
  const newCardlist = profiles.filter((profile) =>
    filtro === "" ? true : profile.categoria === filtro
  );
  const categories = ["Entrada", "Despesa"];

  return (
    <div className="App">
      {isShow ? (
        <>
          <Nav setIsShow={setIsShow}></Nav>
          <div className="Display">
            <Envios categories={categories} setProfiles={setProfiles}/>
            <div className="Style-Sent">
              <Filtro categories={categories} setFiltro={setFiltro} />
              <Profiles profiles={newCardlist} setProfiles={setProfiles} />
            </div>
          </div>
        </>
      ) : (
        <Inicial setIsShow={setIsShow}></Inicial>
      )}
    </div>
  );
};

export default App;
