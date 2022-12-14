import { useState, useEffect } from "react";

export function Randoms() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then((randomMeal) => {
                console.log(randomMeal.meals[0].strMeal);
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
                {<p>Fetched data</p>}
                <p>name: {data?.meals[0].strMeal}</p>
            </div>
        </>
    );
}