import React from 'react';
import { Grid, Segment, Container, Header } from 'semantic-ui-react';

export const GoalsHeader: React.FC = (props:any) => {
    return (
        <Grid columns='equal' style={{ height: "300px" }}>
            <Grid.Column>
                <Segment style={{margin: "2rem", padding: "2.5rem"}}>
                    <h1>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </h1>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </h3>
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment style={{fontSize: "20px", lineHeight: "1.9" ,margin: "2rem", padding: "2.5rem"}}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                </Segment>
            </Grid.Column>
            
            {/* <Grid.Column>
            <Segment>3</Segment>
            </Grid.Column> */}
        </Grid> 
    );
};