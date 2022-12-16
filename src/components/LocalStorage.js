import { clear } from "@testing-library/user-event/dist/clear";
import { Button } from "react-bootstrap";
import { AffichageRecette } from "./affichageRecette";


export function LocalStrage (){
    const local = JSON.parse(localStorage.getItem("favoriteMeal"));
    console.log(local);
    if (local != null){
        return (   
            <>
            <AffichageRecette>mealArray={local.MealByID()}</AffichageRecette>
            
            </>)
    }

    Button.onClick = () => {
        const meal = { meal: meal.value}
        localStorage.setItem("favoriteMeal",JSON.stringify(meal));
        document.location.reload();
    }

    clear.onClick = () => {
        localStorage.clear();
        document.location.reload();
    }
}