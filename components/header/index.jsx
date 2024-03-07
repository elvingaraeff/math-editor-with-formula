"use client";

import Link from "next/link";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Separator } from "../ui/separator";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { useAtom } from "jotai";
import { PersonalDatas, RenewPersonalData } from "@/store/atoms";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { UserGetProfileData } from "@/app/api/User/Profile";
import { usePathname } from "next/navigation";

export default function Header() {
  const [personData, setPersonData] = useAtom(PersonalDatas);
  const [newPersonalData] = useAtom(RenewPersonalData);
  const token = getCookie("accessToken");
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    const getPersonalData = async () => {
      const response = await UserGetProfileData();
      setPersonData(response?.data?.data);
      console.log(response);
    };
    if (token) {
      getPersonalData();
    }

    console.log(token);
  }, [token, newPersonalData]);

  return (
    <>
      {!pathname.startsWith("/dashboard") ? (
        <header className="shadow-md hidden">
          <div className="container max-w-[1240px] px-[20px] py-[10px] flex items-center justify-between">
            <div className="left">
              <Link href="/" className="flex items-center">
                <Image src={Logo} width="250" priority alt="Logo" />
              </Link>
            </div>

            <div className="right flex items-center">
              <form action="#" className="relative">
                <Input placeholder="Axtar" className="w-[300px]" />
                <button className="absolute right-0 top-0 text-[18px] p-[11px]">
                  <Search className="w-[18px] h-[18px]" />
                </button>
              </form>

              <div className="flex items-center ml-6 relative">
                <Link href="/" className="hover:underline text-[14px]">
                  Əlaqə
                </Link>
                <Separator orientation="vertical" className="h-[20px] mx-3" />
                <Link href="/" className="hover:underline text-[14px]">
                  Haqqımızda
                </Link>
                <Separator orientation="vertical" className="h-[20px] mx-3" />
                {personData?.name ? (
                  <AlertDialog>
                    <DropdownMenu className="right-0">
                      <DropdownMenuTrigger asChild>
                        <div className="flex items-center cursor-pointer">
                          <Avatar className="w-[30px] h-[30px] mr-2 shadow-md border border-gray-200">
                            <AvatarImage
                              className="object-contain"
                              src={personData?.avatar}
                              alt="profile-image"
                            />
                            <AvatarFallback className="text-[12px]">
                              {`${personData?.name.split("")[0]}${
                                personData?.surname.split("")[0]
                              }`}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-[14px]">
                            {`${personData?.name} ${personData?.surname} ${personData?.patronymic}`}
                          </span>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuGroup>
                          <DropdownMenuItem>Profilim</DropdownMenuItem>
                          <DropdownMenuItem>Kabinetim</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <AlertDialogTrigger asChild>
                            <div className="w-full h-full cursor-pointer">
                              Çıxış
                            </div>
                          </AlertDialogTrigger>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Çıxış etmək istədiyinizə əminsiniz mi?
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Bəli</AlertDialogCancel>
                        <AlertDialogAction>Xeyr</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  <Link href="/login" className="hover:underline text-[14px]">
                    Daxil ol / Qeydiyyat
                  </Link>
                )}
              </div>
            </div>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}
