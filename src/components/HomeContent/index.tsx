"use client";

import clsx from "clsx";
import { Container } from "../Container";
import { redirect } from "next/navigation";

export function HomeContent() {
  const bgClasses = clsx(
    "bg-cover bg-center h-screen w-screen",
    "bg-[url('/assets/home/background-home-mobile.jpg')]",
    "md:bg-[url('/assets/home/background-home-tablet.jpg')]",
    "lg:bg-[url('/assets/home/background-home-desktop.jpg')]"
  );

  function changePage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    redirect("/destination");
  }

  return (
    <div className={clsx(bgClasses)}>
      <Container>
        <div
          className={clsx(
            "h-full w-full flex",
            "gap-6 p-6 flex-col",
            "items-center justify-center",
            "md:gap-12 md:py-90",
            "lg:flex-row lg:mx-auto lg:items-end",
            "lg:gap-0 lg:px-6 lg:w-[1024px]"
          )}
        >
          <div
            className={clsx(
              "flex flex-col gap-6",
              "w-full text-center",
              "md:gap-0 md:w-lg",
              "lg:items-start flex-1"
            )}
          >
            <h2
              className={clsx(
                "font-barlow-condensed tracking-[0.15em]",
                "text-base uppercase text-[#D0D6F9]",
                "md:text-[28px] md:tracking-[4px]"
              )}
            >
              so, you want to travel to
            </h2>
            <h1
              className={clsx(
                "font-bellefair text-[80px] uppercase",
                "md:text-[144px]"
              )}
            >
              space
            </h1>
            <p
              className={clsx(
                "font-barlow text-[15px]/[180%]",
                "text-[#D0D6F9]",
                "md:text-base/[180%]",
                "lg:text-left"
              )}
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <button
              onClick={(e) => changePage(e)}
              className={clsx(
                "w-36 h-36 rounded-full cursor-pointer",
                "bg-[#fff] text-[#0B0D17]",
                "uppercase font-bellefair text-lg",
                "hover:ring-[88px] ring-[#fff]/10",
                "ring-0 md:text-[32px] hover:text-[#0B0D17]/60",
                "transition-all duration-200",
                "md:w-68 md:h-68"
              )}
            >
              Explore
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
