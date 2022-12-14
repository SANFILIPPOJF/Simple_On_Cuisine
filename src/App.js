import './App.css';
import { BarreDeRecherche } from './components/BarreDeRecherche';
import { CuisineNavBar } from "./components/NavBar";

function App() {

  return (
    <div className='App'>
      <BarreDeRecherche></BarreDeRecherche>
      <CuisineNavBar></CuisineNavBar>
    </div>

  );
}

export default App;
