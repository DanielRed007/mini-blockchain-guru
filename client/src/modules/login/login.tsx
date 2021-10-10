import React from 'react';
import { Container, Input, Button, Form } from 'semantic-ui-react';

const Login = (props:any) => {
    
    const loginUser = () => {
        console.log("Here!")
    }

    return (
        <Container style={{ backgroundColor: "black" }} fluid>
            <div style={{ position: "relative",width: "20%", height: "100vh", margin: "0 auto"}}>  
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column" ,paddingTop: "12rem",color: "white"}}>
                    <h1>Login</h1>
                    {/* <form>
                        <Input style={{ marginTop: "1rem" }} placeholder='Username/Email' />
                        <Input style={{ marginTop: "1rem" }} placeholder='Password' />
                        <Button style={{ marginTop: "1rem" }} inverted color='orange' onClick={loginUser}>
                            Login
                        </Button> 
                    </form>  */}
                    <Form style={{color: "white"}}>
                        <Form.Field>
                            <label style={{color: "white"}}>Username</label>
                            <Input placeholder='Username/Email' />
                        </Form.Field>
                        <Form.Field>
                            <label style={{color: "white"}}>Password</label>
                            <Input placeholder='Password' />
                        </Form.Field>
                        <Form.Field>
                        {/* Todo: implement forgot password */}
                        </Form.Field>
                        <Button color="orange" type='submit' onClick={loginUser}>Login</Button>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default Login;