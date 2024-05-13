"use client";
import { useState } from "react";

function Salle() {
  const [showSalle, setShowSalle] = useState({
    openspace: false,
    detente: false,
    barista: false,
    restauration: false,
  });

  const handleShow = (salle) => {
    setShowSalle({
      ...showSalle,
      [salle]: !showSalle[salle],
    });
  };

  return (
    <div className="display_salle">
      <div
        onClick={() => handleShow("openspace")}
        className="bloc_salle Openspace"
      >
        <p>Openspace</p>
      </div>
      {showSalle.openspace && (
        <div className="Container_description">
        <div className="Description show">
          <p>
            Rencontrez et échangez avec des entrepreneurs qui vous ressemblent.
            Un espace de travail pensé pour votre bien-être et votre efficacité.<br></br>
            <strong>A votre disposition: Bureaux équipés collectifs et individuels,
            fibre.</strong>
          </p>
        </div>
        </div>
      )}
      <div onClick={() => handleShow("detente")} className="bloc_salle Detente">
        <p>Détente</p>
      </div>
      {showSalle.detente && (
        <div className="Description show">
          <p>
            Afin de garder une bonne dynamique dans votre travail tout au long
            de la journée, pensez à venir vous reposer dans notre espace
            détente.<br></br><strong> Profitez de nos fauteuils et canapés, baby-foot, flipper et
            coin lecture.</strong>
          </p>
        </div>
      )}
      <div onClick={() => handleShow("barista")} className="bloc_salle Barista">
        <p>Barista</p>
      </div>
      {showSalle.barista && (
        <div className="Description show">
          <p>
            Besoin de faire une pause ? Retrouvez toute la journée Harold, notre
            barista, qui vous servira boissons chaudes, jus de fruits frais, et
            autres gourmandises pour vous maintenir dans des conditions propices
            à l'efficacité. <br></br><strong>Coffee bar ouvert toute la journée.</strong>
          </p>
        </div>
      )}
      <div
        onClick={() => handleShow("restauration")}
        className="bloc_salle Restauration"
      >
        <p>Restauration</p>
      </div>
      {showSalle.restauration && (
        <div className="Description show">
          <p>
            Nos plats sont concoctés à partir de produits frais et locaux. Le
            menu sera affiché chaque semaine devant le restaurant ainsi que sur
            notre page instagram.<br></br> <strong>OUVERTURE : 12H - 14H</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default Salle;
