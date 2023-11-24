"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

import { dataGameFF } from "@/data/Product/Game/dataGameFF";
import { LeftSideBar } from "@/components/Product/LeftSideBar";
import { SelectProductIcon } from "@/components/Product/SelectProductIcon";

const FF = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [inputId, setInputId] = useState("");

  const [idDenom, setIdDenom] = useState(null);
  const [titleDenom, setTitleDenom] = useState("");
  const [priceDenom, setPriceDenom] = useState("");

  const [titlePay, setTitlePay] = useState("");
  const [outletPay, setOutletPay] = useState("");

  const [totalPriceQris, setTotalPriceQris] = useState(0);
  const [totalPriceVA, setTotalPriceVA] = useState(0);
  const [totalPriceSM, setTotalPriceSM] = useState(0);
  const [totalPriceEW, setTotalPriceEW] = useState(0);
  const [totalPricePulsa, setTotalPricePulsa] = useState(0);

  const [visibleDetail, setVisibleDetail] = useState(false);
  const [inputWA, setInputWa] = useState(null);

  const [visibleGuideId, setVisibleGuideId] = useState(false);

  const visibleOrder = () => {
    setVisibleDetail(!visibleDetail);
  };

  const guideIdVisible = () => {
    setVisibleGuideId(!visibleGuideId);
  };

  useEffect(() => {
    {
      visibleDetail
        ? document.body.classList.add("overflow-hidden")
        : document.body.classList.remove("overflow-hidden");
    }

    {
      visibleGuideId
        ? document.body.classList.add("overflow-hidden")
        : document.body.classList.remove("overflow-hidden");
    }

    lastPriceQris();
    lastPriceVA();
    lastPriceSM();
    lastPriceEW();
    lastPricePulsa();

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [priceDenom, visibleDetail, visibleGuideId]);

  const lastPriceQris = () => {
    const numberPrice = parseFloat(priceDenom.replace(/[\.,]/g, ""));
    const result = numberPrice + (numberPrice * 1) / 100;
    const formatPrice = Math.floor(result).toLocaleString();
    setTotalPriceQris(formatPrice);
  };

  const lastPriceVA = () => {
    const numberPrice = parseFloat(priceDenom.replace(/[\.,]/g, ""));
    const result = numberPrice + 7500;
    const formatPrice = Math.floor(result).toLocaleString();
    setTotalPriceVA(formatPrice);
  };

  const lastPriceSM = () => {
    const numberPrice = parseFloat(priceDenom.replace(/[\.,]/g, ""));
    const result = numberPrice + 2500;
    const formatPrice = Math.floor(result).toLocaleString();
    setTotalPriceSM(formatPrice);
  };

  const lastPriceEW = () => {
    const numberPrice = parseFloat(priceDenom.replace(/[\.,]/g, ""));
    const result = numberPrice + (numberPrice * 0.5) / 100;
    const formatPrice = Math.floor(result).toLocaleString();
    setTotalPriceEW(formatPrice);
  };

  const lastPricePulsa = () => {
    const numberPrice = parseFloat(priceDenom.replace(/[\.,]/g, ""));
    const result = numberPrice + (numberPrice * 1.2) / 100;
    const formatPrice = Math.floor(result).toLocaleString();
    setTotalPricePulsa(formatPrice);
  };

  const getDenom = (idx, title, prce) => {
    setIdDenom(idx);
    setTitleDenom(title);
    setPriceDenom(prce);
    lastPriceQris();
    lastPriceVA();
    lastPriceEW();
    lastPricePulsa;
  };

  const getTitlePay = (nme, otlet) => {
    setTitlePay(nme);
    setOutletPay(otlet);
  };

  const calculateTotalPrice = (paymentMethod, selectedName) => {
    if (paymentMethod == "QRIS") {
      if (selectedName == titlePay) {
        return totalPriceQris;
      }
    } else if (paymentMethod == "Virtual Account") {
      if (selectedName == titlePay) {
        return totalPriceVA;
      }
    } else if (paymentMethod == "Supermarket") {
      if (selectedName == titlePay) {
        return totalPriceSM;
      }
    } else if (paymentMethod == "E - Wallet") {
      if (selectedName == titlePay) {
        return totalPriceEW;
      }
    } else if (paymentMethod == "Pulsa") {
      if (selectedName == titlePay) {
        return totalPricePulsa;
      }
    }
  };

  const paymentMethod = outletPay;
  const selectedName = titlePay;

  const totalPrice = calculateTotalPrice(paymentMethod, selectedName);

  return (
    <>
      <section className="relative md:max-w-screen-md md:px-4 md:mx-auto lg:max-w-screen-xl">
        {dataGameFF &&
          dataGameFF.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col gap-7 sm:gap-10 lg:flex-row lg:gap-5"
            >
              {/* Product Introduction */}
              <LeftSideBar
                src={item.image}
                alt={item.title}
                titleProduct={item.title}
                productProcess={item.process}
                howtopup={item.howtopup}
                descProduct={item.desc}
              />

              {/* Product Content */}
              <div className="flex flex-col gap-7 bg-putih2 shadow-s.08 px-2 py-4 rounded-md overflow-hidden animate-slideTop animation-delay-200 sm:px-3 sm:py-6 sm:gap-10 ip:px-4 ip:py-8 lg:w-2/3 dark:bg-gelap2">
                {/* Input User Form */}
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-4">
                  {/* Title */}
                  <div className="flex items-center gap-1 text-primary font-bold text-base sm:text-xl sm:gap-2 lg:text-lg">
                    <Icon icon="mingcute:game-2-line" />
                    <p>Masukkan ID Player</p>
                  </div>

                  {/* Content */}
                  <div className="relative flex items-center gap-2 lg:gap-4 xl:max-w-xs">
                    <form
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      autoComplete="off"
                      className="relative w-full"
                    >
                      <label
                        htmlFor="input-id"
                        className={`absolute px-2 cursor-text transition-all ease-linear ${
                          isFocus == true || inputId != ""
                            ? "translate-y-0 text-xs text-primary font-semibold sm:text-sm lg:text-xs"
                            : "translate-y-full text-sm sm:text-base lg:text-sm"
                        }`}
                      >
                        Masukkan Player ID
                      </label>
                      <input
                        id="input-id"
                        type="text"
                        required
                        onChange={(e) => setInputId(e.target.value)}
                        className="mx-1 px-1 py-2 bg-putih2 pt-5 w-full border-b-2 border-gray-300 outline-none focus:border-primary sm:pt-6 lg:pt-5 dark:bg-gelap2 dark:border-gray-600 dark:focus:border-primary"
                      />
                    </form>

                    <Icon
                      onClick={guideIdVisible}
                      icon="material-symbols:help"
                      className="relative w-fit text-2xl cursor-pointer text-primary sm:text-3xl lg:text-2xl"
                    />
                  </div>

                  <p className="text-xs italic max-w-lg">
                    Untuk menemukan ID Anda, klik pada ikon karakter. User ID
                    tercantum di bawah nama karakter Anda. Contoh: '5363266446'.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-4">
                  <div className="flex items-center gap-1 text-primary font-bold text-base sm:text-xl sm:gap-2 lg:text-lg">
                    <Icon icon="akar-icons:pointer-hand" />
                    <p>Pilih Nominal TopUp</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-4 xl:grid-cols-3">
                    {item.product.map(({ id, denom, price }) => (
                      <div
                        onClick={() => getDenom(id, denom, price)}
                        key={id}
                        className={`relative p-2 border rounded-md overflow-hidden cursor-pointer sm:border-2 sm:p-3
                      ${
                        idDenom == id
                          ? "border-primary shadow-s.08"
                          : "border-gray-300 dark:border-gray-500"
                      }
                      `}
                      >
                        {idDenom == id ? <SelectProductIcon /> : ""}

                        <p
                          className={`font-bold text-sm sm:text-base ${
                            idDenom == id ? "text-primary" : "text-inherit"
                          }`}
                        >
                          {denom}
                        </p>
                        <p className="text-xs sm:text-sm mt-1 lg:text-xs">
                          Rp {price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Payment */}
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-4">
                  <div className="flex items-center gap-1 text-primary font-bold text-base sm:text-xl sm:gap-2 lg:text-lg">
                    <Icon icon="ic:round-payment" />
                    <p>Pilih Metode Pembayaran</p>
                  </div>

                  <div className="flex flex-col gap-5 sm:gap-6 lg:gap-5">
                    {item.payment.map(({ id, title, outlet }) => (
                      <div
                        key={id}
                        className="w-full flex flex-col gap-3 sm:gap-4"
                      >
                        <div className="text-sm sm:text-lg">
                          <p className="font-bold">{title}</p>
                          <p className="text-[10px] text-red-500 sm:text-xs dark:text-red-300">
                            *harga sudah termasuk biaya admin
                          </p>
                        </div>

                        <div className="flex flex-col gap-2.5">
                          {outlet.map(({ id, image, name }) => (
                            <div
                              key={id}
                              onClick={
                                idDenom != null
                                  ? () => getTitlePay(name, title)
                                  : null
                              }
                              className={`relative flex items-center justify-between border rounded-md overflow-hidden cursor-pointer p-3 w-full sm:border-2 sm:py-4 lg:py-3 xl:py-5 ${
                                idDenom != null
                                  ? "pointer-events-auto"
                                  : "pointer-events-none bg-gray-300 dark:bg-gray-500"
                              } ${
                                titlePay == name
                                  ? "border-primary shadow-shadow/0.8"
                                  : "border-gray-300 dark:border-gray-500"
                              }`}
                            >
                              {titlePay == name ? <SelectProductIcon /> : ""}

                              <div className="w-1/2 flex flex-wrap items-center justify-start overflow-hidden cursor-pointer gap-2 text-xs sm:text-sm lg:w-1/3 lg:text-xs lg:gap-3">
                                <div className="w-1/3">
                                  <Image
                                    src={image}
                                    alt={name}
                                    width={1000}
                                    height={1000}
                                    priority
                                  />
                                </div>
                                <p
                                  className={`font-semibold ${
                                    titlePay == name
                                      ? "text-primary"
                                      : "text-inherit"
                                  }`}
                                >
                                  {name}
                                </p>
                              </div>

                              <div className="w-fit text-sm font-semibold sm:text-base">
                                <p>
                                  Rp{" "}
                                  {priceDenom == ""
                                    ? "0"
                                    : (() => {
                                        switch (title) {
                                          case "QRIS":
                                            return totalPriceQris;
                                          case "Virtual Account":
                                            return totalPriceVA;
                                          case "Supermarket":
                                            return totalPriceSM;
                                          case "E - Wallet":
                                            return totalPriceEW;
                                          case "Pulsa":
                                            return totalPricePulsa;
                                          default:
                                            return "0";
                                        }
                                      })()}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div
          className={`fixed bottom-0 left-0 w-full h-fit select-none bg-putih2/80 backdrop-blur-sm border-t-2 border-primary px-4 py-2 z-50 transition-all ease-linear sm:p-4 md:p-5 lg:p-3 dark:bg-gelap2/80 ${
            inputId != "" &&
            totalPrice != undefined &&
            titleDenom != "" &&
            titlePay != ""
              ? "translate-y-0"
              : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between max-w-screen-md mx-auto xl:max-w-screen-lg">
            <div className="text-xs w-1/2 sm:text-base">
              <p className="font-bold text-sm sm:text-xl">
                Rp {totalPrice != undefined ? totalPrice : "0"}
              </p>
              <p>
                {titleDenom}, {titlePay}
              </p>
            </div>
            <div
              onClick={
                inputId != "" && titleDenom != "" && titlePay != ""
                  ? visibleOrder
                  : null
              }
              className={`font-semibold py-2 px-4 rounded-full h-fit text-sm sm:text-base sm:py-3 sm:px-6 lg:text-sm lg:py-2.5 lg:px-5 ${
                inputId != "" && titleDenom != "" && titlePay != ""
                  ? "bg-primary pointer-events-auto hover:bg-primary/70"
                  : "bg-gray-300 pointer-events-none"
              }`}
            >
              <button>Beli Sekarang</button>
            </div>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 z-[60] w-full h-full select-none flex items-end justify-center transition-all ease-linear ${
            visibleGuideId == true
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* ---------- Black Background ---------- */}
          <span
            onClick={guideIdVisible}
            className="bg-black/20 backdrop-blur-[2px] absolute top-0 left-0 w-full h-full"
          ></span>

          {/* ---------- Main Content ---------- */}
          <div
            className={`bg-putih2 h-fit w-full max-w-[500px] overflow-hidden px-2 py-3 rounded-t-xl z-[70] transition-all duration-300 ease-linear sm:px-3 ip:px-5 md:max-w-[400px] dark:bg-gelap2 ${
              visibleGuideId == true ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* ---------- Content ---------- */}
            <div className="flex flex-col gap-4 my-1">
              <p className="text-center text-base font-bold sm:text-xl">
                Petunjuk
              </p>

              <div className="rounded-md overflow-hidden">
                {dataGameFF &&
                  dataGameFF.map(({ searchId }) => (
                    <Image
                      key={searchId}
                      src={searchId}
                      alt="search-id"
                      width={1000}
                      height={1000}
                      priority
                      className="w-full h-full object-cover object-center"
                    />
                  ))}
              </div>

              <button
                onClick={guideIdVisible}
                className="w-full bg-primary rounded-md text-sm font-semibold py-1.5 hover:bg-primary/80 sm:py-2.5 sm:text-base lg:py-2 lg:text-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 z-[60] w-full h-full select-none flex items-end justify-center transition-all ease-linear ${
            visibleDetail == true
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* ---------- Black Background ---------- */}
          <span
            onClick={visibleOrder}
            className="bg-black/20 backdrop-blur-[2px] absolute top-0 left-0 w-full h-full"
          ></span>

          {/* ---------- Main Content ---------- */}
          <div
            className={`bg-putih2 h-fit w-full max-w-[500px] overflow-hidden px-2 py-3 rounded-t-xl z-[70] transition-all duration-300 ease-linear sm:px-3 ip:px-5 md:max-w-[400px] dark:bg-gelap2 ${
              visibleDetail == true ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* ---------- Content ---------- */}
            <div className="flex flex-col gap-4 my-1">
              <p className="text-center text-base font-bold sm:text-xl">
                Detail Pesanan
              </p>

              <div className="text-sm flex flex-col gap-1">
                <p className="font-semibold mb-1">
                  Mohon konfirmasi pesanan anda sudah benar.
                </p>
                <div className="flex sm:text-base lg:text-sm">
                  <p className="w-1/2 text-gelap dark:text-putih">User ID</p>
                  <p className="w-1/2 text-gelap2 font-semibold dark:text-putih2">
                    : {inputId}
                  </p>
                </div>
                <div className="flex sm:text-base lg:text-sm">
                  <p className="w-1/2 text-gelap dark:text-putih">Username</p>
                  <p className="w-1/2 text-gelap2 font-semibold dark:text-putih2">
                    : {`{{username}}`}
                  </p>
                </div>
                <div className="flex sm:text-base lg:text-sm">
                  <p className="w-1/2 text-gelap dark:text-putih">Product</p>
                  <p className="w-1/2 text-gelap2 font-semibold dark:text-putih2">
                    : Free Fire
                  </p>
                </div>
                <div className="flex sm:text-base lg:text-sm">
                  <p className="w-1/2 text-gelap dark:text-putih">Item</p>
                  <p className="w-1/2 text-gelap2 font-semibold dark:text-putih2">
                    : {titleDenom}
                  </p>
                </div>
                <div className="flex sm:text-base lg:text-sm">
                  <p className="w-1/2 text-gelap dark:text-putih">Harga</p>
                  <p className="w-1/2 text-gelap2 font-semibold dark:text-putih2">
                    : Rp. {totalPrice}
                  </p>
                </div>
                <div className="flex sm:text-base lg:text-sm">
                  <p className="w-1/2 text-gelap dark:text-putih">Pembayaran</p>
                  <p className="w-1/2 text-gelap2 font-semibold dark:text-putih2">
                    : {titlePay}
                  </p>
                </div>
              </div>

              <div className="mt-1">
                <p className="text-sm font-semibold sm:mb-1">
                  Silahkan masukkan No. WhatsApp kamu untuk menerima bukti
                  pembelian.
                </p>
                <form autoComplete="off" className="relative w-3/4">
                  <input
                    type="text"
                    placeholder="Masukkan No. WhatsApp"
                    maxLength={15}
                    onChange={(e) => setInputWa(e.target.value)}
                    className="px-1 py-2 w-full bg-putih2 border-b-2 outline-none text-[15px] placeholder:text-sm focus:border-primary sm:text-base sm:placeholder:text-base lg:placeholder:text-sm lg:text-[15px] dark:bg-gelap2"
                  />
                </form>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <button
                  onClick={visibleOrder}
                  className="w-1/2 border border-primary rounded-md text-sm font-semibold py-1.5 sm:py-2.5 sm:text-base lg:py-2 lg:text-sm"
                >
                  Batalkan
                </button>
                <button
                  onClick={
                    inputWA != null && inputWA.length > 9
                      ? () => (window.location = "/")
                      : null
                  }
                  className={`w-1/2 rounded-md text-center text-sm font-semibold py-1.5 sm:py-2.5 sm:text-base lg:py-2 lg:text-sm ${
                    inputWA != null && inputWA.length > 9
                      ? "bg-primary hover:bg-primary/80"
                      : "bg-gray-300"
                  }`}
                >
                  konfirmasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FF;
