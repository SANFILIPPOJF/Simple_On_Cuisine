import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';

export function MealByRandom() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then((randomMeal) => {
                console.log(randomMeal);
                setLoading(false);
                setData(randomMeal);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    return (
        <>
            <div className="App">
                {loading && <p>Loading...</p>}
                {!loading && <p>Fetched data</p>}
                <Accordion className='' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h2 className="titre" style={{ fontSize: "3rem", color: "teal" }}>{data?.meals[0].strMeal}</h2><br/>
                        <img src={data?.meals[0].strMealThumb} alt="image" /></Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}