"use client";
import { useState } from "react";
import React from "react";

import { ContentTransaksi } from "@/components/Transaction/ContentTransaksi";
import { TextInput } from "@/components/TextInput";
const Transaksi = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  const clearInputButtonClick = () => {
    setInputValue("");
  };

  return (
    <main className="w-full h-full px-2 mx-auto my-[70px] sm:px-3 sm:my-[90px] ip:px-4 md:my-24 xl:max-w-screen-md">
      <div className="flex flex-wrap gap-1 text-xs">
        <p>Kode untuk cek transaksi</p>
        <p>R11111</p>
        <p>R22222</p>
        <p>R33333</p>
        <p>R44444</p>
      </div>

      <section className="w-full text-xl text-center font-bold leading-5 animate-slideTop animation-delay-200 z-[1] sm:px-2 sm:text-2xl sm:leading-6 dark:font-semibold">
        <p>Cek Transaksi</p>
      </section>

      <section className="w-full max-w-lg mx-auto mt-8 mb-6 animate-slideTop animation-delay-300 z-[2] sm:mt-10 sm:mb-8 lg:mt-12">
        <TextInput
          onSubmit={handleSubmit}
          onChange={(e) => inputChangeValue(e)}
          value={inputValue}
          placeholder="Masukkan ID transaksi kamu"
          onClick={clearInputButtonClick}
        />
      </section>

      <ContentTransaksi inputValue={inputValue} />
    </main>
  );
};

export default Transaksi;
