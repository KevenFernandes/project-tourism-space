import { TechnolodyContent } from "@/components/TechnologyContent";
import { getLocalData } from "@/lib/query-api";

export default async function Technology() {
  let technology = [];

  try {
    const data = await getLocalData();
    technology = data.technology;
  } catch (error) {
    console.error("Erro ao carregar as tecnologias", error);
  }

  return (
    <>
      <TechnolodyContent technologys={technology} />
    </>
  );
}
