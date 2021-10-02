import React from 'react';
import { Grid } from 'semantic-ui-react';

export const HomeHeader: React.FC = (props:any) => {
    return (
        <div style={{backgroundColor: "black" ,display: 'flex',justifyContent: "center", alignItems: "center" ,width: "100%" , height: "600px"}}>
            <Grid>
                <Grid.Column style={{textAlign: "center", lineHeight: "0.1"}}>
                    <h1 style={{fontSize: "48px",color:'white', lineHeight: "0.9"}}>BlockChain & Cryptocurrency</h1>
                    <h4 style={{fontSize: "24px",color:'white', lineHeight: "0.9"}}>Live Markets</h4>
                    <h4 style={{fontSize: "24px",color:'white', lineHeight: "0.9"}}>Live Info</h4>
                </Grid.Column>
            </Grid>            
        </div>
    );
};