import { Container } from "@/components/Container";
import clsx from "clsx";

type TechnologyLayoutProps = {
  children: React.ReactNode;
};

export default function TechnologyLayout({ children }: TechnologyLayoutProps) {
  const bgClasses = clsx(
    "bg-cover bg-center h-screen w-screen",
    "bg-[url('/assets/technology/background-technology-mobile.jpg')]",
    "md:bg-[url('/assets/technology/background-technology-tablet.jpg')]",
    "lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]"
  );

  return (
    <div className={bgClasses}>
      <Container>{children}</Container>
    </div>
  );
}
