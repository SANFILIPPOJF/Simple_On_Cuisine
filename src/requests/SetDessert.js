import { useState, useEffect } from "react";
import { MealByID } from "./mealByID";

export function SetPasta() {
    const [dataDessert, SetDessert] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta`)
            .then(response => response.json())
            .then((category) => {
                setLoading(false);
                SetDessert(category.meals);
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
               <MealByID id={dataDessert[Math.floor(Math.random() * dataDessert.length)].idMeal}></MealByID>
            </div>
        </>

    );
}