import './App.css';
import { Titre } from './components/Titre';
import { MealByRandom } from './requests/mealByRandom';
import { MealByID } from './requests/mealByID';
import { ListByTitre } from './requests/listByTitre';
import { ListByCountry } from './requests/ListByArea';
import { ListingArea } from './requests/ListingArea';
import { ListingCategory } from "./requests/ListingCategory";
import { ListingIngredients } from './requests/ListingIngredients';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { LocalStrage } from './components/LocalStorage';
import { Favoris } from './pages/Favoris';

function App() {
  const [page, setPage] = useState("accueil");
  return (
    <div className='App'>
      <Titre></Titre>
      <Navbar bg="light" expand="sm">
        <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link href="#home" onClick={() => setPage("accueil")}>Home</Nav.Link>
              <NavDropdown title="Search" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action/3.1" onClick={() => setPage("listCategory")}>By categories</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick={() => setPage("listArea")}>By area</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={() => setPage("listIngredient")}>By ingredients</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" onClick={() => setPage("favori")}>Favorite</Nav.Link>
              <Nav.Link onClick={() => setPage("random") }>Random</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Name the meal"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {page === "random" && <MealByRandom></MealByRandom>}

      {page === "listCategory" && <ListingCategory></ListingCategory>}
      {page === "listArea" && <ListingArea></ListingArea>}
      {page === "listIngredient" && <ListingIngredients></ListingIngredients>}

      {/*      <ListByCountry area="French"></ListByCountry>*/}
      {/*      <ListByCountry area="Canadian"></ListByCountry>*/}
      <MealByID meals={52928}></MealByID>
      <LocalStrage ></LocalStrage>
      {page === "favori" && <Favoris></Favoris>}

    </div>
  );
}

export default App;


