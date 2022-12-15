import { useEffect, useState } from "react";


export function ListingIngredients() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            .then(response => response.json())
            .then((ingredientsArray) => {
                setLoading(false);
                console.log(ingredientsArray);
                setData(ingredientsArray.meals);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    if (loading) {
        return (<p>Loading...</p>)
    }
    console.log(data);
    const listIngredients = data.map(ingredients => {
        return(<li key={ingredients.strIngredient.replace(" ","_")}>{ingredients.strIngredient}</li>)
    })
    return (
        <>
            <ul>
                {listIngredients}
            </ul>
        </>
    );
}
