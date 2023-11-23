import "./globals.css";
import { ForFirstLayout } from "@/components/ForFirstLayout";

export const metadata = {
  title: "RPay Voucher",
  description: "Topup Produk Game/PPOB Termurah di Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ForFirstLayout>{children}</ForFirstLayout>
      </body>
    </html>
  );
}
