import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export function ListingCategory() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
            .then(response => response.json())
            .then((catArray) => {
                setLoading(false);
                console.log(catArray);
                setData(catArray.meals);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    if (loading) {
        return (<p>Loading...</p>)
    }
    console.log(data);
    const listCat = data.map(cat => {
        return (<ListGroup.Item action key={cat.strCategory}>{cat.strCategory}</ListGroup.Item>)
    })
    return (
        <>

            <ListGroup>
                {listCat}
            </ListGroup>
        </>
    );
}
