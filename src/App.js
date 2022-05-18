import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
 

function App() {
  return (
  <div>
    <NavBar />
    <ItemListContainer greeting="Come sano en azul y rosado" />
  </div>
  );
}

export default App;
