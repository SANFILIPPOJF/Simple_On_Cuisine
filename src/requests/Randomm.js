import { useState, useEffect } from "react";

export function Randoms() {

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
                <p>name:</p>
            </div>
        </>
    );
}