"use client";

import { LogInForm } from "@/components/organisms/LogInForm";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center min-h-screen">
      <div className="hidden lg:flex h-full w-full col-span-2 bg-[url('/images/section2-3.jpg')] bg-cover bg-center"></div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div>
          <h1 className="flex items-center gap-2 font-bold text-2xl">
            Bienvenido a <img className="w-12" src="/logos/isologotipo.png" />
          </h1>
        </div>
        <div>
          <LogInForm />
        </div>
      </div>
    </div>
  );
}
