"use client";

import { Cog, Presentation, School, ShieldQuestion } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftSideBar() {
  const pathname = usePathname();

  const data = [
    {
      text: "Ana səhifə",
      icon: <School width={18} />,
      link: "/dashboard",
    },
    {
      text: "Suallar",
      icon: <ShieldQuestion width={18} />,
      link: "/dashboard/questions",
    },
    {
      text: "İmtahanlar",
      icon: <Presentation width={18} />,
      link: "/dashboard/exams",
    },
  ];
  return (
    <aside className="w-[250px] border-r bg-black fixed h-screen top-0 left-0">
      <div className="logo h-[60px] border-b border-border/40 text-white flex items-center px-4">
        CRM
      </div>
      <div className="navbar p-4 flex flex-col gap-1">
        {data?.map((item, i) => (
          <Link
            key={i}
            className={`flex text-[14px] text-white gap-2 items-center h-[40px] px-4 rounded-md border border-black hover:border-[rgba(255,255,255,.2)] ${
              pathname === item.link ? "bg-[#27272a] pointer-events-none" : ""
            }`}
            href={item.link}
          >
            {item.icon}
            <span className="font-medium">{item.text}</span>
          </Link>
        ))}
      </div>

      <div className="bottom absolute left-0 bottom-0 p-4 w-full">
        <Link
          className={`flex text-[14px] text-white gap-2 items-center h-[40px] border border-[rgba(255,255,255,.2)] transition px-4 rounded-md hover:bg-[#27272a] hover:border-[#27272a]`}
          href="/settings"
        >
          <Cog width={18} />
          <span>Tənzimləmələr</span>
        </Link>
        <span className="text-[rgba(255,255,255,.5)] text-[12px] block mt-4">
          Version 1.0.0
        </span>
      </div>
    </aside>
  );
}
