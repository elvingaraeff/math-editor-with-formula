import { LogOut, User } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import Link from "next/link";

export default function TitleBar({ title }) {
  return (
    <div className="title-bar p-4 border-b border-border/40 h-[60px] flex items-center justify-between">
      <div className="left text-[20px] font-semibold">{title}</div>

      <div className="right flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="ring-0 outline-0">
            <div className="name flex items-center gap-2 ring-0 outline-0">
              <span className="font-medium uppercase">
                Qarayev Elvin Elnur oğlu
              </span>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>EG</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/profile" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Profilim</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/login" className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
