import "./App.css";
import Nav from "./Components/Nav";
import Envios from "./Components/Envios";
import Profiles from "./Components/Enviados";
import { useState } from "react";
import Inicial from "./Components/Telainicial";
import Filtro from "./Components/filtros";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      {isShow ? (
        <>
          <Nav setIsShow={setIsShow}></Nav>
          <div className="Display">
            <Envios setProfiles={setProfiles}></Envios>
            <div>
              <Filtro />
              <Profiles profiles={profiles} setProfiles={setProfiles} />
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
