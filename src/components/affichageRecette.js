import { MealByID } from '../requests/mealByID';

export function AffichageRecette(props) {
    return (
        <>
            {props.mealArray.map(meal => {
                return (
                    <div key={meal.idMeal} className="App">
                        <MealByID id={meal.idMeal}></MealByID>
                    </div>
                )
            }
            )
            }
        </>
    );

}