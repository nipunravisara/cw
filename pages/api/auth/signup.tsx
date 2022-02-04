import axios from "axios";

export default async function signup(req: any, res: any) {
  const payload = req.body;
  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/signup`;

  const response = await axios.post(endpoint, payload);

  console.log(111, response);

  res.send(200);
}
