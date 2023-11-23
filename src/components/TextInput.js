"use client";
import { Icon } from "@iconify/react";

export const TextInput = ({
  onBlur,
  onChange,
  onClick,
  onFocus,
  onSubmit,
  value,
  placeholder,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      className="relative select-none rounded-full overflow-hidden"
    >
      <label
        htmlFor="search-input"
        className="flex items-center justify-center h-full absolute top-0 left-2.5 text-gelap cursor-pointer text-base sm:left-3 sm:text-xl dark:text-putih/95"
      >
        <Icon icon="iconamoon:search" />
      </label>

      <input
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        id="search-input"
        type="text"
        spellCheck="false"
        placeholder={placeholder}
        className="w-full bg-gray-300 text-gelap rounded-full pl-9 py-2.5 pr-10 text-xs outline-none sm:pl-11 sm:pr-12 sm:py-3 sm:text-base dark:bg-gelap2 dark:text-putih/95"
      />

      <div className="flex items-center justify-center h-full absolute top-0 right-1">
        <span
          onClick={onClick}
          className={`p-1 rounded-full cursor-pointer transition-all ease-linear hover:bg-primary/30 sm:p-2 ${
            value != "" ? "block" : "hidden"
          }`}
        >
          <Icon icon="mingcute:close-fill" />
        </span>
      </div>
    </form>
  );
};
