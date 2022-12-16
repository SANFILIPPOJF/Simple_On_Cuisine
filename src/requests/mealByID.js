import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";

export function MealByID(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`)
            .then(response => response.json())
            .then((meal) => {
                setData(meal.meals[0]);
                setLoading(false);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    if (loading) {
        return (<p>Loading...</p>)
    }
    return (
        <Accordion>
            <Accordion.Header>
                <Figure className="mx-auto">
                    <Figure.Image
                        width={400}
                        height={400}
                        alt="image"
                        src={data.strMealThumb}
                    />
                    <Figure.Caption>
                        <h2 className="titre" style={{ fontSize: "2rem", color: "teal" }}>{data.strMeal}</h2>
                    </Figure.Caption>
                </Figure>
            </Accordion.Header>
            <Accordion.Body>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item><h5>Category :</h5> {data.strCategory}</ListGroup.Item>
                        <ListGroup.Item><h5>Area :</h5> {data.strArea}</ListGroup.Item>
                        <ListGroup.Item><h5>ingredients :</h5>
                            {data.strMeasure1} {data.strIngredient1}<br />
                            {data.strMeasure2} {data.strIngredient2}<br />
                            {data.strMeasure3} {data.strIngredient3}<br />
                            {data.strMeasure4} {data.strIngredient4}<br />
                            {data.strMeasure5} {data.strIngredient5}<br />
                            {data.strMeasure6} {data.strIngredient6}<br />
                            {data.strMeasure7} {data.strIngredient7}<br />
                            {data.strMeasure8} {data.strIngredient8}<br />
                            {data.strMeasure9} {data.strIngredient9}<br />
                            {data.strMeasure10} {data.strIngredient10}<br />
                            {data.strMeasure11} {data.strIngredient11}<br />
                            {data.strMeasure12} {data.strIngredient12}<br />
                            {data.strMeasure13} {data.strIngredient13}<br />
                            {data.strMeasure14} {data.strIngredient14}<br />
                            {data.strMeasure15} {data.strIngredient15}<br />
                            {data.strMeasure16} {data.strIngredient16}<br />
                            {data.strMeasure17} {data.strIngredient17}<br />
                            {data.strMeasure18} {data.strIngredient18}<br />
                            {data.strMeasure19} {data.strIngredient19}<br />
                            {data.strMeasure20} {data.strIngredient20}<br />
                        </ListGroup.Item>
                        <ListGroup.Item><h5>Instructions :</h5>
                            {data.strInstructions}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button href={data.strYoutube} target="_blank" variant="danger" size="lg">
                                YouTube Recipe
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button href={data.strSource} target="_blank" variant="info" size="lg">
                                Source
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-success" htmlFor="btn-check-outlined">Favorite</label><br />
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Accordion.Body>
        </Accordion>
    )
}