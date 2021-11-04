import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Container, Input, Button, Form } from 'semantic-ui-react';
import { loginUser } from "../../state/actions/authActions";
import { useUserInfo } from "../../util/hooks/useUserInfo";

const Login: React.FC = (props:any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isAuth, userInfo, loading, error } = useSelector((state:any) => state.auth);

    useEffect(() => {
        checkUserStatus();
    },[]);

    const dispatch = useDispatch();
    const history = useHistory();

    
    // Custom hook for fetching user information
    // const userInfoData = useUserInfo();

    const checkUserStatus = () => {
        if(!isAuth){
            console.log("ReRoute!!!!");
        }
    };
    
    const loginHandler = (e: React.FormEvent<any>) => {
        e.preventDefault();
        dispatch(loginUser(email, password));

        if(isAuth){
            history.push("/dashboard", {userInfo});
        }
    }

    return (
        <Container style={{ backgroundColor: "black" }} fluid>
            <div style={{ position: "relative",width: "20%", height: "100vh", margin: "0 auto"}}>  
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column" ,paddingTop: "12rem",color: "white"}}>
                    <h1>Login</h1>
                    {loading && <h1 style={{color: "white"}}>Spinner</h1>}
                    {error && <h1 style={{color: "white"}}>{error}</h1>}
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