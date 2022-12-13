import './App.css';
import { Navbar } from "./components/NavBar";
import './maquette/maquette.css';
import MAQUETTE from "./maquette/structure.json"
import { InfoBox } from './maquette/infobox';

function App() {

  return (
    <div className='App'>

      <Navbar></Navbar>
      <InfoBox data={MAQUETTE} />
    </div>

  );
}

export default App;
