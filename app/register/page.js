"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import LoginVector from "@/public/images/login-vector.svg";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginService } from "../api/User/Login";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { PersonalDatas, RenewPersonalData } from "@/store/atoms";
import { useAtom } from "jotai";
import { setCookie } from "cookies-next";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { WizardRegister } from "@/blocks/WizardRegister";

const formSchema = z.object({
  password: z.string().min(2, {
    message: "Şifrə xanası boş ola bilməz",
  }),
  pin: z.string().min(7, {
    message: "Fin kodu doğru daxil edin",
  }),
});

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [newPersonalData, setNewPersonalData] = useAtom(RenewPersonalData);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pin: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);

    router.push("/dashboard");

    // try {
    //   const response = await UserLoginService(values);

    //   if (response.status === 400) {
    //     if (response?.data?.message === "Wrong credentials!") {
    //       toast({
    //         variant: "destructive",
    //         title: "Xəta baş verdi",
    //         description: "Fin kod və şifrəni düzgün daxil edin",
    //       });
    //     }
    //   }
    //   if (response.status === 200) {
    //     setNewPersonalData(newPersonalData + 1);
    //     setCookie("accessToken", response?.data?.data?.token);
    //   }
    // } catch (error) {
    //   console.error("Bir hata oluştu:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <section className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="login-page-card w-[1000px] h-[550px] border rounded-[20px] overflow-hidden flex">
        <div className="w-1/2 px-8 flex border-r border-gray-200 items-center justify-center flex-col">
          <div className="title-part flex flex-col justify-center items-center">
            <h4 className="text-[30px] font-semibold">Qeydiyyat</h4>
            <p className="text-[12px] text-gray-400">
              Qeydiyyatdan keçmək üçün aşağıdakı məlumatları doldurun
            </p>
          </div>

          <WizardRegister />

          <div className="not-account text-[14px] text-gray-400">
            Əgər hesabınız varsa,
            <Link href="/login" className="font-medium text-black">
              Daxil olun
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image src={LoginVector} priority alt="Login vector" />
        </div>
      </div>
    </section>
  );
}
