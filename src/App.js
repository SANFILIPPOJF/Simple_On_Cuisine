import './App.css';
import { BarreDeRecherche } from './components/BarreDeRecherche';
import { CuisineNavBar } from "./components/NavBar";
import { Titre } from './components/Titre';
import { BoutonRandom } from './components/BoutonRandom';
import { MealByRandom } from './requests/mealByRandom';
/* import { AffichageRecette } from './components/affichageRecette'; */
import { MealByID } from './requests/mealByID';
import { ListByCountry } from './requests/ListByCountry';
import { ListingArea } from './requests/ListingArea';
function App() {
  return (
    <div className='App'>
      <Titre></Titre>
      <BarreDeRecherche></BarreDeRecherche><BoutonRandom></BoutonRandom>
      <CuisineNavBar></CuisineNavBar>
{/*       <AffichageRecette></AffichageRecette> */}
      <MealByRandom></MealByRandom>
{/*       <MealByID id="52846"></MealByID>*/}
{/*      <ListByCountry area="Canadian"></ListByCountry>*/}
      <ListingArea strArea = "#action/3.2"></ListingArea>
    </div>
  );
}

export default App;


