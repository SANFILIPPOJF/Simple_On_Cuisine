import { useState, useEffect } from "react";
export function MealByID() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=72`)
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
    if (loading){
        return (<p>Loading...</p>)
    }
    return (
        <>
            <div className="App">
                <p>name: {data?.meals[0].strMeal}</p>
            </div>
        </>
    );
}