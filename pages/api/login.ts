import httpProxy, { ProxyResCallback } from "http-proxy";
import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

interface Data {
    message: string;
}

const proxy = httpProxy.createProxyServer();

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    return new Promise((resolve, reject) => {
        req.headers.cookie = "";

        const handleLoginRes: ProxyResCallback = (proxyRes, req, res) => {
            let body = "";
            // khi  đang stream data từ api server về
            proxyRes.once("data", (data) => {
                return (body += data);
            });
            // khi đã có dữ liệu từ api trả về
            proxyRes.once("end", () => {
                try {
                    const { accessToken, expiredAt }  = JSON.parse(body);
                    const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== "development" });
                    cookies.set("access_token", accessToken, {
                        httpOnly: true,
                        sameSite: "lax",
                        expires: new Date(expiredAt),
                    });
                    (res as NextApiResponse).json({ message: "Login successs!!!" });
                } catch (error) {
                    (res as NextApiResponse).status(500).json({ message: "some thing went wrong" });
                }
                resolve(true);
            });
        };
        // bắt sự kiện khi mà proxy có res trả về
        // on là apply cho tất cả req của proxy , once là aplly cho 1 req thôi
        proxy.once("proxyRes", handleLoginRes);
  
        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true,
        });
    });
}
