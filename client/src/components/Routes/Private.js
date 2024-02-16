import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from 'axios';
import Spinner from "../Spinner";

const PrivateRoute = () => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async() => {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`);
            if(res.data.ok) {
                setOk(true);
            } else {
                setOk(false)
            }
        };
        if(auth?.token && auth?.user?.role === 0) authCheck();
    }, [auth?.token, auth?.user?.role]);
    //eslint-disable-next-line
    setAuth

    return ok ? <Outlet /> : <Spinner />
}

export default PrivateRoute;