//import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer nombre='Curso de React' moneda='$' precio='100' />

    </div>
  );
}

export default App;


