import { useEffect, useState } from "react";


export function ListingArea (strArea){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const ListingArea = (areaArray.map(area,meals.strArea) =>(<li key ={meals.strArea}>{meals.strArea} </li>
    ));

    useEffect( ()=> {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            .then(response => response.json())
            .then((areaArray) => {
                setLoading(false);
                console.log(areaArray);
                setData(areaArray.meals);
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
            </div>
            </>
    );
}
