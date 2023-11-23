import { Icon } from "@iconify/react";

export const SelectProductIcon = () => {
  return (
    <div className="absolute -right-[1px] -top-[1px]">
      <span className="bg-primary text-gelap p-2 [clip-path:polygon(0%_0%,100%_0%,100%_100%)] flex items-end justify-end text-[10px] sm:text-xs">
        <Icon
          icon="material-symbols:done"
          className="translate-x-1/2 -translate-y-1/2"
        />
      </span>
    </div>
  );
};
