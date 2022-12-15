import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export function AffichageRecette (props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    return(
        <>
            <div className="App ms-auto">
                {loading && <p>Loading...</p>}
                {!loading && <p>Fetched data</p>}
                <Accordion className="justify-content-end">
                        <Accordion.Header className="justify-content-end">
                            <Figure className="mx-auto">
                                <Figure.Image
                                    width={400}
                                    height={400}
                                    alt="image"
                                    src={props.mealArray[0].strMealThumb}
                                />
                                <Figure.Caption>
                                    <h2 className="titre" style={{ fontSize: "2rem", color: "teal" }}>{props.mealArray[0].strMeal}</h2>
                                </Figure.Caption>
                            </Figure>
                            </Accordion.Header>
                        <Accordion.Body>
                            <Card style={{ width: '50rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><h5>Category :</h5> {props.mealArray[0].strCategory}</ListGroup.Item>
                                    <ListGroup.Item><h5>Area :</h5> {props.mealArray[0].strArea}</ListGroup.Item>
                                    <ListGroup.Item><h5>ingredients :</h5> 
                                        {props.mealArray[0].strMeasure1} {props.mealArray[0].strIngredient1}<br /> 
                                        {props.mealArray[0].strMeasure2} {props.mealArray[0].strIngredient2}<br /> 
                                        {props.mealArray[0].strMeasure3} {props.mealArray[0].strIngredient3}<br /> 
                                        {props.mealArray[0].strMeasure4} {props.mealArray[0].strIngredient4}<br /> 
                                        {props.mealArray[0].strMeasure5} {props.mealArray[0].strIngredient5}<br /> 
                                        {props.mealArray[0].strMeasure6} {props.mealArray[0].strIngredient6}<br /> 
                                        {props.mealArray[0].strMeasure7} {props.mealArray[0].strIngredient7}<br /> 
                                        {props.mealArray[0].strMeasure8} {props.mealArray[0].strIngredient8}<br /> 
                                        {props.mealArray[0].strMeasure9} {props.mealArray[0].strIngredient9}<br /> 
                                        {props.mealArray[0].strMeasure10} {props.mealArray[0].strIngredient10}<br /> 
                                        {props.mealArray[0].strMeasure11} {props.mealArray[0].strIngredient11}<br /> 
                                        {props.mealArray[0].strMeasure12} {props.mealArray[0].strIngredient12}<br /> 
                                        {props.mealArray[0].strMeasure13} {props.mealArray[0].strIngredient13}<br /> 
                                        {props.mealArray[0].strMeasure14} {props.mealArray[0].strIngredient14}<br /> 
                                        {props.mealArray[0].strMeasure15} {props.mealArray[0].strIngredient15}<br /> 
                                        {props.mealArray[0].strMeasure16} {props.mealArray[0].strIngredient16}<br /> 
                                        {props.mealArray[0].strMeasure17} {props.mealArray[0].strIngredient17}<br /> 
                                        {props.mealArray[0].strMeasure18} {props.mealArray[0].strIngredient18}<br /> 
                                        {props.mealArray[0].strMeasure19} {props.mealArray[0].strIngredient19}<br /> 
                                        {props.mealArray[0].strMeasure20} {props.mealArray[0].strIngredient20}<br /> 
                                    </ListGroup.Item>
                                    <ListGroup.Item><h5>Instructions :</h5> 
                                        {props.mealArray[0].strInstructions}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Button href={props.mealArray[0].strYoutube} target="_blank" variant="danger" size="lg">
                                        YouTube Recipe
                                    </Button>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Button href={props.mealArray[0].strSource} target="_blank" variant="info" size="lg">
                                            Source
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Accordion.Body>
                </Accordion>
            </div>
        </>
    );
}