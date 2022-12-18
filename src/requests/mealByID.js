import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import { Favoris } from '../pages/Favoris';

export function MealByID(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = React.useState(false);
    const handelToggle = () => {
        setItems(!items);};

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
                            {data.strIngredient1.length>1 && <>{data.strMeasure1} {data.strIngredient1}<br /></>}
                            {data.strIngredient2.length>1 && <>{data.strMeasure2} {data.strIngredient2}<br /></>}
                            {data.strIngredient3.length>1 && <>{data.strMeasure3} {data.strIngredient3}<br /></>}
                            {data.strIngredient4.length>1 && <>{data.strMeasure4} {data.strIngredient4}<br /></>}
                            {data.strIngredient5.length>1 && <>{data.strMeasure5} {data.strIngredient5}<br /></>}
                            {data.strIngredient6.length>1 && <>{data.strMeasure6} {data.strIngredient6}<br /></>}
                            {data.strIngredient7.length>1 && <>{data.strMeasure7} {data.strIngredient7}<br /></>}
                            {data.strIngredient8.length>1 && <>{data.strMeasure8} {data.strIngredient8}<br /></>}
                            {data.strIngredient9.length>1 && <>{data.strMeasure9} {data.strIngredient9}<br /></>}
                            {data.strIngredient10.length>1 && <>{data.strMeasure10} {data.strIngredient10}<br /></>}
                            {data.strIngredient11.length>1 && <>{data.strMeasure11} {data.strIngredient11}<br /></>}
                            {data.strIngredient12.length>1 && <>{data.strMeasure12} {data.strIngredient12}<br /></>}
                            {data.strIngredient13.length>1 && <>{data.strMeasure13} {data.strIngredient13}<br /></>}
                            {data.strIngredient14.length>1 && <>{data.strMeasure14} {data.strIngredient14}<br /></>}
                            {data.strIngredient15.length>1 && <>{data.strMeasure15} {data.strIngredient15}<br /></>}
                            {data.strIngredient16.length>1 && <>{data.strMeasure16} {data.strIngredient16}<br /></>}
                            {data.strIngredient17.length>1 && <>{data.strMeasure17} {data.strIngredient17}<br /></>}
                            {data.strIngredient18.length>1 && <>{data.strMeasure18} {data.strIngredient18}<br /></>}
                            {data.strIngredient19.length>1 && <>{data.strMeasure19} {data.strIngredient19}<br /></>}
                            {data.strIngredient20.length>1 && <>{data.strMeasure20} {data.strIngredient20}<br /></>}
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
                            <input type="checkbox" id="btnFavorite btn-check-outlined" className="btn-check" autoComplete="off" />
                            <label onClick={handelToggle} className="btn btn-outline-success" htmlFor="btn-check-outlined">Favorite</label> {items && <div>{MealByID}</div>} <br />
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Accordion.Body>
        </Accordion>
    )
}
/*    id="btnFavorite"
const [btnFavorite, setBtnFavorite] = useState([]);

        localStorage.setItem('btnFavorite', JSON.stringify(btnFavorite));
    },[btnFavorite]);*/