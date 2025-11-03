import { TechnolodyContent } from "@/components/TechnologyContent";
import { getDataApi } from "@/lib/query-api";

export const dynamic = "force-dynamic";

export default async function Technology() {
  let technology;

  try {
    const data = await getDataApi();
    technology = data.technology;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <TechnolodyContent technologys={technology} />
    </>
  );
}
