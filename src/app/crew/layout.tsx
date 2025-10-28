import { Container } from "@/components/Container";
import clsx from "clsx";

type CrewLayoutProps = {
  children: React.ReactNode;
};

export default function CrewLayout({ children }: CrewLayoutProps) {
  const bgClasses = clsx(
    "bg-cover bg-center h-screen",
    "bg-[url('/assets/crew/background-crew-mobile.jpg')]",
    "md:bg-[url('/assets/crew/background-crew-tablet.jpg')]",
    "lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]"
  );

  return (
    <div className={bgClasses}>
      <Container>{children}</Container>
    </div>
  );
}
