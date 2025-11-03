import { CrewContent } from "@/components/CrewContent/indext";
import { getLocalData } from "@/lib/query-api";

export default async function Crew() {
  let crew;

  try {
    const data = await getLocalData();
    crew = data.crew;
  } catch (error) {
    console.error("Error ao carregar as equipes", error);
  }

  return (
    <>
      {" "}
      <CrewContent crew={crew} />{" "}
    </>
  );
}
