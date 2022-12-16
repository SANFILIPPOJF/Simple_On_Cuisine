import './App.css';
import { Titre } from './components/Titre';
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
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState("accueil");
  return (
    <div className='App'>
      <Titre></Titre>
      <InputGroup>
        <InputGroup.Text id="btnGroupAddon">Search</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Name the meal"
          aria-label="Input group"
          aria-describedby="btnGroupAddon"
        />
      </InputGroup>
      <div>
      {page === "accueil" && <button type="button" onClick={() => setPage("random")} className="btn btn-primary">Random</button>}
      </div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => setPage("accueil")}>Home</Nav.Link>
              <NavDropdown title="Search" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick={() => setPage("listCategory")}>By categories</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick={() => setPage("listArea")}>By area</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={() => setPage("listIngredient")}>By ingredients</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Favoris</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {page === "random" && <MealByRandom></MealByRandom>}

      {page === "listCategory" && <ListingCategory></ListingCategory>}
      {page === "listArea" && <ListingArea></ListingArea>}
      {page === "listIngredient" && <ListingIngredients></ListingIngredients>}

      {/*      <ListByCountry area="French"></ListByCountry>*/}
      {/*      <ListByCountry area="Canadian"></ListByCountry>*/}
      {/*       <ListByCountry area="Canadian"></ListByCountry>*/}

    </div>
  );
}

export default App;


