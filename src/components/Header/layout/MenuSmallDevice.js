import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const MenuSmallDevice = ({ visibleMenu, toggleMenu, dataNavbar }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-full select-none z-[100] flex flex-col items-center justify-end transition-all ease-linear xl:hidden ${
        visibleMenu == true
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* ---------- Black Background ---------- */}
      <span
        onClick={toggleMenu}
        className="bg-gelap bg-opacity-50 fixed top-0 left-0 z-[101] w-full h-full"
      ></span>

      {/* ---------- Menu Content ---------- */}
      <div
        className={`bg-putih text-gelap w-full max-w-[500px] px-2 pb-3 rounded-t-xl z-[102] transition-all duration-300 ease-linear ip:px-4 dark:bg-gelap2 dark:text-putih/95 ${
          visibleMenu === true ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* ---------- Title Menu ---------- */}
        <div className="header w-3/5 flex items-center justify-between ml-auto my-3 sm:my-4">
          <p className="text-center text-base font-bold sm:text-xl">Menu</p>
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center p-2 text-lg sm:text-2xl"
          >
            <Icon icon="pajamas:close" />
          </button>
        </div>

        {/* ---------- Menu ---------- */}
        {dataNavbar &&
          dataNavbar.map(({ id, name, url, icon, iconActive }) => (
            <Link
              onClick={toggleMenu}
              key={id}
              href={url}
              className={`p-2 rounded-md flex items-center gap-3 font-medium text-md sm:text-xl sm:py-3 ${
                usePathname() === url
                  ? "bg-primary/20 text-primary"
                  : "bg-putih text-gelap dark:bg-gelap2 dark:text-putih/95"
              }`}
            >
              <Icon icon={`${usePathname() === url ? iconActive : icon}`} />
              <p>{name}</p>
            </Link>
          ))}
      </div>
    </nav>
  );
};
