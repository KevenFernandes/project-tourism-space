"use client";

import Image from "next/image";
import Link from "next/link";
import { Navegacao } from "../Navegacao";
import { NavegacaoMobile } from "../NavegacaoMobile";
import { useState } from "react";
import clsx from "clsx";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={clsx(
        "h-22 py-6",
        "flex items-center absolute",
        "w-full top-0 right-0 z-50",
        "text-[#fff] text-[16px]",
        "font-barlow-condensed tracking-[2px]",
        "md:h-24 md:py-0",
        "lg:h-34 lg:pt-10"
      )}
    >
      <div className="flex justify-between items-center w-full relative">
        <div
          className={clsx(
            "w-full flex items-center pl-6",
            "md:w-40 md:pl-0 md:justify-center",
            "lg:w-full lg:justify-normal lg:ml-16"
          )}
        >
          <Link href="/" className="flex md:min-w-32 justify-center">
            <Image
              src="/assets/shared/logo.svg"
              width={40}
              height={40}
              alt="logotipo"
              className="min-w-10 md:min-w-12"
            />
          </Link>
          <div className="relative w-full hidden lg:block">
            <div className="h-[1px] w-full left-6 bg-[#696969] absolute z-10"></div>
          </div>
        </div>
        <div
          className={clsx(
            "md:hidden pr-6 flex items-center justify-center",
            showMenu && "hidden"
          )}
        >
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            type="button"
            className="cursor-pointer"
          >
            <Image
              src="/assets/shared/icon-hamburger.svg"
              width={24}
              height={21}
              alt="Icone do menu"
              aria-label="hamburger-menu"
            />
          </button>
        </div>
        <div
          className={clsx(
            "pr-6 pl-8 h-24 w-full",
            "items-center justify-end",
            "bg-white/10 backdrop-blur-xl",
            "hidden shrink",
            "md:flex"
          )}
        >
          <Navegacao />
        </div>
      </div>

      <div
        className={clsx(
          "bg-black/5 backdrop-blur-xl",
          "absolute top-0 h-screen Z-50",
          "w-[254px] pl-8 flex flex-col",
          "gap-12 md:hidden",
          showMenu && "right-0 transition-all duration-200",
          !showMenu && "-right-[100%] transition-all duration-200"
        )}
      >
        <NavegacaoMobile close={setShowMenu} />
      </div>
    </header>
  );
}
