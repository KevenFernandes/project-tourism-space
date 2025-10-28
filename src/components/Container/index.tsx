import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div
      className={clsx(
        "pt-24 h-full",
        "overflow-x-hidden",
        "overflow-y-auto",
        "md:overflow-y-hidden",
        "lg:overflow-y-auto",
        "lg:pb-0 lg:pt-34"
      )}
    >
      {children}
    </div>
  );
}
