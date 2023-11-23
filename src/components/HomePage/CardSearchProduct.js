import Link from "next/link";
import Image from "next/image";

import { dataProductCards } from "@/data/dataProductCards";
import { Icon } from "@iconify/react";

export const CardSearchProduct = ({ inputValue, searchProduct, isFocus }) => {
  const produk = dataProductCards.flatMap((item) => {
    return item.product;
  });

  return (
    <div
      className={`absolute left-0 m-2 bg-putih2 flex flex-col gap-1 overflow-hidden w-[90%] rounded-lg p-1 z-20 sm:gap-2 sm:p-2 sm:mx-3 ip:mx-4 dark:bg-gelap2 ${
        searchProduct == "" || inputValue == "" || isFocus == false
          ? "hidden"
          : "block"
      }`}
    >
      {produk
        .filter((item) => {
          return (
            searchProduct &&
            inputValue != "" &&
            item.title.toLowerCase().includes(searchProduct.toLowerCase())
          );
        })
        .map(({ id, url, title, image }) => (
          <Link
            key={id}
            href={url}
            className="group p-1 flex items-center justify-start gap-2 animate-slideLeft"
          >
            <div className="rounded-md overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={1000}
                height={1000}
                draggable="false"
                priority={true}
                className="w-10 h-10 aspect-square object-cover object-center transition-all ease-linear group-hover:scale-110 sm:w-14 sm:h-14"
              />
            </div>
            <p className="text-xs p-1 overflow-hidden w-2/3 transition-all ease-linear group-hover:text-primary sm:text-sm">
              {title}
            </p>
          </Link>
        ))}

      {produk.filter((item) => {
        return (
          searchProduct == "" ||
          item.title.toLowerCase().includes(searchProduct.toLowerCase())
        );
      }).length === 0 && (
        <div className="w-full flex items-center justify-center animate-slideLeft">
          <Icon icon="mingcute:sad-line" className="text-base sm:text-xl" />
          <p className="px-1 text-xs sm:text-base xl:text-sm">
            Produk yang dicari tidak ditemukan
          </p>
        </div>
      )}
    </div>
  );
};
