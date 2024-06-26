import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from 'axios';
import Spinner from "../Spinner";

const PrivateAdmin = () => {
    const [ok, setOk] = useState(false)
    const [auth] = useAuth();

    useEffect(() => {
        const authCheck = async() => {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/admin-auth`);
            if(res.data.ok) {
                setOk(true);
            } else {
                setOk(false)
            }
        };
        if(auth?.token && auth?.user?.role === 1) authCheck();
    }, [auth?.token, auth?.user?.role]);


    return ok ? <Outlet /> : <Spinner path=''/>
}

export default PrivateAdmin;