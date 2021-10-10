import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const Navbar: React.FC = (props:any) => {

    const history = useHistory();

    const goToLogin = () => {
        history.push("/login");
    };

    const goToRegister = () => {
        history.push("/register");
    };

    return (
        <div style={{ backgroundColor: "black", padding: "1rem 3rem" }}>
            <Container style={{display: "flex", justifyContent: "space-between"}} fluid>
                <h1 style={{color: "white", paddingRight: "3rem", paddingTop: "0.5rem"}}>BlockChain Guru</h1>

                <div style={{paddingTop: "0.7rem"}}>
                    <Button inverted color='orange' onClick={goToLogin}>
                        Login
                    </Button>

                    <Button inverted color='orange' onClick={goToRegister}>
                        Register
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;