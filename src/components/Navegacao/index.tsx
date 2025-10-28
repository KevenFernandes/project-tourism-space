"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navegacao() {
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);

  const linkListClass = clsx(
    "tracking-[2px] text-nowrap",
    "uppercase h-full flex",
    "items-center ",
    "gap-3",
    "duration-200",
    "hover:border-[#fff] border-b-3"
  );

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <nav className="px-16 h-full flex items-center flex-1 text-[#fff]">
      <ul className="flex gap-12 h-full items-center">
        <li className="flex h-full items-center">
          <a
            href={"/"}
            className={clsx(
              linkListClass,
              path === "/" ? "border-[#fff]" : "border-transparent"
            )}
          >
            <span
              className={clsx(
                "font-bold tracking-[2.7px]",
                "md:hidden",
                "lg:block"
              )}
            >
              00
            </span>{" "}
            home
          </a>
        </li>
        <li className="flex h-full items-center">
          <a
            href={"/destination"}
            className={clsx(
              linkListClass,
              path === "/destination" ? "border-[#fff]" : "border-transparent"
            )}
          >
            <span className="font-bold tracking-[2.7px]">01</span> destination
          </a>
        </li>
        <li className="flex h-full items-center">
          <a
            href={"/crew"}
            className={clsx(
              linkListClass,
              path === "/crew" ? "border-[#fff]" : "border-transparent"
            )}
          >
            <span className="font-bold tracking-[2.7px]">02</span> crew
          </a>
        </li>
        <li className="flex h-full items-center">
          <a
            href={"/technology"}
            className={clsx(
              linkListClass,
              path === "/technology" ? "border-[#fff]" : "border-transparent"
            )}
          >
            <span className="font-bold tracking-[2.7px]">03</span> technology
          </a>
        </li>
      </ul>
    </nav>
  );
}
