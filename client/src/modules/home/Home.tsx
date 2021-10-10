import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from "../../shared/navbar/Navbar";
import { HomeHeader } from "./views/HomeHeader";
import { GoalsHeader } from "./views/GoalsHeader";

const Home: React.FC = (props:any) => {
    return (
        <>
            <Container style={{backgroundColor: "black"}} fluid>
                <div style={{ width: "70%", margin: "0 auto"}}>  
                    <Navbar />             
                    <HomeHeader />
                </div>
            </Container>
            <Container style={{}} fluid>
                <div style={{ width: "70%", margin: "0 auto"}}>  
                    <GoalsHeader />
                </div>
            </Container>
            <Container style={{}} fluid>
                <div style={{ width: "70%", margin: "0 auto"}}>  
                    {/* Here we put the graphics later... */}
                </div>
            </Container>
        </>
    );
};

export default Home;

