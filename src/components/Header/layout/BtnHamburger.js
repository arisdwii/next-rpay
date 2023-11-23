import { Icon } from "@iconify/react";

export const BtnHamburger = ({ toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex items-center justify-center p-1 cursor-pointer rounded-full text-xl sm:text-2xl xl:hidden"
    >
      <Icon icon="gg:menu-left" vFlip={true} />
    </button>
  );
};
