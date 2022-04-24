// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
    | {
          data: any[];
          paginations: any;
      }
    | { message: string };



export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== "GET") return res.status(404).json({ message: "Method not allowed" });
    
}
