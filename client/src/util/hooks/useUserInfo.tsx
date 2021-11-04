import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

export const useUserInfo = () => {
    const [userInfoData,setUserInfo] = useState(null);

    const { userInfo } = useSelector((state:any) => state.auth);

    useEffect(() => {
        function handleUserInfo(){
            setUserInfo(userInfo);
        }

        handleUserInfo();
        return () => {

        }
    },[userInfo]);

    return userInfoData;
}; 