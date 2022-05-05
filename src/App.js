import logo from "./logo.svg";
import "./App.css";

const AvatarJSX = (props) => {
  console.log(props);
  const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`;

  return (
    <picture>
      <img src={src} alt="Lego 1" />
      {props.name}
    </picture>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AvatarJSX id={2} name={"Seba"}/>
        <AvatarJSX id={3} name={"Alejandro"}/>
        <AvatarJSX id={4} name={"Nicolas"}/>

      </header>
    </div>
  );
}

export default App;
