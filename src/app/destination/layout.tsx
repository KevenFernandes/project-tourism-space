import { Container } from "@/components/Container";
import clsx from "clsx";

type DestinationLayoutProps = {
  children: React.ReactNode;
};

export default function DestinationLayout({
  children,
}: DestinationLayoutProps) {
  const bgClasses = clsx(
    "bg-cover bg-center h-screen w-screen",
    "bg-[url('/assets/destination/background-destination-mobile.jpg')]",
    "md:bg-[url('/assets/destination/background-destination-tablet.jpg')]",
    "lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]"
  );

  return (
    <div className={bgClasses}>
      <Container>{children}</Container>
    </div>
  );
}
