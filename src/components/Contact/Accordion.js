"use client";
import { dataAccordion } from "@/data/dataAccordion";
import { Icon } from "@iconify/react";
import { useState } from "react";

export const Accordion = () => {
  const [selected, setSelected] = useState(1);

  const toggleVisible = (id) => {
    setSelected(id);
  };

  return (
    <div className="flex flex-col gap-4 animate-slideTop animation-delay-500 z-[2] sm:gap-5">
      {dataAccordion &&
        dataAccordion.map(({ id, title, desc }) => (
          <div
            key={id}
            onClick={() => toggleVisible(id)}
            className={`rounded-md border-2 p-3 overflow-hidden transition-all ease-linear sm:p-4 ${
              selected == id ? "border-primary" : "border-gray-300"
            }`}
          >
            {/* Title Accordion */}
            <div
              className={`flex items-center justify-between cursor-pointer ${
                selected == id
                  ? "text-primary"
                  : "text-gelap dark:text-putih/95"
              }`}
            >
              {/* Title Accordion */}
              <p className="w-[80%] font-semibold text-sm sm:text-base sm:w-[90%] md:w-[85%]">
                {title}
              </p>

              {/* Icon Accordion */}
              <div
                className={`transition-all ease-linear text-lg ${
                  selected == id ? "rotate-0" : "rotate-180"
                }`}
              >
                <Icon icon="iconamoon:arrow-up-2-bold" />
              </div>
            </div>

            {/* Content Accordion */}
            <div
              className={`transition-all ease-linear ${
                selected == id
                  ? "h-full opacity-100 pointer-events-auto mt-1 sm:mt-2"
                  : "h-0 opacity-0 pointer-events-none mt-0"
              }`}
            >
              <p className="text-[13px] sm:text-[15px]">{desc}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
