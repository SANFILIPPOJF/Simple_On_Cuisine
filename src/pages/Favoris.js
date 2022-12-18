import { useEffect } from "react";
import { MealByID } from "../requests/mealByID";

export function Favoris (props) {

    useEffect( () =>{
        
    const local = JSON.parse(localStorage.getItem("btnFavorite"));
    console.log(local);
    if (local != null){
        return (   
            <>
            <MealByID>{MealByID()}{local.MealByID()}</MealByID>
            </>
        )
    }
})


    return (   
            <>
            <h1>Mes favoris</h1>
            <MealByID>{MealByID()}</MealByID>
            </>
    )
}

/* POSSIBILITE D'IMPRESSION */