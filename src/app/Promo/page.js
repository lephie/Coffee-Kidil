import Image from "next/image";

export default function PromoPage() {
  // daftar promo bisa kamu ubah sesuai kebutuhan
  const promos = [
    {
      id: 1,
      title: "Diskon 50% 🥤",
      desc: "Nikmati potongan harga spesial untuk semua jenis kue hari ini saja!",
      image: "/images/promo.png",
    },
    {
      id: 2,
      title: "Beli 2 Gratis 1 🎁",
      desc: "Setiap pembelian 2 coffe ukuran sedang dapat 1 coffe kecil gratis.",
      image: "/images/promo2.png",
    },
    {
      id: 3,
      title: "Gratis Ongkir 🚚",
      desc: "Dapatkan pengiriman gratis untuk pemesanan di atas Rp100.000.",
      image: "/images/promo3.png",
    },
    {
      id: 4,
      title: "Promo 25% 📅",
      desc: "Diskon 25% untuk setiap hari rabu.",
      image: "/images/promo4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-sky-600 mb-6">Promo Spesial Hari Ini 🎊</h1>

      {/* Grid promo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-xl shadow-md p-4 w-80 hover:shadow-lg transition"
          >
            <Image
              src={promo.image}
              alt={promo.title}
              width={320}
              height={200}
              className="rounded-lg mb-3 object-cover"
            />
            <h2 className="text-lg font-semibold text-gray-800">{promo.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{promo.desc}</p>
          </div>
        ))}
      </div>

      
    </div>
    
  );
}
