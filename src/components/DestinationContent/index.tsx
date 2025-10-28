"use client";
import { DestinationsTypes } from "@/models/destination.types";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PageTitle } from "../PageTitle";

type DestinationContentProps = {
  destinations: DestinationsTypes[];
};

export function DestinationContent({ destinations }: DestinationContentProps) {
  const [options, setOptions] = useState(0);
  const [planets, setPlanets] = useState(destinations);

  useEffect(() => {
    setPlanets(destinations);
  }, [destinations]);

  function changeOptions(option: number) {
    setOptions(option);
  }

  const statisticTitle = clsx(
    "font-barlow-condensed text-sm tracking-[2px] text-[#D0D6F9] uppercase"
  );

  const statisticDescription = clsx(
    "font-bellefair text-[28px] text-[#fff] uppercase"
  );

  return (
    <div
      className={clsx(
        "h-full flex flex-col",
        "p-6 gap-6",
        "md:p-10",
        "lg:w-[1024px] lg:m-auto lg:px-6"
      )}
    >
      <PageTitle pageNum={1} description="Pick your destination" />
      <div
        className={clsx(
          "flex flex-col flex-1 gap-8 w-full",
          "justify-center items-center",
          "lg:flex-row"
        )}
      >
        {/* Image  */}
        <div className="h-full w-full flex items-center justify-center">
          <div
            className={clsx(
              "relative w-[150px] h-[150px]",
              "md:h-[300px] md:w-[300px]",
              "lg:w-[450px] lg:h-[450px]"
            )}
          >
            <Image
              src={`${planets[options].images.png}`}
              alt={`${planets[options].name}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full flex-1 flex justify-center">
          <div
            className={clsx(
              "flex flex-col items-center",
              "gap-6 mb-6",
              "md:w-[514px]",
              "lg:items-start lg:w-[445px]"
            )}
          >
            <div>
              <nav>
                <ul className="flex gap-8 items-start">
                  {planets.map((planet, idx) => {
                    return (
                      <li key={idx}>
                        <button
                          onClick={() => changeOptions(idx)}
                          className={clsx(
                            "text-sm uppercase font-barlow-condensed",
                            "tracking-[0.15rem] cursor-pointer",
                            "h-8 flex border-b-[3px]",
                            "hover:border-b-[#fff] transition-all duration-200",
                            options === idx
                              ? "border-b-[#fff]"
                              : "border-b-transparent",
                            "md:text-base",
                            "lg:tracking-[2px]"
                          )}
                        >
                          {planet.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h1
                className={clsx(
                  "font-bellefair text-[56px] uppercase leading-none",
                  "md:text-[80px]",
                  "lg:text-[96px]"
                )}
              >
                {planets[options].name}
              </h1>
              <p
                className={clsx(
                  "font-barlow text-[15px]/[180%] text-[#D0D6F9]",
                  "md:text-base/[180%]",
                  "lg:text-lg/[180%]"
                )}
              >
                {planets[options].description}
              </p>
            </div>
            <div className="h-[1px] w-full bg-[#979797]/25"></div>
            <div
              className={clsx(
                "w-full flex flex-col gap-6 text-center",
                "md:flex-row",
                "lg:text-left"
              )}
            >
              <div className="flex flex-col gap-3 w-full">
                <h3 className={statisticTitle}>Avg. Distance</h3>
                <span className={statisticDescription}>
                  {planets[options].distance}
                </span>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <h3 className={statisticTitle}>Est. travel time</h3>
                <span className={statisticDescription}>
                  {planets[options].travel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
