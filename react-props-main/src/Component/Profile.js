import React from 'react';
import ProfilePhoto from './Profile/ProfilPhoto';
import { Card, CardDeck } from 'react-bootstrap';
import FullName from './Profile/FullName';
import Adresse from './Profile/Adresse';

const profile = {
    image: "./res/IMG_20190401_204533_448.jpg",
    name: "Chayma",
    lastName: "Jday",
    Adresse: {
        city: "Tunis",
        cp: "1001"
    }
};

const Profile = () => {
    return (
        <CardDeck style={{ width: '20rem' }}>

            <Card className="text-center bg-dark text-white" >
                <ProfilePhoto obj={profile} />
                <Card.Body>
                    <FullName obj={profile} />
                    <Adresse obj={profile} />
                </Card.Body>
            </Card>
        </CardDeck>

    )
}

export default Profile;