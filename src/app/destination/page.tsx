import { DestinationContent } from "@/components/DestinationContent";
import { getLocalData } from "@/lib/query-api";

export default async function Destination() {
  let destinations;

  try {
    const data = await getLocalData();
    destinations = data.destinations;
  } catch (error) {
    console.error("Erro ao carregar os destinos", error);
  }

  return (
    <>
      <DestinationContent destinations={destinations} />
    </>
  );
}
