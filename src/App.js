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
function App() {
  return (
    <div className='App'>
      <Titre></Titre>
      <BarreDeRecherche></BarreDeRecherche><BoutonRandom></BoutonRandom>
      <CuisineNavBar></CuisineNavBar>
      {/*       <AffichageRecette></AffichageRecette> */}
      {/*       <MealByRandom></MealByRandom> */}
      {/*      <ListByCategorySeafood></ListByCategory>*/}
      {/*       <MealByID id="52846"></MealByID>*/}
      {/*       <ListByCountry area="Canadian"></ListByCountry>*/}
      {/*<ListByIngredient ingredient="chicken_breast"></ListByIngredient>*/}
      {/*       <AffichageRecette></AffichageRecette> */}
      {/*      <MealByRandom></MealByRandom>*/}
      {/*       <MealByID id="52846"></MealByID>*/}
      {/* <ListingArea></ListingArea> */}
      <ListingCategory></ListingCategory>
{/*      <ListByCountry area="French"></ListByCountry>*/}
    </div>
  );
}

export default App;


