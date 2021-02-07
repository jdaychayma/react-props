import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import PropTypes from "prop-types";



const Profile = (props) => {
    return (
        <Card style={{ width: '26rem', textAlign: 'center', margin: 30 }}>
            {props.children}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Bio</span> :{props.bio}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem style={{ fontWeight: 'bold' }}>Profession: {props.profession}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button onClick={() => props.handleName(props.name)}>See Profile</Button>
            </Card.Body>
        </Card >
    )
}
Profile.defaultProps = {
    name: "User Name",
    bio: "User Bio",
    profession: "User Profession"
};

Profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
};


export default Profile;