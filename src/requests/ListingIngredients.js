import { useEffect, useState } from "react";
import { ListByIngredient } from "./ListByIngredient";
import NavDropdown from 'react-bootstrap/NavDropdown';


export function ListingIngredients() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [ingredient,setIngredient] = useState("");

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            .then(response => response.json())
            .then((ingredientsArray) => {
                setLoading(false);
                setData(ingredientsArray.meals);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    if (loading) {
        return (<p>Loading...</p>)
    }
    const listIngredients = data.map(ingred => {
        let strIngredient = ingred.strIngredient.replace(" ","_")
        return (<NavDropdown.Item key={strIngredient} href="#action/3.1" onClick={() => setIngredient(strIngredient)}>
        {ingred.strIngredient}
        </NavDropdown.Item>)
    })
    return (
        <>
                {listIngredients}
        </>
    );
}
