import './App.css';
import { BarreDeRecherche } from './components/BarreDeRecherche';
import { CuisineNavBar } from "./components/NavBar";
import { Titre } from './components/Titre';
import { BoutonRandom } from './components/BoutonRandom';
import { MealByRandom } from './requests/mealByRandom';
import { MealByID } from './requests/mealByID';
import { ListByTitre } from './requests/listByTitre';
import { ListByCountry } from './requests/ListByCountry';
import { ListingArea } from './requests/ListingArea';
import { ListingCategory } from "./requests/ListingCategory";
import { ListingIngredients } from './requests/ListingIngredients';

function App() {
  return (
    <div className='App'>
      <Titre></Titre>
      <BarreDeRecherche></BarreDeRecherche><BoutonRandom></BoutonRandom>
      <CuisineNavBar></CuisineNavBar>
      {/*       <AffichageRecette></AffichageRecette> */}
      {/*       <MealByRandom></MealByRandom> */}
      {/*       <ListByCountry area="Canadian"></ListByCountry>*/}
      {/*       <AffichageRecette></AffichageRecette> */}
      {/*      <MealByRandom></MealByRandom>*/}
      {/* <ListingArea></ListingArea> */}
      <ListingCategory></ListingCategory>
{/*      <ListByCountry area="French"></ListByCountry>*/}
      {/*<ListingArea></ListingArea>*/}
      {/*      <ListByCountry area="Canadian"></ListByCountry>*/}
      <ListingIngredients></ListingIngredients>

    </div>
  );
}

export default App;


