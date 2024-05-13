import Presentation from "./components/Presentation";

export default function Home() {
  return (
    <main>
      <div className="image_header">
        <img src="./images/home-page/coworking-mobil.jpg"></img>
      </div>
      <div className="presentation">
        <Presentation />
      </div>
    </main>
  );
}
