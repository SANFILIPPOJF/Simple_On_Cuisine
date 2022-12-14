import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';


export function ListByCategory() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {

    const categorie = { method: 'GET' };
    fetch('http://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood', categorie)
        .then(response => response.json())
        .then((categorie) => {
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


}