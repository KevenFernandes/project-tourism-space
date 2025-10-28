import { DestinationContent } from "@/components/DestinationContent";
import { getData } from "@/lib/query";
import { DestinationsTypes } from "@/models/destination.types";

export default async function Destination() {
  const { destinations }: { destinations: DestinationsTypes[] } =
    await getData();

  if (!destinations) {
    throw new Error("Falha ao carregar a lista de destinos.");
  }

  return (
    <>
      <DestinationContent destinations={destinations} />
    </>
  );
}
