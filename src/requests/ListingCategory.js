import { useEffect, useState } from "react";
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
    const listCat = data.map(cat => {
        return (<li key={cat.strCategory} onClick={() => setCategory(cat.strCategory)}>{cat.strCategory}</li>)
    })
    return (
        <>
            <ul>
                {listCat}
            </ul>
            {category.length>0 && <ListByCategory category={category}></ListByCategory>}
        </>
    );
}
