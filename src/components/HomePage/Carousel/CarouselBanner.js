"use client";
import Link from "next/link";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/components/HomePage/Carousel/customDotCarousel.css";
import { Carousel } from "react-responsive-carousel";

import { dataCarousel } from "@/data/dataCarousel";

export const CarouselBanner = () => {
  return (
    <section className="px-2 mx-auto animate-slideTop select-none rounded-md overflow-hidden xl:rounded-lg sm:px-3 ip:px-4 xl:max-w-screen-lg">
      <div className="rounded-md overflow-hidden xl:rounded-lg">
        <Carousel
          autoPlay
          interval={4000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          stopOnHover
          swipeable
          emulateTouch
          showArrows={false}
        >
          {dataCarousel &&
            dataCarousel.map(({ id, image, link }) => (
              <Link key={id} href={link} className="block">
                <Image
                  src={image}
                  alt="banner"
                  priority={true}
                  width={1000}
                  height={1000}
                  placeholder="blur"
                  draggable="false"
                  className="w-full h-full object-cover object-center aspect-2.5/1"
                />
              </Link>
            ))}
        </Carousel>
      </div>
    </section>
  );
};
