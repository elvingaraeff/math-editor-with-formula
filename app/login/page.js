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

const formSchema = z.object({
  password: z.string().min(2, {
    message: "Şifrə xanası boş ola bilməz",
  }),
  pin: z.string().min(7, {
    message: "Fin kodu doğru daxil edin",
  }),
});

export default function LoginPage() {
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
      <div className="login-page-card w-[1000px] h-[500px] border rounded-[20px] overflow-hidden flex">
        <div className="w-1/2 border-r border-gray-200 flex items-center justify-center">
          <Image src={LoginVector} priority alt="Login vector" />
        </div>
        <div className="w-1/2 px-8 flex items-center justify-center flex-col">
          <div className="title-part flex flex-col justify-center items-center">
            <h4 className="text-[30px] font-semibold">Daxil ol</h4>
            <p className="text-[12px] text-gray-400">
              Daxil olmaq üçün aşağıdakı məlumatları dolduurn
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 mb-8 w-full"
            >
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5 mb-4">
                    <FormLabel>FİN kod</FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:normal-case uppercase"
                        placeholder="Fin kodunuzu daxil edin"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5 mb-4">
                    <FormLabel>Şifrə</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Şifrənizi daxil edin"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] font-normal" />
                  </FormItem>
                )}
              />
              <Button className="w-full flex items-center" disabled={loading}>
                {loading && <Loader2Icon className="w-[16px] animate-spin" />}
                <span className="ml-2">Daxil ol</span>
              </Button>
            </form>
          </Form>

          <div className="not-account text-[14px] text-gray-400">
            Əgər hesabınız yoxdursa,
            <Link href="/register" className="font-medium text-black">
              Qeydiyyatdan keçin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
