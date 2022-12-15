import './App.css';
import { BarreDeRecherche } from './components/BarreDeRecherche';
import { CuisineNavBar } from "./components/NavBar";
import { Titre } from './components/Titre';
import { BoutonRandom } from './components/BoutonRandom';
import { MealByRandom } from './requests/mealByRandom';
import { AffichageRecette } from './components/affichageRecette';
import { MealByID } from './requests/mealByID';
import { ListByTitre } from './requests/listByTitre';
function App() {
  return (
    <div className='App'>
      <Titre></Titre>
      <BarreDeRecherche></BarreDeRecherche><BoutonRandom></BoutonRandom>
      <CuisineNavBar></CuisineNavBar>
{/*       <AffichageRecette></AffichageRecette> */}
{/*       <MealByRandom></MealByRandom> */}
{/*       <MealByID id="52846"></MealByID>*/}
      <ListByTitre titre="salmon"></ListByTitre>

    </div>
  );
}

export default App;


