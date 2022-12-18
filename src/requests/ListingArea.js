import { useEffect, useState } from "react";
import { ListByArea } from "./ListByArea";
import NavDropdown from 'react-bootstrap/NavDropdown';

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
    const listArea = data.map(area => {
        return (<NavDropdown.Item key={area.strArea} href="#action/3.1" onClick={() => setArea(area.strArea)}>
        {area.strArea}
        </NavDropdown.Item>)
    })
    return (
        <>
                {listArea}
        </>
    );
}
