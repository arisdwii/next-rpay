import { usePathname } from "next/navigation";
import Link from "next/link";

export const MenuLargeDevice = ({ dataNavbar }) => {
  return (
    <ul className="hidden xl:flex xl:gap-2">
      {dataNavbar &&
        dataNavbar.map(({ id, name, url }) => (
          <li key={id} className="py-1 px-3">
            <Link
              href={url}
              className={`font-semibold transition-all ease-linear ${
                usePathname() === url ? "text-primary" : "hover:text-primary"
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
    </ul>
  );
};
