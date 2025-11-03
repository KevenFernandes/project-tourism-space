export async function getDataApi() {
  const vercelUrl = process.env.VERCEL_URL;

  const baseURL = vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000";

  const res = await fetch(`${baseURL}/api/dados`);

  if (!res.ok) {
    throw new Error("Erro ao buscar dados");
  }

  return res.json();
}
