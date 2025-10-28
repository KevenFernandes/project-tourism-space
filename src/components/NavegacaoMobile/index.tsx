"use client";

import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";

type NavegacaoMobileProps = {
  close: React.Dispatch<SetStateAction<boolean>>;
};

export function NavegacaoMobile({ close }: NavegacaoMobileProps) {
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);

  const itemListClass = clsx(
    "tracking-[2px] text-nowrap",
    "uppercase w-full inline-block",
    "border-r-3",
    "hover:border-[#fff]",
    "duration-200"
  );

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <>
      <div className="py-8 flex justify-end">
        <button
          onClick={() => close((prev) => !prev)}
          className="mr-8 cursor-pointer"
        >
          <Image
            src="/assets/shared/icon-close.svg"
            width={24}
            height={21}
            alt="icon fechamento de menu"
          />
        </button>
      </div>
      <nav>
        <ul className="flex flex-col gap-8">
          <li className="flex gap-3">
            <a
              href={"/"}
              className={clsx(
                itemListClass,
                path === "/" ? "border-[#fff]" : "border-transparent"
              )}
            >
              <span className="font-bold tracking-[2.7px]">00</span> home
            </a>
          </li>
          <li>
            <a
              href={"/destination"}
              className={clsx(
                itemListClass,
                path === "/destination" ? "border-[#fff]" : "border-transparent"
              )}
            >
              <span className="font-bold tracking-[2.7px]">01</span> destination
            </a>
          </li>
          <li>
            <a
              href={"/crew"}
              className={clsx(
                itemListClass,
                path === "/crew" ? "border-[#fff]" : "border-transparent"
              )}
            >
              <span className="font-bold tracking-[2.7px]">02</span> crew
            </a>
          </li>
          <li>
            <a
              href={"/technology"}
              className={clsx(
                itemListClass,
                path === "/technology" ? "border-[#fff]" : "border-transparent"
              )}
            >
              <span className="font-bold tracking-[2.7px]">03</span> technology
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
