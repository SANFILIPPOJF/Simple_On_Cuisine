import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';


export function ListByCategory(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {

    const category = { method: 'GET' };
    fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?c=${props.category}`)
        .then(response => response.json())
        .then((category) => {
            console.log(category.meals[0].strMeal);
            setLoading(false);
            setData(category);
        })
        .catch((e) => {
            console.error(`An error occurred: ${e}`)
        });
}, []);
if (loading){
    return (<p>Loading...</p>)
}


}