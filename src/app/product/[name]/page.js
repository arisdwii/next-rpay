import { FF } from "@/pages/Product/Game/FF";

export const metadata = {
  title: "TopUp Free Fire || RPay Voucher",
  description:
    "TopUp game Free Fire dengan harga yang sangat murah di planet bumi",
};

export default function page() {
  return (
    <main className="flex flex-col gap-5 my-[70px] sm:my-[90px] md:my-24">
      <FF />
    </main>
  );
}
