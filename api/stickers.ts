import fetch from "node-fetch";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const apiKey = process.env["API_KEY"];
const baseUrl = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&limit=16&offset=0&rating=G&lang=en`;

export default async function getStickers(
  req: VercelRequest,
  res: VercelResponse
) {
  const url = `${baseUrl}&q=${req.query["q"]}}`;
  const { data } = await fetch(url).then((res) => res.json());
  return res.status(200).json(data);
}
