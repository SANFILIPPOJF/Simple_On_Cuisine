import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export function BarreDeRecherche() {
    return (
        <InputGroup>
            <InputGroup.Text id="btnGroupAddon">Search</InputGroup.Text>
            <Form.Control
                type="text"
                placeholder="Name the meal"
                aria-label="Input group"
                aria-describedby="btnGroupAddon"
            />
        </InputGroup>
    )
}