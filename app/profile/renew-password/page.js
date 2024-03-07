"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

export default function ProfileBlock() {
  const pathname = usePathname();
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
    <main className="flex pt-[100px] items-center justify-center">
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
        <div className="right p-8 w-[400px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mb-8 w-full"
            >
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5 mb-4">
                    <FormLabel>Hazırkı şifrə</FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:normal-case uppercase"
                        placeholder="Hazırkı şifrəni daxil edin"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5 mb-4">
                    <FormLabel>Yeni şifrə</FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:normal-case uppercase"
                        placeholder="Yeni şifrənizi daxil edin"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5 mb-4">
                    <FormLabel>Yeni şifrənin təkrarı</FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:normal-case uppercase"
                        placeholder="Yeni şifrənin təkrarını daxil edin"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] font-normal" />
                  </FormItem>
                )}
              />
              <Button className="w-full flex items-center" disabled={loading}>
                {loading && <Loader2Icon className="w-[16px] animate-spin" />}
                <span className="ml-2">Yenilə</span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
