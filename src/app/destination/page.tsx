import { DestinationContent } from "@/components/DestinationContent";
import { getDataApi } from "@/lib/query-api";

export const dynamic = "force-dynamic";

export default async function Destination() {
  let destinations;

  try {
    const data = await getDataApi();
    destinations = data.destinations;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <DestinationContent destinations={destinations} />
    </>
  );
}
