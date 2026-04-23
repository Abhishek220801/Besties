import { useContext, useEffect } from "react"
import {Outlet, Navigate} from "react-router"
import HttpInterceptor from "../lib/HttpInterceptor.ts";
import Context from "../Context.tsx";

const AuthGuard = () => {

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
        return <h1>Loading...</h1>

    if(session === false)
        return <Navigate to="/login" />

  return <Outlet />
}

export default AuthGuard
