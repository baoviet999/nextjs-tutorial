import { authApi } from "api-client/auth-api";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
    const login = async () => {
        await authApi.login({
            username: "baoviet",
            password: "123123",
        });
    };
    const logout = async () => {
        await authApi.logout();
    };
    const getProfile = async () => {
        await authApi.getProfile();
    };
    return (
        <div>
            <button onClick={login}>Login</button>
            <button onClick={getProfile}>Get profile</button>
            <button onClick={logout}> Log out</button>
        </div>
    );
};

export default LoginPage;
