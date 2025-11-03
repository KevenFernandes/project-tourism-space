export async function getDataApi() {
  const vercelUrl = process.env.VERCEL_URL;

  const baseURL = vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000";
  console.log(baseURL);

  const res = await fetch(`${baseURL}/api/dados`);
  console.log(res);

  if (!res.ok) {
    throw new Error("Erro ao buscar dados");
  }

  return res.json();
}
