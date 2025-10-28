import { CrewContent } from "@/components/CrewContent/indext";
import { getData } from "@/lib/query";
import { CrewTypes } from "@/models/crew.types";

export default async function Crew() {
  const { crew }: { crew: CrewTypes[] } = await getData();

  if (!crew) {
    throw new Error("Falha ao carregar a lista da equipe.");
  }

  return (
    <>
      <CrewContent crew={crew} />
    </>
  );
}
