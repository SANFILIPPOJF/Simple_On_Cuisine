import './App.css';
import { Titre } from './components/Titre';
import { MealByRandom } from './requests/mealByRandom';
import { ListingArea } from './requests/ListingArea';
import { ListingCategory } from "./requests/ListingCategory";
import { ListingIngredients } from './requests/ListingIngredients';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { ListByTitre } from './requests/listByTitre';

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
              <Nav.Link href="#link">Favorite</Nav.Link>
              <Nav.Link onClick={() => setPage("random") }>Random</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Name the meal"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" onClick={() => setPage("listByTitre")}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {page === "random" && <MealByRandom></MealByRandom>}

      {page === "listCategory" && <ListingCategory></ListingCategory>}
      {page === "listArea" && <ListingArea></ListingArea>}
      {page === "listIngredient" && <ListingIngredients></ListingIngredients>}
      {page === "listByTitre" && <ListByTitre></ListByTitre>}

    </div>
  );
}

export default App;


