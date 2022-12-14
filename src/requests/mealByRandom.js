import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export function MealByRandom() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then((randomMeal) => {
                console.log(randomMeal.meals[0].strMeal);
                setLoading(false);
                setData(randomMeal);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    if (loading){
        return (<p>Loading...</p>)
    }
    return (
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
                                    src={data?.meals[0].strMealThumb}
                                />
                                <Figure.Caption>
                                    <h2 className="titre" style={{ fontSize: "2rem", color: "teal" }}>{data?.meals[0].strMeal}</h2>
                                </Figure.Caption>
                            </Figure>
                            </Accordion.Header>
                        <Accordion.Body>
                            <Card style={{ width: '50rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><h5>Category :</h5> {data?.meals[0].strCategory}</ListGroup.Item>
                                    <ListGroup.Item><h5>Area :</h5> {data?.meals[0].strArea}</ListGroup.Item>
                                    <ListGroup.Item><h5>ingredients :</h5> 
                                        {data?.meals[0].strMeasure1} {data?.meals[0].strIngredient1}<br /> 
                                        {data?.meals[0].strMeasure2} {data?.meals[0].strIngredient2}<br /> 
                                        {data?.meals[0].strMeasure3} {data?.meals[0].strIngredient3}<br /> 
                                        {data?.meals[0].strMeasure4} {data?.meals[0].strIngredient4}<br /> 
                                        {data?.meals[0].strMeasure5} {data?.meals[0].strIngredient5}<br /> 
                                        {data?.meals[0].strMeasure6} {data?.meals[0].strIngredient6}<br /> 
                                        {data?.meals[0].strMeasure7} {data?.meals[0].strIngredient7}<br /> 
                                        {data?.meals[0].strMeasure8} {data?.meals[0].strIngredient8}<br /> 
                                        {data?.meals[0].strMeasure9} {data?.meals[0].strIngredient9}<br /> 
                                        {data?.meals[0].strMeasure10} {data?.meals[0].strIngredient10}<br /> 
                                        {data?.meals[0].strMeasure11} {data?.meals[0].strIngredient11}<br /> 
                                        {data?.meals[0].strMeasure12} {data?.meals[0].strIngredient12}<br /> 
                                        {data?.meals[0].strMeasure13} {data?.meals[0].strIngredient13}<br /> 
                                        {data?.meals[0].strMeasure14} {data?.meals[0].strIngredient14}<br /> 
                                        {data?.meals[0].strMeasure15} {data?.meals[0].strIngredient15}<br /> 
                                        {data?.meals[0].strMeasure16} {data?.meals[0].strIngredient16}<br /> 
                                        {data?.meals[0].strMeasure17} {data?.meals[0].strIngredient17}<br /> 
                                        {data?.meals[0].strMeasure18} {data?.meals[0].strIngredient18}<br /> 
                                        {data?.meals[0].strMeasure19} {data?.meals[0].strIngredient19}<br /> 
                                        {data?.meals[0].strMeasure20} {data?.meals[0].strIngredient20}<br /> 
                                    </ListGroup.Item>
                                    <ListGroup.Item><h5>Instructions :</h5> 
                                        {data?.meals[0].strInstructions}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Button href={data?.meals[0].strYoutube} target="_blank" variant="danger" size="lg">
                                        YouTube Recipe
                                    </Button>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Button href={data?.meals[0].strSource} target="_blank" variant="info" size="lg">
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