import { useEffect, useState } from "react";
import { ListByIngredient } from "./ListByIngredient";


export function ListingIngredients() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [ingredient,setIngredient] = useState("");

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            .then(response => response.json())
            .then((ingredientsArray) => {
                setLoading(false);
                setData(ingredientsArray.meals);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    if (loading) {
        return (<p>Loading...</p>)
    }
    const listIngredients = data.map(ingredients => {
        let strIngredient = ingredients.strIngredient.replace(" ","_")
        return(<li key={strIngredient} onClick={() => setIngredient(strIngredient)}>{ingredients.strIngredient}</li>)
    })
    return (
        <>
            <ul>
                {listIngredients}
            </ul>
            {ingredient.length>0 && <ListByIngredient ingredient={ingredient}></ListByIngredient>}
        </>
    );
}
