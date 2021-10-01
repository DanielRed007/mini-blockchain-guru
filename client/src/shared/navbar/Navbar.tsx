import React from 'react';
import { Container, Header, Button, Segment } from 'semantic-ui-react';

const Navbar: React.FC = (props:any) => {
    return (
        <div style={{ backgroundColor: "black", padding: "1rem 3rem" }}>
            <Container style={{display: "flex"}} fluid>
                <h1 style={{color: "white", paddingRight: "3rem", paddingTop: "0.5rem"}}>BlockChain Guru</h1>

                <Button inverted color='orange'>
                    Orange
                </Button>

                <Button inverted color='orange'>
                    Orange
                </Button>
            </Container>
        </div>
    )
}

export default Navbar;