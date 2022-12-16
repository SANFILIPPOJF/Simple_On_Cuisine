import { useEffect, useState } from "react";
import { ListByArea } from "./ListByArea";

export function ListingArea() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [area,setArea] = useState("");


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            .then(response => response.json())
            .then((areaArray) => {
                setLoading(false);
                setData(areaArray.meals);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    if (loading) {
        return (<p>Loading...</p>)
    }
    const listArea = data.map(area => {return(<li key={area.strArea} onClick={() => setArea(area.strArea)}>{area.strArea}</li>)
    })
    return (
        <>
            <ul>
                {listArea}
            </ul>
            {area.length>0 && <ListByArea area={area}></ListByArea>}
        </>
    );
}
