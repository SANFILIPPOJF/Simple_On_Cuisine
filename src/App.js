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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className='App'>
      <Titre></Titre>
      <BarreDeRecherche></BarreDeRecherche><BoutonRandom></BoutonRandom>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Search" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">By categories</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">By area</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">By ingredients</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Favoris</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*       <AffichageRecette></AffichageRecette> */}
      {/*       <MealByRandom></MealByRandom> */}
      {/*       <ListByCountry area="Canadian"></ListByCountry>*/}
      {/*       <AffichageRecette></AffichageRecette> */}
      <MealByRandom></MealByRandom>
      {/* <ListingArea></ListingArea> */}
      <ListingCategory></ListingCategory>
      {/* <ListingArea></ListingArea> */}
      {/*<ListingArea></ListingArea>*/}
            <ListingIngredients></ListingIngredients>

    </div>
  );
}

export default App;


