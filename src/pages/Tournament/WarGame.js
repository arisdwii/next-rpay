"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

import { dataTournament } from "@/data/dataTournament";
import { TournamentDetail } from "@/components/Tournament/TournamentDetail";
import { TextInput } from "@/components/TextInput";

const WarGame = () => {
  const [inputValue, setInputValue] = useState("");

  const [showWarDetail, setShowWarDetail] = useState(false);
  const [warDetail, setWarDetail] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  const clearInputButtonClick = () => {
    setInputValue("");
  };

  const toggleShowWarDetail = () => {
    setShowWarDetail(!showWarDetail);
  };

  const filterWarDetail = (detail) => {
    const filterWar = dataTournament.filter((item) => item.id == detail);
    setWarDetail(filterWar);
    toggleShowWarDetail();
  };

  useEffect(() => {
    showWarDetail
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showWarDetail]);

  return (
    <main className="w-full h-full select-none px-2 mx-auto my-[70px] sm:px-3 sm:my-[90px] ip:px-4 md:my-24 xl:max-w-screen-xl">
      {dataTournament && dataTournament.length != 0 && (
        <>
          <section className="w-full text-xl text-center font-bold leading-5 animate-slideTop animation-delay-200 z-[1] sm:px-2 sm:text-2xl sm:leading-6 dark:font-semibold">
            <p>Pilih Tournament Game Kesayangan Kamu !!</p>
          </section>

          <section className="w-full max-w-lg mx-auto mt-8 mb-6 animate-slideTop animation-delay-300 z-[2] sm:mt-10 sm:mb-8 lg:mt-12">
            <TextInput
              onSubmit={handleSubmit}
              onChange={(e) => inputChangeValue(e)}
              value={inputValue}
              placeholder="Cari tournament game kesayangan kamu"
              onClick={clearInputButtonClick}
            />
          </section>

          <section className="font-medium text-xs text-center animate-slideTop animation-delay-300 z-[3] sm:text-sm">
            <div className="grid grid-cols-2 gap-3 w-full sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {dataTournament &&
                dataTournament
                  .filter((item) => {
                    return (
                      inputValue == "" ||
                      item.title
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    );
                  })
                  .map(({ id, title, image }) => (
                    <div
                      onClick={() => filterWarDetail(id)}
                      key={id}
                      className="group cursor-pointer overflow-hidden rounded-lg"
                    >
                      <div className="overflow-hidden rounded-md sm:rounded-lg">
                        <Image
                          src={image}
                          alt={title}
                          width={1000}
                          height={1000}
                          draggable="false"
                          priority={true}
                          className="aspect-square object-cover object-center transition-all ease-linear group-hover:scale-110"
                        />
                      </div>
                      <p className="p-1 transition-all ease-linear group-hover:text-primary lg:p-2">
                        {title}
                      </p>
                    </div>
                  ))}
            </div>

            {dataTournament &&
              dataTournament.filter((item) => {
                return (
                  inputValue == "" ||
                  item.title.toLowerCase().includes(inputValue.toLowerCase())
                );
              }).length === 0 && (
                <p className="px-1">
                  Yah, Tournament game yang kamu cari tidak tersedia
                </p>
              )}
          </section>

          <TournamentDetail
            warDetail={warDetail}
            showWarDetail={showWarDetail}
            toggleShowWarDetail={toggleShowWarDetail}
          />
        </>
      )}

      {dataTournament && dataTournament.length == 0 && (
        <section className="w-full h-[50vh] flex items-center justify-center text-xl text-center font-bold animate-slideTop animation-delay-200 sm:px-2 dark:font-semibold">
          <p>Yah, saat ini tidak ada tournament yang tersedia !! 😭😭</p>
        </section>
      )}
    </main>
  );
};

export default WarGame;
