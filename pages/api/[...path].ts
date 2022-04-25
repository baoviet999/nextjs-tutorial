// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";
type Data = {
    [name: string]: any;
};

export const config = {
    api: {
        bodyParser: false,
    },
};

const proxy = httpProxy.createProxyServer();
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    return new Promise((resolve) => {
        // từ cookie thành header Authorization
        const cookie = new Cookies(req, res);
        const accessToken = cookie.get("access_token");
        if (accessToken) req.headers.authorization = `Bearer ${accessToken}`;

        // khi req lên server thì loại thằng cookie đi
        req.headers.cookie = "";
        // nếu đường dẫn gọi api khác thì config lại
        // req.url = req.url && req.url.replace(/^\/api/, "");

        proxy.web(req, res, {
            target: process.env.API_URL,
            // thay đổi đường dẫn (vd : URL/api/students)
            changeOrigin: true,
            // khi server response về thì trả trực tiếp về client mình k giải quyết
            selfHandleResponse: false,
        });
        // đợi khi nào có proxyRes trả vầ thì báo next js
        proxy.once("proxyRes", () => {
            resolve(true);
        });
        // res.json({ data });
    });
}
