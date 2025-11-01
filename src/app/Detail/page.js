import Image from "next/image";
import Link from "next/link";

export default function ProfileDetail() {
  const user = {
    name: "Farabi Afgan",
    email: "farabi@gmail.com",
    phone: "081234567890",
    address: "Jl. situ lah pokoknya",
    joined: "tahun jebot",
     // ganti dengan gambar profil kamu
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 font-sans">
      {/* Header */}
      <div className="w-80 bg-white rounded-xl shadow p-5 text-center">
        <div className="flex justify-center mb-4">
         👤
        </div>
        <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </div>

      {/* Info Section */}
      <div className="w-80 bg-white rounded-xl shadow p-5 mt-5 space-y-3">
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-700">Nomor Telepon</span>
          <span className="text-gray-600">{user.phone}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-700">Alamat</span>
          <span className="text-gray-600 text-right w-40">{user.address}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Bergabung Sejak</span>
          <span className="text-gray-600">{user.joined}</span>
        </div>
      </div>

      {/* Back Button */}
      <Link href="/Profile" className="mt-6 text-sky-600 hover:underline">
        ← Kembali ke Menu Profile
      </Link>
    </div>
  );
}
