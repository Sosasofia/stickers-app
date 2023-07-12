import fetch from "node-fetch";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const apiKey = process.env["API_KEY"];
const baseUrl = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&rating=G&lang=en`;

export default async function getStickers(
  req: VercelRequest,
  res: VercelResponse
) {
  const { q, limit, offset } = req.query;
  const url = `${baseUrl}&q=${q}&limit=${limit}&offset=${offset}`;
  const { data } = await fetch(url).then((res) => res.json());
  return res.status(200).json(data);
}
