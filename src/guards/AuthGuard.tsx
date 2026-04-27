import { useContext, useEffect } from "react"
import {Outlet, Navigate} from "react-router"
import HttpInterceptor from "../lib/HttpInterceptor.ts";
import Context from "../Context.tsx";
import { Skeleton } from "antd";

const AuthGuard = () => {
    return <Outlet/>

    const {session, setSession} = useContext(Context);

    useEffect(() => {
        getSession();
    }, [])

    const getSession = async () => {
        try {
            const {data} = await HttpInterceptor.get("/auth/session");
            setSession(data);
        } catch (err) {
            setSession(false);
        }
    }

    if(session === null)
        return <Skeleton active/>

    if(session === false)
        return <Navigate to="/login" />

  return <Outlet />
}

export default AuthGuard
