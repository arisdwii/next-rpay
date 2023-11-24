"use client";
import { Accordion } from "@/components/Contact/Accordion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const HubungiKami = () => {
  return (
    <main className="w-full max-w-[600px] h-full px-2 mx-auto my-[70px] sm:px-3 sm:my-[90px] ip:px-4 md:my-24 xl:max-w-screen-lg">
      <section className="flex flex-col gap-10">
        <p className="flex flex-col gap-1 items-center justify-center w-full text-xl text-center font-semibold animate-slideTop after:w-20 after:h-[2px] after:bg-primary sm:text-2xl">
          Hubungi Kami
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          <p className="text-center text-sm sm:text-base animate-slideTop animation-delay-200">
            Kamu mengalami masalah pada saat transaksi? atau kamu ada pertanyaan
            lain seputar RPay Voucher? silahkan hubungi kami dibawah ini ya!!
          </p>
          <div className="flex justify-around animate-slideTop animation-delay-300 md:justify-center md:gap-10">
            <Link href="https://wa.me/6281946137356">
              <button className="bg-green-400 flex items-center justify-center gap-1 font-semibold px-4 py-2 rounded-md text-base shadow-xl shadow-green-200 transition-all ease-linear hover:shadow-lg sm:gap-2 sm:px-6 sm:py-3 dark:bg-green-500 dark:text-putih/95 dark:shadow-none">
                <Icon icon="ic:outline-whatsapp" />
                WhatsApp
              </button>
            </Link>
            <Link href="mailto:someone@example.com">
              <button className="bg-red-400 text-white flex items-center justify-center gap-1 font-semibold px-4 py-2 rounded-md text-base shadow-xl shadow-red-200 transition-all ease-linear hover:shadow-lg sm:gap-2 sm:px-6 sm:py-3 dark:bg-red-500 dark:text-putih/95 dark:shadow-none">
                <Icon icon="ion:mail" />
                Email
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5 mt-16 sm:mt-20">
        <div className="flex items-center justify-start gap-2 font-semibold text-base animate-slideTop animation-delay-400 z-[1] sm:text-lg md:text-xl">
          <Icon icon="material-symbols:help" />
          <p>Pertanyaan yang sering ditanyakan</p>
        </div>
        <Accordion />
      </section>
    </main>
  );
};

export default HubungiKami;
