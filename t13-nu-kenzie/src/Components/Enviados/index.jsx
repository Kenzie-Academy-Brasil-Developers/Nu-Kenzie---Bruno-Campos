import "./Enviados.css";
import lixo from "./lixo.png";
import NoCard from "./NoCard.png";


const Profiles = ({ profiles, setProfiles,}) => {
  function removeEnvio(profile) {
    const novosenvios = profiles.filter((ele) => ele !== profile);
    setProfiles([...novosenvios]);
  }

  return (
    <>
      
      {profiles.length ? (
        <ul className="Ul-Enviados">
          {profiles.map((profile, index) => (
            <li className="Enviados" key={index}>
              <div>
              <p>{profile.Descricao}</p>
              <p>{profile.categoria}</p>
              </div>
              <div className="Value__Sent" >
                <p>R${profile.Valor}</p>
                <button onClick={() => removeEnvio(profile)}>
                  <img src={lixo} alt="" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h1>Você ainda não possui nenhum lançamento</h1>,
          <img  className="Img-notSent" src={NoCard} alt="" />
        </div>
      )}
    </>
  );
};

export default Profiles;
