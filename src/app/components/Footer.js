import React from "react";

function Footer() {
  return (
    <div className="Container_footer">
      <div className="Reseaux">
        <div className="texte"></div>
        <div className="images_reseaux">
          <h1>NOS RESEAUX</h1>
          <div className="image_flex">
          <img src="./images/Reseaux/insta.png"></img>
          <img src="./images/Reseaux/fb.png"></img>
          <img src="./images/Reseaux/twitter.png"></img>
          </div>
        </div>
      </div>
      <div className="Lieux">
        <div className="Localisation">
        <div className="image_loca">
          <img src="./images/Reseaux/loca.png"></img></div>
          <div className="txt_loca">
          <h1>Localisation</h1>
          <p>4 Rue du Baron 44000 Nantes,<br></br> Ligne 54</p></div>

        </div>
        <div className="Horraire">
          <div className="image_horraire">
          <img src="./images/Reseaux/horraires.png"></img></div>
          <div className="txt_horraire">
          <h1>Horraire</h1>
          <p>Lundi - Vendredi : 9h - 18h <br></br>
Restauration : 12H - 14H<br></br>
Coffee bar : Toute la journée<br></br></p>
</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
