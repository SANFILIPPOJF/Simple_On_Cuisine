import './App.css';
import { BarreDeRecherche } from './components/BarreDeRecherche';
import { CuisineNavBar } from "./components/NavBar";
import { Titre } from './components/Titre';
import { BoutonRandom } from './components/BoutonRandom';
import { MealByRandom } from './requests/mealByRandom';
import { AffichageRecette } from './components/affichageRecette';
import { ListByCategory } from './requests/ListByCategory';
import { MealByID } from './requests/mealByID';
function App() {
  return (
    <div className='App'>
      <Titre></Titre>
      <BarreDeRecherche></BarreDeRecherche><BoutonRandom></BoutonRandom>
      <CuisineNavBar></CuisineNavBar>
      {/*       <AffichageRecette></AffichageRecette> */}
      {/*       <MealByRandom></MealByRandom> */}
      { /*      <ListByCategory></ListByCategory>*/}
      {/*       <MealByID id="52846"></MealByID>*/}

    </div>
  );
}

export default App;


