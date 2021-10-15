import React from 'react';
import { Container, Input, Button, Form } from 'semantic-ui-react';

const Register = (props:any) => {
    return (
        <Container style={{ backgroundColor: "black" }} fluid>
            <div style={{ position: "relative",width: "20%", height: "100vh", margin: "0 auto"}}>  
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column" ,paddingTop: "12rem",color: "white"}}>
                    <h1>Login</h1>
                    <Form style={{color: "white"}}>
                        <Form.Field>
                            <label>First Name</label>
                            <Input placeholder='Username/Email' />
                        </Form.Field>
                        <Form.Field>
                        <label>Last Name</label>
                            <Input placeholder='Password' />
                        </Form.Field>
                        <Form.Field>
                        {/* Todo: implement forgot password */}
                        </Form.Field>
                        <Button color="orange" type='submit'> Register </Button>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default Register;