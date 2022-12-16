import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { AffichageRecette } from "../components/affichageRecette";
import { ListByCategory } from "./ListByCategory";

export function ListingCategory() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category,setCategory] = useState("");



    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
            .then(response => response.json())
            .then((catArray) => {
                setLoading(false);
                setData(catArray.meals);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    if (loading) {
        return (<p>Loading...</p>)
    }
    console.log("category", category);
    const listCat = data.map(cat => {
<<<<<<< HEAD
        return (<ListGroup.Item action href="#link1" variant="light" key={cat.strCategory}>{cat.strCategory}</ListGroup.Item>)
=======
        return (<ListGroup.Item action key={cat.strCategory} onClick={() => setCategory(cat.strCategory)}>{cat.strCategory}</ListGroup.Item>)
>>>>>>> 2a23525e98a50c9cdd5539218e4622772d8858ff
    })
    return (
        <>
            <ListGroup>
                {listCat}
            </ListGroup>
            {category.length>0 && <ListByCategory category={category}></ListByCategory>}
        </>
    );
}
