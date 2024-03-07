"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileBlock() {
  const pathname = usePathname();

  const navigation = [
    {
      text: "Profilim",
      slug: "/profile",
    },
    {
      text: "Kabinetim",
      slug: "/dashboard",
    },
    {
      text: "Telefon",
      slug: "/profile/renew-phone-number",
    },
    {
      text: "Email",
      slug: "/profile/renew-email",
    },
    {
      text: "Şifrə",
      slug: "/profile/renew-password",
    },
  ];
  return (
    <div className="profile-block login-page-card w-[1000px] h-[500px] border rounded-[20px] overflow-hidden flex">
      <div className="left w-[300px] border-r border-gray-200 flex flex-col p-8">
        {navigation?.map((item, i) => (
          <Link
            href={item.slug}
            key={i}
            className={`text-[16px] font-medium flex items-center h-[40px] border-b ${
              item.slug === pathname ? "text-[#1a3efb] font-medium" : ""
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="right p-8">
        <div className="form mb-4">
          <span className="text-[12px] font-semibold">Ad soyad</span>
          <p>Elvin Qarayev Elnur oğlu</p>
        </div>
        <div className="form mb-4">
          <span className="text-[12px] font-semibold">Mobil nömrə</span>
          <p>+994559050404</p>
        </div>
        <div className="form mb-4">
          <span className="text-[12px] font-semibold">Email</span>
          <p>elvin.garaeff@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
