import clsx from "clsx";

type PageTitleProps = {
  pageNum: number;
  description: string;
};
export function PageTitle({ pageNum, description }: PageTitleProps) {
  return (
    <div
      className={clsx(
        "flex gap-6 w-full justify-center tracking-[0.15rem]",
        "md:justify-start md:text-xl lg:text-[28px]"
      )}
    >
      <span className="text-[#fff]/30 font-barlow-condensed font-bold lg:tracking-[4.72px]">
        {pageNum < 9 ? `0${pageNum}` : pageNum}
      </span>
      <h2 className="uppercase font-barlow lg:tracking-[4px]">{description}</h2>
    </div>
  );
}
