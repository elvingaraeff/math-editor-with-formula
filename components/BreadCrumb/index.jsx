import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Breadcrumb({ data }) {
  return (
    <div className="flex h-5 items-center space-x-4 text-sm p-4 my-4">
      {data?.map((item, i) => (
        <Link
          href={item.link}
          className="flex h-5 items-center space-x-4 text-sm"
          key={i}
        >
          <div className="text-[12px] font-medium">{item.text}</div>
          {data?.length - 1 !== i && <Separator orientation="vertical" />}
        </Link>
      ))}
    </div>
  );
}
