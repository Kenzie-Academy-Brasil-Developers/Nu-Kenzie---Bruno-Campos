import "./App.css";
import Nav from "./Components/Nav";
import Envios from "./Components/Envios";
import Profiles from "./Components/Enviados";
import { useState } from "react";

import Filtro from "./Components/filtros";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  return (
    <div className="App">
      <Nav></Nav>
      <div className="Display">
        <Envios setProfiles={setProfiles}></Envios>
        <div>
          <Filtro />
          <Profiles profiles={profiles} />
        </div>
      </div>
    </div>
  );
};

export default App;
