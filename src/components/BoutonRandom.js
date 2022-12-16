import { MealByRandom } from "../requests/mealByRandom";

export function BoutonRandom () {

return ( 
    <div>
        <button type="button" onClick={MealByRandom} className="btn btn-primary">Random</button>
    </div>
);
}