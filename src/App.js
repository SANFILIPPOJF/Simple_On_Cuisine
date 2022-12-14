import './App.css';
import { BarreDeRecherche } from './components/BarreDeRecherche';
import { CuisineNavBar } from "./components/NavBar";
import { Titre } from './components/Titre';
import { BoutonRandom } from './components/BoutonRandom';
import { MealByID } from './requests/mealByID';

function App() {
  return (
    <div className='App'>
      <Titre></Titre>
      <BarreDeRecherche></BarreDeRecherche>
      <CuisineNavBar></CuisineNavBar>
      <BoutonRandom></BoutonRandom>
      <MealByID Id="10"></MealByID>
    </div>

  );
}

export default App;


