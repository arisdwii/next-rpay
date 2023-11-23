"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Image from "next/image";

export const LeftSideBar = ({
  src,
  alt,
  titleProduct,
  productProcess,
  howtopup,
  descProduct,
}) => {
  const [slider, setSlider] = useState(0);
  return (
    <div className="lg:w-1/2 xl:w-1/3">
      <div className="flex flex-col gap-3 bg-putih2 shadow-s.08 px-2 py-4 rounded-md overflow-hidden animate-slideTop sm:px-3 sm:py-6 sm:gap-4 ip:px-4 ip:py-8 ip:gap-5 md:gap-6 lg:sticky lg:top-24 lg:left-0 lg:gap-4 dark:bg-gelap2">
        <div className="flex gap-2 sm:gap-3 mb-2">
          <div className="w-1/4 rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1000}
              draggable="false"
              priority={true}
              className="aspect-square object-cover object-center"
            />
          </div>

          <div className="w-2/3 capitalize">
            <p className="text-sm font-bold sm:text-lg">{titleProduct}</p>

            <div className="flex items-center justify-start gap-1 mt-1 text-xs sm:text-sm">
              <Icon icon="eos-icons:hourglass" />
              <p>{productProcess}</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="relative">
            <div className="flex border-b-2 border-primary/30 font-semibold text-center text-sm sm:text-base">
              <button
                onClick={() => setSlider(0)}
                className="w-1/2 py-1 sm:p-2"
              >
                Cara TopUp
              </button>

              <button
                onClick={() => setSlider(1)}
                className="w-1/2 py-1 sm:p-2"
              >
                Deskripsi
              </button>
            </div>

            <span
              className={`w-1/2 h-full rounded-t-md bg-primary/20 border-b-2 border-primary absolute bottom-0 left-0 transition-all ease-linear ${
                slider == 1 ? "translate-x-full" : "translate-x-0"
              }`}
            ></span>
          </div>

          <div className="text-xs capitalize sm:text-sm">
            <p
              className={`whitespace-pre-line p-2 w-full animate-slideLeft ${
                slider == 0 ? "block" : "hidden"
              }`}
            >
              {howtopup}
            </p>

            <p
              className={`p-2 w-full animate-slideLeft ${
                slider == 1 ? "block" : "hidden"
              }`}
            >
              {descProduct}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
