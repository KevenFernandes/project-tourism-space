import fs from "fs/promises";
import path from "path";

export async function getData() {
  const filePath = path.join(process.cwd(), "src", "data", "data.json");
  try {
    const dataJson = await fs.readFile(filePath, "utf-8");
    const dataParsed = JSON.parse(dataJson);

    if (!dataParsed) {
      console.error("Não foi possível encontrar dados.");
    }

    return dataParsed;
  } catch (error) {
    console.error("Erro ao ler arquvio json", error);
  }
}
