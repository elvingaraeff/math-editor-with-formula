"use client";
import dynamic from "next/dynamic";

const TestEditor = dynamic(() => import("@/components/NewEditor"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <TestEditor />
    </main>
  );
}
