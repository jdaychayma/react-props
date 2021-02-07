import React from 'react';
import { Navbar } from 'react-bootstrap';


const NavBar = (props) => {
    return (
        <Navbar className="bg-dark">
            <Navbar.Brand className="text-white" href="#home">My Profile</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end ">
                <Navbar.Text className="text-white">
                    Signed in as: <a href="#login">{props.obj.name} {props.obj.lastName}</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;