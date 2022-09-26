import "./Enviados.css";
import lixo from "./lixo.png";
import NoCard from "./NoCard.png";


const Profiles = ({ profiles,setProfiles}) => {
  function removeEnvio(profile) {
    const novosenvios = profiles.filter((ele) => ele !== profile);
    setProfiles([...novosenvios]);
    
  }
  
  return (
    <>
      {profiles.length ? (
        <ul className="Ul-Enviados">
          {profiles.map((profile, index) => (
            <li className="Enviados" key={index} >
              <div>
                {profile.Descricao}
                {profile.Select}
              </div>
              <div>
                R${profile.Valor}
                <button  onClick={()=>removeEnvio(profile)} >
                  <img src={lixo} alt="" />
                </button>
              </div>
            </li>
          ))}
        </ul>
        
      ) : (
        <div>
          <h1>Você ainda não possui nenhum lançamento</h1>,
          <img src={NoCard} alt="" />
        </div>
      )}
    </>
  );
  
};

export default Profiles;
