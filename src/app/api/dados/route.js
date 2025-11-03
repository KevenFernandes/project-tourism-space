import path from "path";
import fs from "fs/promises";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const jsonDirectory = path.resolve(process.cwd(), "src", "data");
    const filePath = path.join(jsonDirectory, "data.json");

    const jsonData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(jsonData);

    return NextResponse.json(parsedData, { status: 200 });
  } catch (error) {
    console.error("Não foi possível ler o arquivo json", error);

    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
