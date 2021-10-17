import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";

const MainView: React.FC = () => {
    const location = useLocation(); 
    
    useEffect(() => {
        console.log(location)
    },[])

    return (
        <div>
            Hello User!
        </div>
    )
}

export default MainView;