import './App.css';
import { BarreDeRecherche } from './components/BarreDeRecherche';
import { CuisineNavBar } from "./components/NavBar";
import { Titre } from './components/Titre';
import { BoutonRandom } from './components/BoutonRandom';

function App() {
  return (
    <div className='App'>
      <Titre></Titre>
      <BarreDeRecherche></BarreDeRecherche>
      <CuisineNavBar></CuisineNavBar>
      <BoutonRandom></BoutonRandom>
    </div>

  );
}

export default App;


