"use client";
import { CrewTypes } from "@/models/crew.types";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PageTitle } from "../PageTitle";

type CrewContentProps = {
  crew: CrewTypes[];
};

export function CrewContent({ crew }: CrewContentProps) {
  const [persons, setPersons] = useState(crew);
  const [option, setOption] = useState(0);

  useEffect(() => {
    setPersons(crew);
  }, [crew]);

  function changeOptions(idx: number) {
    setOption(idx);
  }

  return (
    <div
      className={clsx(
        "h-full p-6 flex flex-col gap-6",
        "md:p-10",
        "lg:px-6 lg:w-[1024px] lg:m-auto"
      )}
    >
      <PageTitle pageNum={2} description="Meet your crew" />
      <div
        className={clsx(
          "flex flex-col gap-8 text-center h-svw",
          "lg:flex-row lg:text-left flex-1"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-6 h-full",
            "md:gap-10 md:w-[512px] md:mx-auto md:pt-8",
            "lg:min-w-[539px]"
          )}
        >
          <div className="flex flex-col gap-6 flex-1 justify-center">
            <div className="flex flex-col gap-2 font-bellefair uppercase">
              <h2
                className={clsx(
                  "text-lg opacity-50",
                  "md:text-2xl",
                  "lg:text-[32px]"
                )}
              >
                {crew[option].role}
              </h2>
              <h1 className={"text-2xl md:text-[40px] lg:text-[56px]"}>
                {crew[option].name}
              </h1>
            </div>
            <div>
              <p
                className={clsx(
                  "text-[#D0D6F9] text-[15px]/[180%]",
                  "flex-1 font-barlow ",
                  "md:text-base/[180%] md:h-[117px]",
                  "lg:text-lg/[180%]"
                )}
              >
                {crew[option].bio}
              </p>
            </div>
          </div>
          <div
            className={clsx(
              "flex gap-4 justify-center",
              "lg:mb-12 lg:justify-start lg:gap-10"
            )}
          >
            {persons.map((_, idx) => {
              return (
                <button
                  onClick={() => changeOptions(idx)}
                  type="button"
                  key={idx}
                  className={clsx(
                    "w-[10px] rounded-full bg-[#fff] cursor-pointer",
                    "transition-all duration-200",
                    option === idx ? "opacity-100" : "opacity-[17.44%]",
                    "lg:w-[15px] h-[10px] lg:h-[15px]"
                  )}
                ></button>
              );
            })}
          </div>
        </div>
        <div
          className={clsx(
            "h-full w-full flex items-center justify-center",
            "md:items-end min-h-[260px]"
          )}
        >
          <div
            className={clsx(
              "relative",
              "w-[271px] min-h-full",
              "md:w-[446px] md:max-h-[446px]"
              // "lg:w-[539px] lg:max-h-[676px]"
            )}
          >
            <Image
              src={crew[option].images.png}
              alt={crew[option].name}
              fill
              className="object-contain mask-b-from-77% mask-b-to-98%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
