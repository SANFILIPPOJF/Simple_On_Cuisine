import Accordion from 'react-bootstrap/Accordion';
import image from './images/poulet.jpeg'

export function Recette () {
    return(
        <Accordion className='' defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header><h2 className="titre" style={{ fontSize: "3rem", color: "teal" }}>Rosty Chicken</h2><br/><img src={image} alt="image" /></Accordion.Header>
                <Accordion.Body>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}