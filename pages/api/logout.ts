import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
type Data = {
    message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== "POST") return res.status(404).json({ message: "error" });
    const cookies = new Cookies(req, res);
    cookies.set("access_token");
    res.json({ message: "logout success" });
}
