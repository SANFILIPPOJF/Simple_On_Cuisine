import { useState, useEffect } from "react";

export function ListByIngredient(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${props.ingredient}`)
            .then(response => response.json())
            .then((ingredientList) => {
                setLoading(false);
                setData(ingredientList.meals);
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