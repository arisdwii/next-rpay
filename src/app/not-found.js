import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-center px-4 lg:px-0">
        <h1 className="font-bold text-2xl">404</h1>
        <h1 className="font-semibold text-xl mt-3">
          Ups... Halaman yang kamu cari tidak ditemukan😭
        </h1>
        <button className="px-4 py-2 bg-transparent rounded-full border border-gelap mt-5 text-sm sm:px-6 sm:border-2 sm:text-base dark:border-putih">
          <Link href="/" className="font-medium">
            Kembali ke Beranda
          </Link>
        </button>
      </div>
    </div>
  );
}
