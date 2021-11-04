import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'semantic-ui-react'
import { logoutUser } from "../../../state/actions/authActions";


const MainView: React.FC = () => {
    const history = useHistory(); 
    const dispatch = useDispatch();
    
    const { userInfo } = useSelector((state:any) => state.auth);

    useEffect(() => {},[]);

    const handleLogOutUser = () => {
        dispatch(logoutUser());
        history.push("/");
    };

    return (
        <div>
            { userInfo ? <h1>Hello {userInfo.name} !!</h1> : null }

            <Button onClick={handleLogOutUser} primary>Logout User</Button>
        </div>
    )
}

export default MainView;