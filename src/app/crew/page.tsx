import { CrewContent } from "@/components/CrewContent/indext";
import { getDataApi } from "@/lib/query-api";

export const dynamic = "force-dynamic";

export default async function Crew() {
  let crew;

  try {
    const data = await getDataApi();
    crew = data.crew;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      {" "}
      <CrewContent crew={crew} />{" "}
    </>
  );
}
