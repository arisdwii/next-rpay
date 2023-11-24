"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

import { FilterLayoutProduct } from "@/components/HomePage/FilterLayoutProduct";
import { CarouselBanner } from "@/components/HomePage/Carousel/CarouselBanner";
import { BtnScrollToTop } from "@/components/BtnScrollToTop";
import { dataProductCards } from "@/data/dataProductCards";

const Beranda = () => {
  const [cardDataProduct, setCardDataProduct] = useState([]);

  useEffect(() => {
    setCardDataProduct(dataProductCards);
  }, []);

  return (
    <>
      <main className="flex flex-col gap-5 my-[70px] sm:my-[90px] md:my-24">
        {/* Carousel Content */}
        <CarouselBanner />
        <FilterLayoutProduct
          cardDataProduct={cardDataProduct}
          setCardDataProduct={setCardDataProduct}
        />

        <section className="flex flex-col gap-8 animate-slideTop animation-delay-300 sm:gap-16">
          {cardDataProduct.map(({ id, title, icon, product }) => (
            <div
              key={id}
              className="w-full h-full px-2 sm:px-3 ip:px-4 xl:max-w-screen-xl xl:mx-auto"
            >
              {/* ---------- Title Product ---------- */}
              <div className="flex justify-start items-center gap-1 text-xl font-bold text-primary sm:gap-2 sm:text-[28px] lg:text-3xl">
                <Icon icon={icon} />
                <p>{title}</p>
              </div>

              <div className="grid grid-cols-3 gap-1 mt-2 w-full font-medium text-[10px] text-center sm:text-sm sm:gap-2 sm:mt-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:mt-5">
                {/* ---------- Content Product ---------- */}
                {product.map(({ id, title, image, url }) => (
                  <Link
                    key={id}
                    href={url}
                    className="group p-1 rounded-md transition-all ease-linear sm:rounded-xl xl:p-2"
                  >
                    <div className="rounded-md overflow-hidden sm:rounded-xl">
                      <Image
                        src={image}
                        alt={title}
                        width={1000}
                        height={1000}
                        priority={true}
                        placeholder="blur"
                        draggable="false"
                        className="w-full h-full aspect-square object-cover object-center transition-all ease-linear group-hover:scale-110"
                      />
                    </div>
                    <p className="product-title p-1 overflow-hidden text-ellipsis xl:pt-2 transition-all ease-linear group-hover:text-primary">
                      {title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <BtnScrollToTop />
    </>
  );
};

export default Beranda;
