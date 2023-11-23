export const dataGameFF = [
  {
    title: "Free Fire",
    image: require("/public/game/ff.png"),
    searchId: require("/public/user-id/id-ff.webp"),
    process: "proses otomatis",
    howtopup: `1. Masukkan ID User Game Kamu.
      2. Pilih Jumlah diamonds yang diinginkan.
      3. Pilih Metode Pembayaran.
      4. Tulis nomor WhatsApp dengan benar.
      5. Klik Beli Sekarang & lakukan Pembayaran.
      6. Diamonds akan masuk otomatis ke akun anda.`,
    desc: "Free Fire adalah sebuah permainan battle royale yang dikembangkan oleh Garena. Ini adalah game seluler yang dapat dimainkan secara gratis, dan tersedia untuk platform Android dan iOS. Free Fire menjadi sangat populer di kalangan pengguna ponsel pintar dan telah menarik jutaan pemain di seluruh dunia.",
    product: [
      {
        id: 1,
        denom: "5 Diamonds",
        price: "900",
      },
      {
        id: 2,
        denom: "20 Diamonds",
        price: "3,550",
      },
      {
        id: 3,
        denom: "50 Diamonds",
        price: "7,000",
      },
      {
        id: 4,
        denom: "70 Diamonds",
        price: "9,600",
      },
      {
        id: 5,
        denom: "140 Diamonds",
        price: "19,200",
      },
      {
        id: 6,
        denom: "355 Diamonds",
        price: "46,500",
      },
      {
        id: 7,
        denom: "720 Diamonds",
        price: "93,000",
      },
      {
        id: 8,
        denom: "7290 Diamonds",
        price: "930,000",
      },
      {
        id: 9,
        denom: "36500 Diamonds",
        price: "4,650,000",
      },
      {
        id: 10,
        denom: "Member Mingguan",
        price: "29,100",
      },
      {
        id: 11,
        denom: "Member Bulanan",
        price: "87,300",
      },
      {
        id: 12,
        denom: "BP Card",
        price: "44,000",
      },
    ],
    payment: [
      {
        id: 1,
        title: "QRIS",
        image: require("/public/Pembayaran/qris.png"),
        outlet: [
          {
            id: 1,
            image: require("/public/Pembayaran/qris.png"),
            name: "QRIS",
          },
        ],
      },
      {
        id: 2,
        title: "Virtual Account",
        outlet: [
          {
            id: 1,
            image: require("/public/Pembayaran/bca.png"),
            name: "BCA Virtual Account",
          },
          {
            id: 2,
            image: require("/public/Pembayaran/bni.png"),
            name: "BNI Virtual Account",
          },
          {
            id: 3,
            image: require("/public/Pembayaran/bri.png"),
            name: "BRI Virtual Account",
          },
          {
            id: 4,
            image: require("/public/Pembayaran/mandiri.png"),
            name: "Mandiri Virtual Account",
          },
        ],
      },
      {
        id: 3,
        title: "Supermarket",
        outlet: [
          {
            id: 1,
            image: require("/public/Pembayaran/alfamart.png"),
            name: "Alfamart",
          },
          {
            id: 2,
            image: require("/public/Pembayaran/indomaret.png"),
            name: "Indomaret",
          },
        ],
      },
      {
        id: 4,
        title: "E - Wallet",
        outlet: [
          {
            id: 1,
            image: require("/public/Pembayaran/dana.png"),
            name: "Dana",
          },
          {
            id: 2,
            image: require("/public/Pembayaran/linkaja.png"),
            name: "Link Aja",
          },
          {
            id: 3,
            image: require("/public/Pembayaran/ovo.webp"),
            name: "OVO",
          },
          {
            id: 4,
            image: require("/public/Pembayaran/shopeepay.png"),
            name: "ShopeePay",
          },
        ],
      },
      {
        id: 5,
        title: "Pulsa",
        outlet: [
          {
            id: 1,
            image: require("/public/Pembayaran/3.webp"),
            name: "3",
          },
          {
            id: 2,
            image: require("/public/Pembayaran/telkomsel.png"),
            name: "Telkomsel",
          },
          {
            id: 3,
            image: require("/public/Pembayaran/xl-axis.jpg"),
            name: "XL/Axis",
          },
        ],
      },
    ],
  },
];
