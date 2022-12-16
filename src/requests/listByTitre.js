import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { AffichageRecette } from "../components/affichageRecette";

export function ListByTitre(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.titre}`)
            .then(response => response.json())
            .then((meal) => {
                setLoading(false);
                setData(meal);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    if (loading) {
        return (<p>Loading...</p>)
    }
    return (
        <>
            <div className="App">
                <AffichageRecette mealArray={data}></AffichageRecette>
            </div>
        </>
    )
}