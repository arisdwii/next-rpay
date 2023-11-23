"use client";
import React, { useState } from "react";

import { TextInput } from "../TextInput";
import { dataProductCards } from "@/data/dataProductCards";
import { CardSearchProduct } from "./CardSearchProduct";

export const FilterLayoutProduct = ({
  cardDataProduct,
  setCardDataProduct,
}) => {
  const [searchProduct, setSearchProduct] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSearchProduct(e.target.value);
  };

  const clearInputButtonClick = () => {
    setInputValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const focusTrue = () => {
    setIsFocus(true);
  };

  const focusFalse = () => {
    setIsFocus(false);
  };

  const productFilter = (itemData) => {
    const filterData = dataProductCards.filter(
      (item) => item.title == itemData
    );
    setCardDataProduct(filterData);
  };

  return (
    <section className="w-full flex flex-col gap-5 lg:flex-row-reverse lg:justify-between lg:items-center xl:max-w-screen-xl xl:mx-auto">
      {/* ---------- Search Product ---------- */}
      <div className="relative animate-slideTop z-[2] mx-2 sm:mx-3 ip:mx-4 lg:w-1/3">
        <TextInput
          onBlur={focusFalse}
          onFocus={focusTrue}
          onChange={(e) => {
            handleInputChange(e);
          }}
          onClick={clearInputButtonClick}
          onSubmit={handleSubmit}
          value={inputValue}
          placeholder="Cari atau masukkan nama produk..."
        />
        <CardSearchProduct
          inputValue={inputValue}
          searchProduct={searchProduct}
          isFocus={isFocus}
        />
      </div>

      <div className="relative flex items-center gap-1 px-2 rounded-md overflow-x-scroll w-full select-none scrollbar-hidden lg:overflow-x-visible sm:px-3 ip:px-4 lg:w-1/2">
        {/* ---------- Filter Button Product ---------- */}
        <button
          onClick={() => setCardDataProduct(dataProductCards)}
          className={`px-4 py-2 rounded-full text-xs capitalize border animate-slideTop animation-delay-200 z-[1] sm:px-6 sm:py-2.5 sm:text-sm lg:px-5 lg:py-2 ${
            cardDataProduct == dataProductCards
              ? "bg-primary border-primary text-gelap"
              : "bg-gray-300 border-gray-400 hover:bg-primary hover:border-primary dark:bg-gelap2 dark:border-gelap2"
          }`}
        >
          Semua
        </button>

        {dataProductCards &&
          dataProductCards.map((item) => (
            <button
              key={item.id}
              onClick={() => productFilter(item.title)}
              className={`px-4 py-2 rounded-full text-xs capitalize border animate-slideLeft animation-delay-300 z-0 sm:px-6 sm:py-2.5 sm:text-sm lg:px-5 lg:py-2 ${
                item.title == cardDataProduct.map((item) => item.title)
                  ? "bg-primary border-primary text-gelap"
                  : "bg-gray-300 border-gray-400 hover:bg-primary hover:border-primary dark:bg-gelap2 dark:border-gelap2"
              }`}
            >
              {item.title}
            </button>
          ))}
      </div>
    </section>
  );
};
