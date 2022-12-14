import { useState, useEffect } from "react";

export function ListByCountry() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch('www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then(res => res.json())
    .then(
        (result) => {
        setIsLoaded(true);
        setItem(result);
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
        <h2>Which Country ?</h2>
        <ul>
            <li></li>
        </ul>
    </div>
</>
);
}