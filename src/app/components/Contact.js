import React from "react";

function Contact() {
  return (
    <div className="Container_Formulaire">
      <div className="Titre_contact">
        <div className="bloc_contact small">
          <div className="trait1"></div>
        </div>
        <div className="bloc_contact medium">
          <p>Contact</p>
        </div>
        <div className="bloc_contact large">
          <div className="trait1"></div>
        </div>
      </div>
      <div className="Formulaire_style">
        <div className="Display_form">
        <form>
          <label htmlFor="nom">Nom</label>
          <br></br>
          <input htmlFor="text" id="nom"></input>
          <br></br>
          <label htmlFor="nom">Prénom</label>
          <br></br>
          <input htmlFor="text" id="nom"></input>
          <br></br>
          <label htmlFor="nom">Mail</label>
          <br></br>
          <input htmlFor="mail" id="nom"></input>
          <br></br>
          <label htmlFor="nom">Message</label>
          <br></br>
          <input htmlFor="text" id="nom"></input>
          <br></br>
          <button htmlFor="submit" value="Envoyer">
            Envoyer
          </button>
        </form>
      </div>
      </div>
    </div>
    
  );
}

export default Contact;
