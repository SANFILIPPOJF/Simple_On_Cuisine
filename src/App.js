import './App.css';
import { CuisineNavBar } from "./components/NavBar";
import { Titre } from './components/Titre';
import { BoutonRandom } from './components/BoutonRandom';

function App() {
  return (
    <div className='App'>
      <Titre></Titre>
      <CuisineNavBar></CuisineNavBar>
      <BoutonRandom></BoutonRandom>
    </div>

  );
}

export default App;


