import React from 'react';
import { Card } from 'react-bootstrap';

const FullName = (props) => {
    return (
        <Card.Title >{props.obj.name} {props.obj.lastName}</Card.Title>
    )
}

export default FullName;