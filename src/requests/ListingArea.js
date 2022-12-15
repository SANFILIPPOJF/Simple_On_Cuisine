import { useEffect, useState } from "react";


export function ListingArea (area){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( ()=> {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            .then(response => response.json())
            .then((area) => {
                setLoading(false);
                console.log(area.strArea);
                setData(area.strArea);
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
        <div className = "App">
            {loading && <p>Loading...</p>}
            {!loading && <p>Fetched data</p>}
            </div>
            </>
    );
}
