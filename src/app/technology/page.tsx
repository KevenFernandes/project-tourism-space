import { TechnolodyContent } from "@/components/TechnologyContent";
import { getData } from "@/lib/query";
import { TechnologyTypes } from "@/models/technology.type";

export default async function Technology() {
  const { technology }: { technology: TechnologyTypes[] } = await getData();

  if (!technology) {
    throw new Error("Falha ao carregar a lista de tecnologias.");
  }

  return (
    <>
      <TechnolodyContent technologys={technology} />
    </>
  );
}
