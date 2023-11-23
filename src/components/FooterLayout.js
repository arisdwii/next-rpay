import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { dataNavbar } from "@/data/dataNavbar";
import Logo from "/public/Logo RPay Black.png";

export const FooterLayout = () => {
  const sosmed = [
    {
      id: 1,
      name: "Instagram",
      icon: "bi:instagram",
      url: "https://www.instagram.com",
    },
    {
      id: 2,
      name: "Tiktok",
      icon: "ic:baseline-tiktok",
      url: "https://www.tiktok.com",
    },
  ];

  return (
    <footer className="relative bg-primary text-gelap select-none overflow-hidden">
      {/* ---------- Wave Background ---------- */}
      <span className="w-full h-full">
        <svg viewBox="0 0 360 36" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.25"
            d="M0 0V13.887C14.337 20.547 31.077 23.538 47.4 22.287C68.508 20.676 88.299 12.294 109.44 11.037C131.592 9.729 153.702 16.101 174.9 21.615C195.681 27.015 216.39 29.079 237.72 25.539C248.565 23.739 258.675 20.187 269.055 16.737C296.847 7.5 333.9 -4.287 360 15.741V0H0Z"
            className="transition-all ease-linear duration-300 fill-putih dark:fill-gelap"
          />
          <path
            opacity="0.5"
            d="M0 0V4.743C3.9 11.076 8.292 17.058 14.307 21.615C29.823 33.381 49.5 33.3 67.374 27.474C76.719 24.429 85.401 19.653 94.275 15.534C106.551 9.834 119.694 1.734 133.524 0.633C144.402 -0.222 154.794 3.459 163.104 10.101C172.635 17.718 181.8 28.701 194.193 32.001C206.325 35.238 218.598 29.994 229.932 24.717C241.266 19.44 252.48 13.017 265.008 11.802C282.927 10.047 298.992 18.666 315.678 23.454C324.738 26.052 333.378 25.305 341.805 21.204C348.534 17.937 356.205 13.125 360 6.432V0H0Z"
            className="transition-all ease-linear duration-300 fill-putih dark:fill-gelap"
          />
          <path
            d="M0 0V1.689C44.979 17.7 94.227 21.396 142.749 12.771C155.649 10.479 168.018 6.735 181.032 4.833C198.732 2.244 214.776 8.505 230.7 15.453C248.379 23.166 265.8 28.572 285.36 27C311.319 24.9 337.098 13.287 360 1.557V0H0Z"
            className="transition-all ease-linear duration-300 fill-putih dark:fill-gelap"
          />
        </svg>
      </span>

      <div className="px-2 pt-10 pb-5 grid grid-cols-2 gap-6 sm:px-4 sm:gap-8 ip:px-5 lg:grid-cols-3 lg:gap-0 lg:pt-20 xl:px-4 xl:max-w-screen-xl xl:mx-auto">
        {/* ---------- Profile ---------- */}
        <div className="col-span-2 lg:col-span-1 lg:w-full">
          <Image
            src={Logo}
            alt="Logo RPay Voucher"
            className="mb-3 w-16 sm:w-20"
            draggable="false"
            priority={true}
            width={1000}
            height={1000}
          />
          <p className="text-xs text-justify sm:text-base">
            <span className="font-bold">RPAY VOUCHER</span> Merupakan Tempat Top
            Up Games & Voucher Resmi Terlengkap, Termurah, dan Tercepat di
            Indonesia. Item / Voucher Dikirim Instan, Proses Otomatis Membuat
            Jutaan Gamers Betah Top Up Disini.
          </p>
        </div>

        {/* ---------- Menu ---------- */}
        <div className="lg:place-self-end lg:w-[60%] lg:h-full">
          <p className="font-bold text-base sm:text-xl">Menu</p>
          <div className="-mx-1 flex flex-col justify-start gap-1 mt-1 sm:gap-2 xl:mt-2">
            {dataNavbar.map(({ id, name, url }) => (
              <Link
                key={id}
                href={url}
                className="flex justify-start items-center text-xs rounded-md transition-all ease-linear hover:pl-2 sm:text-base"
              >
                <Icon icon="ic:round-navigate-next" />
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ---------- Follow Sosmend ---------- */}
        <div className="w-fit h-fit justify-self-end lg:justify-self-end xl:justify-self-center">
          <p className="font-bold text-base sm:text-xl">Ikuti Kami</p>
          <div className="w-full flex items-center justify-between">
            {sosmed.map(({ id, icon, url }) => (
              <Link
                key={id}
                href={url}
                className="flex items-center justify-center p-2 text-2xl rounded-full transition-all ease-linear hover:bg-black/20"
              >
                <Icon icon={icon} />
              </Link>
            ))}
          </div>
        </div>

        {/* ---------- Created ---------- */}
        <div className="col-span-2 flex flex-col justify-center gap-2 mt-4 lg:col-span-3 lg:mt-14">
          <span className="w-full h-[2px] bg-gelap rounded-full"></span>
          <p className="text-center text-black/80 text-xs sm:text-sm xl:text-base">
            Create by{" "}
            <Link href="/" className="underline font-medium hover:no-underline">
              RPay Voucher
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
