import React from 'react';
import { Card } from 'react-bootstrap';

const Adresse = (props) => {
    return (
        <Card.Text>
            {props.obj.Adresse.city} - {props.obj.Adresse.cp}
        </Card.Text>
    )
}

export default Adresse;