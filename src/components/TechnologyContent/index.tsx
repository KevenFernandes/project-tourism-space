"use client";
import { TechnologyTypes } from "@/models/technology.type";
import clsx from "clsx";
import { useState } from "react";
import { PageTitle } from "../PageTitle";

type TechnologyContentProps = {
  technologys: TechnologyTypes[];
};

export function TechnolodyContent({ technologys }: TechnologyContentProps) {
  const [option, setOption] = useState<number>(0);

  if (!technologys || technologys.length === 0) {
    <div className="text-center w-full font-bold">
      Falha ao carregar dados 😒.
    </div>;
  }

  function changeOption(idx: number) {
    setOption(idx);
  }

  const currentTechnologys = technologys[option];

  return (
    <div
      className={clsx(
        "h-full p-6 gap-6",
        "flex flex-col",
        "md:p-10",
        "lg:w-[1024px] lg:m-auto lg:px-6"
      )}
    >
      <PageTitle pageNum={3} description="Space launch 101" />
      <div
        className={clsx(
          "flex flex-col gap-8 h-full",
          "lg:flex-row-reverse lg:w-full",
          "lg:items-center lg:justify-end"
        )}
      >
        <div
          className={clsx(
            "flex justify-center items-end",
            "relative -mx-10 min-h-[260px]",
            "overflow-y-hidden",
            "lg:items-center lg:-mx-0 lg:flex-1",
            "lg:w-full lg:min-w-[608px] lg:h-[600px]"
          )}
        >
          <div
            className={clsx(
              "absolute w-full h-[258px]",
              "bg-cover bg-[center_70%]",
              "md:bg-center",
              "lg:h-full"
            )}
            style={{
              backgroundImage: `url(${currentTechnologys.images.webfile})`,
            }}
            role="img"
            aria-label={currentTechnologys.name}
          ></div>
        </div>
        <div
          className={clsx(
            "flex flex-col gap-10",
            "items-center h-full",
            "md:flex-1",
            "lg:flex-initial lg:flex-row",
            "lg:min-w-[635px] lg:w-full"
          )}
        >
          <div
            className={clsx(
              "flex justify-center gap-4 font-bellefair max-w-[512px]",
              "lg:flex-col lg:gap-8"
            )}
          >
            {technologys.map((_, idx) => {
              return (
                <button
                  className={clsx(
                    "w-10 h-10",
                    "flex items-center justify-center rounded-full",
                    "hover:bg-[#fff] hover:text-[#0B0D17]",
                    "border-[#fff]/25 border-[1px] text-lg",
                    "cursor-pointer transition-all duration-200",
                    option === idx
                      ? "bg-[#fff] text-[#0B0D17]"
                      : "bg-[#0B0D17] text-[#fff]",
                    "md:w-14 md:h-14 md:text-2xl",
                    "lg:w-20 lg:h-20 lg:text-[32px]"
                  )}
                  key={idx}
                  onClick={() => changeOption(idx)}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 max-w-[512px]">
            <div
              className={clsx(
                "flex flex-col text-center gap-4 font-bellefair",
                "lg:text-left"
              )}
            >
              <h2
                className={clsx(
                  "text-lg uppercase opacity-50",
                  "md:text-2xl",
                  "lg:text-[32px]"
                )}
              >
                The Terminology...
              </h2>
              <h1
                className={clsx(
                  "text-2xl uppercase",
                  "md:text-[40px]",
                  "lg:text-[56px]"
                )}
              >
                {currentTechnologys.name}
              </h1>
            </div>
            <div>
              <p
                className={clsx(
                  "font-barlow text-center",
                  "text-[#D0D6F9] text-[15px]/[180%]",
                  "md:text-base/[180%]",
                  "lg:text-lg/[180%] lg:text-left"
                )}
              >
                {currentTechnologys.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
