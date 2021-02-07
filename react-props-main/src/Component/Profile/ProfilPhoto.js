import React from 'react';
import { Card } from 'react-bootstrap';


const ProfilePhoto = (props) => {
    return (
        <Card.Img style={{ height: "25rem" }} variant="top" src={props.obj.image} />
    )
}
export default ProfilePhoto;