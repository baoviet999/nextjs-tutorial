import { Auth } from "models/auth";
import axiosClient from "./axios-client";

export const authApi = {
    login(payload: Auth) {
        return axiosClient.post("/login", payload);
    },
    logout() {
        return axiosClient.post("/logout");
    },
    getProfile() {
        return axiosClient.get("/profile");
    },
};
