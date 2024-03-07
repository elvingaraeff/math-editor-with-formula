import ProfileBlock from "@/blocks/ProfileBlock";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="flex pt-[100px] items-center justify-center">
      <ProfileBlock />
    </main>
  );
}
