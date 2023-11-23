"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

import { LayerTransaksi } from "./layout/LayerTransaksi";
import { dataCekTrx } from "@/data/dataCekTrx";
import { useState } from "react";

export const ContentTransaksi = ({ inputValue }) => {
  const [iconCopy, setIconCopy] = useState("ph:copy-bold");

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setIconCopy("mingcute:check-fill");
        setTimeout(() => {
          setIconCopy("ph:copy-bold");
        }, 3000);
      } else {
        setIconCopy("ep:close-bold");
        setTimeout(() => {
          setIconCopy("ph:copy-bold");
        }, 6000);
      }
    } catch (err) {
      console.error("Gagal menyalin transaction ID:", err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <section>
      {dataCekTrx && inputValue.length > 2 && (
        <>
          {dataCekTrx.map((item) => {
            if (item.transactionId === inputValue) {
              return (
                <div key={item.id} className="w-full flex flex-col gap-5">
                  {(item.status === "success" && (
                    <div className="flex items-center justify-start gap-3 p-3 rounded-lg w-full bg-green-200 z-[3] animate-slideTop sm:gap-4 sm:p-5 dark:bg-green-600">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-6 h-6 animate-ping rounded-full bg-green-700 sm:w-7 sm:h-7 dark:bg-green-800"></span>
                        <div className="w-8 h-8 z-[1] flex items-center justify-center rounded-full bg-green-500 sm:w-10 sm:h-10">
                          <Icon
                            icon="mingcute:check-fill"
                            className="text-base text-white sm:text-xl"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-bold sm:text-lg">
                          Horee, transaksi kamu berhasil!
                        </p>
                        <p className="text-xs sm:text-base">
                          Yukk beli lagi,{" "}
                          <Link
                            href="/"
                            className="underline hover:no-underline"
                          >
                            Kembali ke beranda
                          </Link>
                        </p>
                      </div>
                    </div>
                  )) ||
                    (item.status === "waiting" && (
                      <div className="flex items-center justify-start gap-3 p-3 rounded-lg w-full bg-yellow-400 z-[3] animate-slideTop sm:gap-4 sm:p-5 dark:bg-yellow-600">
                        <div className="relative flex items-center justify-center">
                          <span className="absolute w-6 h-6 animate-ping rounded-full bg-yellow-700 sm:w-7 sm:h-7 dark:bg-yellow-800"></span>
                          <div className="w-8 h-8 z-[1] flex items-center justify-center rounded-full bg-yellow-500 sm:w-10 sm:h-10">
                            <Icon
                              icon="ri:hourglass-fill"
                              className="text-base text-white sm:text-xl"
                            />
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-bold sm:text-lg">
                            Menunggu pembayaran kamu...
                          </p>
                          <Link
                            href="/"
                            className="text-xs sm:text-base underline hover:no-underline"
                          >
                            Lanjutkan pembayaran
                          </Link>
                        </div>
                      </div>
                    )) ||
                    (item.status === "failed" && (
                      <div className="flex items-center justify-start gap-3 p-3 rounded-lg w-full bg-red-200 z-[3] animate-slideTop sm:gap-4 sm:p-5 dark:bg-red-600">
                        <div className="relative flex items-center justify-center">
                          <span className="absolute w-6 h-6 animate-ping rounded-full bg-red-700 sm:w-7 sm:h-7 dark:bg-red-800"></span>
                          <div className="w-8 h-8 z-[1] flex items-center justify-center rounded-full bg-red-500 sm:w-10 sm:h-10">
                            <Icon
                              icon="mi:close"
                              className="text-base text-white sm:text-xl"
                            />
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-bold sm:text-lg">
                            Yahh, transaksi kamu gagal!!
                          </p>
                          <p className="text-xs sm:text-base">
                            Kamu bisa buat transaksi baru.
                          </p>
                        </div>
                      </div>
                    )) ||
                    (item.status === "process" && (
                      <div className="flex items-center justify-start gap-3 p-3 rounded-lg w-full bg-sky-200 z-[3] animate-slideTop sm:gap-4 sm:p-5 dark:bg-sky-600">
                        <div className="relative flex items-center justify-center">
                          <span className="absolute w-6 h-6 animate-ping rounded-full bg-sky-700 sm:w-7 sm:h-7 dark:bg-sky-800"></span>
                          <div className="w-8 h-8 z-[1] flex items-center justify-center rounded-full bg-sky-500 sm:w-10 sm:h-10">
                            <Icon
                              icon="mingcute:send-plane-line"
                              className="text-base text-white sm:text-xl"
                            />
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-bold sm:text-lg">
                            Sedang memproses pesananmu
                          </p>
                          <p className="text-xs sm:text-base">Tunggu ya!!</p>
                        </div>
                      </div>
                    ))}

                  <div className="flex flex-col gap-5 sm:gap-7 bg-putih2 shadow-s.08 p-4 rounded-lg z-[5] animate-slideTop animation-delay-200 sm:p-5 md:p-6 dark:bg-gelap2">
                    <div>
                      <p className="font-bold text-base sm:text-xl">
                        Detail Transaksi
                      </p>
                      <div className="w-full flex flex-col gap-2 text-xs sm:text-base mt-3">
                        <div className="flex items-center gap-2">
                          <LayerTransaksi
                            title={"No. Transaksi"}
                            desc={
                              <span
                                onClick={() =>
                                  copyToClipboard(item.transactionId)
                                }
                                className="cursor-pointer flex items-center gap-1"
                              >
                                {item.transactionId}
                                <Icon icon={iconCopy} />
                              </span>
                            }
                          />
                        </div>
                        <LayerTransaksi
                          title={"Waktu Transaksi"}
                          desc={`${item.date} - ${item.time}`}
                        />
                        <LayerTransaksi
                          title={"Pembayaran"}
                          desc={item.payment}
                        />
                        <LayerTransaksi title={"Harga"} desc={item.price} />
                      </div>
                    </div>

                    <div>
                      <p className="font-bold text-base sm:text-xl">
                        Detail Produk
                      </p>
                      <div className="w-full flex flex-col gap-2 text-xs sm:text-base mt-3">
                        <LayerTransaksi title={"Produk"} desc={item.product} />
                        <LayerTransaksi title={"Nominal"} desc={item.denom} />
                        <LayerTransaksi title={"User ID"} desc={item.userId} />
                        <LayerTransaksi
                          title={"NickName"}
                          desc={item.nickname}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}

          {dataCekTrx.every((item) => item.transactionId !== inputValue) && (
            <p className="px-1 text-center text-sm sm:text-base">
              Transaksi tidak ditemukan
            </p>
          )}
        </>
      )}
    </section>
  );
};
