import { useState, useEffect } from "react";
import { AffichageRecette } from "../components/affichageRecette";



export function ListByCategory(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        {/*const category = { method: 'GET' };*/}
        fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?c=${props.category}`)
            .then(response => response.json())
            .then((category) => {
                setLoading(false);
                setData(category.meals);
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
    );

}