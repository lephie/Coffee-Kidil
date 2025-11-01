import Image from "next/image";
import Link from "next/link";

export default function ProfileMenu() {
  const menuItems = [
    { icon: "👤", label: "Profile", link: "/Detail" }, // arahkan ke halaman detail
    { icon: "🎟️", label: "Promo", link: "/Promo" },
    { icon: "💬", label: "Customer Service", link: "/sevice" },
    { icon: "⚙️", label: "Setting" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center font-sans">
      {/* Header */}
      <div className="relative w-full h-36 flex flex-col justify-center items-center text-center">
        <Image src="/images/foto.png" alt="Profile Banner" width={375} height={100} />
        <div className="absolute bottom-[-35px] flex justify-center items-center">
          <div className="bg-white border-4 border-sky-400 rounded-full p-2">
            <div className="bg-gray-200 w-16 h-16 rounded-full flex justify-center items-center text-3xl">
              👤
            </div>
          </div>
          </div>
      </div>

      {/* Info User */}
      <div className="mt-14 bg-white rounded-xl shadow-sm w-80 px-4 py-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-800">Username</p>
            <p className="text-gray-500 text-sm">1346534566</p>
          </div>
          <span className="text-gray-400 text-lg">›</span>
        </div>
      </div>

      {/* Menu List */}
      <div className="mt-5 bg-white rounded-xl shadow-sm w-80 divide-y divide-gray-200">
        {menuItems.map((item, index) => {
          const content = (
            <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition">
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </div>
              <span className="text-gray-400 text-lg">›</span>
            </div>
          );

          return item.link ? (
            <Link href={item.link} key={index}>
              {content}
            </Link>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>

      
    </div>
  );
}
