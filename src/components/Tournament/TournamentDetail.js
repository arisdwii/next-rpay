import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export const TournamentDetail = ({
  warDetail,
  showWarDetail,
  toggleShowWarDetail,
}) => {
  return (
    <section
      className={`fixed top-0 left-0 z-[60] w-full h-full flex items-end justify-center transition-all ease-linear ${
        showWarDetail
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* ---------- Black Background ---------- */}
      <span
        onClick={toggleShowWarDetail}
        className="bg-gelap/20 backdrop-blur-[2px] absolute top-0 left-0 w-full h-full"
      ></span>

      {/* ---------- Main Content ---------- */}
      <div
        className={`bg-putih text-gelap h-fit w-full max-w-[500px] overflow-hidden px-2 py-3 rounded-t-xl z-[70] transition-all duration-300 ease-linear sm:px-3 ip:px-4 md:max-w-[400px] dark:bg-gelap2 dark:text-putih/95 ${
          showWarDetail ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* ---------- Title Content ---------- */}
        <div className="w-3/4 ml-auto">
          <div className="w-full mt-1 mb-3 flex items-center justify-between">
            <p className="text-center text-base font-bold sm:text-xl dark:font-semibold">
              Detail Tournament
            </p>
            <span
              onClick={toggleShowWarDetail}
              className="flex items-center justify-center p-2 text-lg cursor-pointer sm:text-xl h-fit bg-transparent rounded-full transition-all ease-linear hover:bg-primary/20"
            >
              <Icon icon="pajamas:close" />
            </span>
          </div>
        </div>

        {/* ---------- Content ---------- */}
        {warDetail.map(({ id, title, register, image, desc }) => (
          <div key={id}>
            <div className="max-h-[500px] w-full overflow-auto overflow-x-hidden scrollbar-hidden md:max-h-[400px]">
              <Image
                src={image}
                alt={title}
                width={1000}
                height={1000}
                draggable="false"
                placeholder="blur"
                priority={true}
                className="rounded-md w-full md:max-w-[350px] mx-auto"
              />
              <pre className="w-full mt-3 whitespace-pre-line text-sm sm:text-base">
                {desc}
              </pre>
            </div>

            <Link href={register} className="block w-full mt-2 sm:mt-3 ip:mt-4">
              <button className="rounded-lg bg-primary w-full font-semibold py-2 sm:py-3 transition-all ease-linear hover:bg-primary/90">
                Daftar Sekarang
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
