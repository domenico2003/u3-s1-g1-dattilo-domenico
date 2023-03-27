import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/FunctionComponent";
import ImageComponent from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent
          src="https://picsum.photos/300/300?n=1"
          alt="logo"
          classe="App-logo"
        />

        <ButtonComponent text="io sono il primo btn" />
        <ButtonComponent text="io sono il secondo btn" />

        <div>
          <ImageComponent
            src="https://picsum.photos/200/200"
            alt="prima immagine"
            classe="img-prova"
          />
          <ImageComponent
            src="https://picsum.photos/200/200?n=0"
            alt="seconda immagine"
            classe="img-prova"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
