import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';

export function MealByID(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`)
            .then(response => response.json())
            .then((meal) => {
                console.log(meal);
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
                {loading && <p>Loading...</p>}
                <Accordion className='' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h2 className="titre" style={{ fontSize: "3rem", color: "teal" }}>{data?.meals[0].strMeal}</h2><br />
                            <img src={data?.meals[0].strMealThumb} alt="image" /></Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}