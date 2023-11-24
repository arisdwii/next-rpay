"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { detectWidthWindow } from "./utils/DetectWindowWidth";
import { MenuSmallDevice } from "./layout/MenuSmallDevice";
import { MenuLargeDevice } from "./layout/MenuLargeDevice";
import { BtnToggleMode } from "./layout/BtnToggleMode";
import { BtnHamburger } from "./layout/BtnHamburger";
import { HeaderEffect } from "./utils/HeaderEffect";
import Logo from "/public/Logo RPay.png";

import { dataNavbar } from "@/data/dataNavbar";

export const Navbar = () => {
  const [windowWidth] = detectWidthWindow();
  const [headEffect] = HeaderEffect();
  const [visibleMenu, setVisibleMenu] = useState(false);

  useEffect(() => {
    if (visibleMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [visibleMenu]);

  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full px-1 flex items-center z-50 select-none transition-all ease-linear sm:px-2 ip:px-5 xl:px-4 ${
        headEffect
          ? "py-3 bg-putih2/90 sm:py-4 dark:bg-gelap2/90"
          : "py-4 bg-putih sm:py-5 dark:bg-gelap"
      }`}
    >
      <span
        className={`w-full h-[2px] bg-primary absolute bottom-0 left-0 transition-all ease-linear ${
          headEffect ? "translate-x-0" : "-translate-x-full"
        }`}
      ></span>

      <div className="flex items-center justify-between w-full mx-auto xl:max-w-screen-xl">
        {/* ---------- Hamburger Menu ---------- */}
        {windowWidth < 1015 ? <BtnHamburger toggleMenu={toggleMenu} /> : ""}

        {/* ---------- Logo ---------- */}
        <Link href="/">
          <Image
            src={Logo}
            placeholder="blur"
            width={1000}
            height={1000}
            draggable="false"
            priority={true}
            alt="Logo RPay Voucher"
            className="mx-auto w-16 sm:w-20"
          />
        </Link>

        {/* ---------- Menu ---------- */}
        {windowWidth < 1015 ? (
          <MenuSmallDevice
            visibleMenu={visibleMenu}
            toggleMenu={toggleMenu}
            dataNavbar={dataNavbar}
          />
        ) : (
          <MenuLargeDevice dataNavbar={dataNavbar} />
        )}

        {/* ---------- Toggle Color Mode ---------- */}
        <BtnToggleMode />
      </div>
    </header>
  );
};
