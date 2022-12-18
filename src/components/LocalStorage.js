import { useEffect, useState } from "react";

export function LocalStrage (){
    
    const [btnFavorite, setBtnFavorite] = useState([]);

    useEffect( () =>{
        localStorage.setItem('btnFavorite', JSON.stringify(btnFavorite));
    },[btnFavorite]);
}