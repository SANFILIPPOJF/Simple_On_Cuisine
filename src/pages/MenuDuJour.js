import { SetPasta } from "../requests/SetDessert";
import { SetDessert } from "../requests/SetPasta";
import { SetStarter } from "../requests/SetStarter";
export function MenuDuJour() {
    return(
        <>
        <h1>Menu du jour</h1>
        <h2>Entrée</h2>
        <SetStarter></SetStarter>
        <h2>Plat</h2>
        <SetPasta></SetPasta>
        <h2>Dessert</h2>
        <SetDessert></SetDessert>
        </>
    )
}