import Formulaire from "./components/Formulaire";
import Presentation from "./components/Presentation";
import Tarif from "./components/Tarif";

export default function Home() {
  return (
    <main>
      <div className="image_header">
        <img src="./images/home-page/coworking-mobil.jpg"></img>
      </div>
      <div className="presentation">
        <Presentation />
      </div>
      <div className="tarif">
        <Tarif />
      </div>
      <div className="formulaire">
        <Formulaire />
      </div>
    </main>
  );
}
