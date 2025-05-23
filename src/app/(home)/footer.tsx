'use client'
import { webName } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();
  const copyright = `Copyright © ${year} ${webName}`;
  return (
    <footer className=" px-4   w-full flex flex-col  bg-stone-800 py-3 text-stone-50 dark:text-stone-300 dark:bg-stone-800/50">
      <div className="w-full max-w-7xl mx-auto">
        <p className="text-center w-full">{copyright}</p>
      </div>
    </footer>
  );
}
