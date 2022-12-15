import { useEffect, useState } from "react";


export function ListingArea() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
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
    if (loading) {
        return (<p>Loading...</p>)
    }
    console.log(data);
    const listArea = data.map(area => {return(<li key={area.strArea}>{area.strArea}</li>)
    })
    return (
        <>
            <ul>
                {listArea}
            </ul>
        </>
    );
}
