import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, Input, Button, Form } from 'semantic-ui-react';
import { loginUser } from "../../state/actions/authActions";

const Login = (props:any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const auth = useSelector((state:any) => state.auth);
    
    const loginHandler = (e: React.FormEvent<any>) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    }

    return (
        <Container style={{ backgroundColor: "black" }} fluid>
            <div style={{ position: "relative",width: "20%", height: "100vh", margin: "0 auto"}}>  
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column" ,paddingTop: "12rem",color: "white"}}>
                    <h1>Login</h1>
                    <Form style={{color: "white"}}>
                        <Form.Field>
                            <label style={{color: "white"}}>Username</label>
                            <Input 
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </Form.Field>
                        <Form.Field>
                            <label style={{color: "white"}}>Password</label>
                            <Input 
                                type="password" 
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </Form.Field>
                        <Form.Field>
                        {/* Todo: implement forgot password */}
                        </Form.Field>
                        <Button color="orange" type='submit' onClick={loginHandler}>Login</Button>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default Login;