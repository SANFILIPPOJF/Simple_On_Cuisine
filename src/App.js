import './App.css';
import { BarreDeRecherche } from './components/BarreDeRecherche';
import { CuisineNavBar } from "./components/NavBar";
import { Titre } from './components/Titre';
import { BoutonRandom } from './components/BoutonRandom';
import { Recette } from './components/affichageRecette';
import { MealByRandom } from './requests/mealByRandom';
function App() {
  return (
    <div className='App'>
      <Titre></Titre>
      <BarreDeRecherche></BarreDeRecherche><BoutonRandom></BoutonRandom>
      <CuisineNavBar></CuisineNavBar>
{/*       <Recette></Recette> */}
      <MealByRandom></MealByRandom>
    </div>

  );
}

export default App;


