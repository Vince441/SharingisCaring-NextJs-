"use client"

import React from "react";
import Salle from "./Salle"

function Presentation() {
  return (
    <>
      <div className="Titre">
        <div className="bloc_presentation small">
          <div className="trait1"></div>
        </div>
        <div className="bloc_presentation medium">
          <p>Sharing is Caring</p>
        </div>
        <div className="bloc_presentation large">
          <div className="trait1"></div>
        </div>
      </div>
      <div className="texte_presentation">
        <p>Bienvenue dans notre espace de coworking " Sharing is caring ! "</p>
        <br></br>

        <p>
          Notre état d’esprit est vraiment orienté vers le bien être au travail
          et le partage.
        </p>
        <br></br>

        <p>
          Nous voulons que les indépendants, personnes en recherche d’emploi se
          sentent bien ici et puissent échanger afin de créer un réseau. Ils
          trouveront plein de services et de repas maison, préparés avec des
          produits locaux et avec amour !
        </p>
      </div>
      <div className="Salle">
        <div className="Titre_salle">
          <div className="bloc_presentation small">
            <div className="trait1"></div>
          </div>
          <div className="bloc_presentation medium">
            <p>Présentation des lieux</p>
          </div>
          <div className="bloc_presentation large">
            <div className="trait1"></div>
          </div>
        </div>

<div className="Presentation_salle">
<Salle />

</div>

      </div>
    </>
  );
}

export default Presentation;
