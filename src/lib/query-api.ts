import path from "path";
import fs from "fs/promises";

export async function getLocalData() {
  try {
    const jsonDirectory = path.join(process.cwd(), "src", "data");
    const filePath = path.join(jsonDirectory, "data.json");

    const data = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(data);
    return parsed;
  } catch (error) {
    console.error("Erro ao buscar os dados.", error);
    return [];
  }
}
