"use client";

import LoadingButton from "@/components/loading-button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "react";

type NavLink = { url: string; title: string };

export default function Header() {
  const navLinks: NavLink[] = [
    { title: "Bible Studies", url: "/bible-study" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  const { getNavigationLinkWithPathnameWithoutUpdate } =
    useCustomSearchParams();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const homeUrl = getNavigationLinkWithPathnameWithoutUpdate("/");

  return (
    <div className="w-full py-2 sticky top-0 bg-background/10 backdrop-blur-md z-50">
      <NavigationMenu className="w-full max-w-7xl mx-auto  flex justify-between">
        <NavigationMenuList>
           <NavMenuItem navLink={{title:'Home',url:'/'}} isActive={isHomeActive} />    
          {navLinks.map((navLink) => {
              const isActive = pathname.startsWith(navLink.url) && pathname !== "/";

            return <NavMenuItem key={navLink.url} navLink={navLink} isActive={isActive} />;
          })}
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

interface NavMenuItemProps {
  navLink: NavLink;
  isActive:boolean
}

function NavMenuItem({ navLink: { url, title },isActive }: NavMenuItemProps) {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const { getNavigationLinkWithPathnameWithoutUpdate } =
    useCustomSearchParams();
  const modifiedUrl = getNavigationLinkWithPathnameWithoutUpdate(`${url}`);

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        active={isActive}
        disabled={pathname===url}
        onClick={() => startTransition(() => {})}
         className={cn("p-0 ")}
        
      >
        <div className="flex items-center gap-0">
          <LoadingButton
            loading={isPending}
            variant={"ghost"}
            className={cn(
              "p-0 ",
              isPending && "ps-3"
            )}
          >
            <Link href={modifiedUrl} className=" size-full px-3 py-2 text-lg uppercase tracking-tight font-semibold">
      {title}
            </Link>
          </LoadingButton>
        </div>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
