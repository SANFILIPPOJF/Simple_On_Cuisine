import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export function AffichageRecette(props) {
    const list = props.mealArray.map(meal =>{
        return(<div key={meal.idMeal} className="App">
            <Accordion>
                <Accordion.Header>
                    <Figure>
                        <Figure.Image
                            width={400}
                            height={400}
                            alt="image"
                            src={meal.strMealThumb}
                        />
                        <Figure.Caption>
                            <h2 className="titre" style={{ fontSize: "2rem", color: "teal" }}>{meal.strMeal}</h2>
                        </Figure.Caption>
                    </Figure>
                </Accordion.Header>
                <Accordion.Body>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item><h5>Category :</h5> {meal.strCategory}</ListGroup.Item>
                            <ListGroup.Item><h5>Area :</h5> {meal.strArea}</ListGroup.Item>
                            <ListGroup.Item><h5>ingredients :</h5>
                                {meal.strMeasure1} {meal.strIngredient1}<br />
                                {meal.strMeasure2} {meal.strIngredient2}<br />
                                {meal.strMeasure3} {meal.strIngredient3}<br />
                                {meal.strMeasure4} {meal.strIngredient4}<br />
                                {meal.strMeasure5} {meal.strIngredient5}<br />
                                {meal.strMeasure6} {meal.strIngredient6}<br />
                                {meal.strMeasure7} {meal.strIngredient7}<br />
                                {meal.strMeasure8} {meal.strIngredient8}<br />
                                {meal.strMeasure9} {meal.strIngredient9}<br />
                                {meal.strMeasure10} {meal.strIngredient10}<br />
                                {meal.strMeasure11} {meal.strIngredient11}<br />
                                {meal.strMeasure12} {meal.strIngredient12}<br />
                                {meal.strMeasure13} {meal.strIngredient13}<br />
                                {meal.strMeasure14} {meal.strIngredient14}<br />
                                {meal.strMeasure15} {meal.strIngredient15}<br />
                                {meal.strMeasure16} {meal.strIngredient16}<br />
                                {meal.strMeasure17} {meal.strIngredient17}<br />
                                {meal.strMeasure18} {meal.strIngredient18}<br />
                                {meal.strMeasure19} {meal.strIngredient19}<br />
                                {meal.strMeasure20} {meal.strIngredient20}<br />
                            </ListGroup.Item>
                            <ListGroup.Item><h5>Instructions :</h5>
                                {meal.strInstructions}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button href={meal.strYoutube} target="_blank" variant="danger" size="lg">
                                    YouTube Recipe
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button href={meal.strSource} target="_blank" variant="info" size="lg">
                                    Source
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off"/>
                                    <label className="btn btn-outline-success" htmlFor="btn-check-outlined">Favorite</label><br />
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Accordion.Body>
            </Accordion>
        </div>)}
    )
    return (
        <>{ list }</>
    );

}