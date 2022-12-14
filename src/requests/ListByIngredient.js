import { useState, useEffect } from "react";

export function ListByIngredient(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${props.ingredient}`)
        .then(response => response.json())
        .then((ingredient) => {
        setLoading(false);
        console.log(ingredient.meals);
        setData(ingredient.meals);
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
    <div className="App">
        {loading && <p>Loading...</p>}
        {!loading && <p>Fetched data</p>}
    </div>
</>
);
}