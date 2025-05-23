"use client";

import LoadingButton from "@/components/loading-button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
          <NavigationMenuItem>
            <NavigationMenuLink
              active={isHomeActive}
              onClick={() => startTransition(() => {})}
              className="p-0 overflow-hidden"
            >
              <div>
                <LoadingButton
                  loading={isPending}
                  variant={"ghost"}
                  className={cn(
                    "p-0 ",
                    isHomeActive && "pointer-events-none uppercase",
                    isPending && "ps-3 "
                  )}
                >
                  <Link
                    href={homeUrl}
                    passHref
                    className=" size-full px-3 py-2"
                  >
                    Home{" "}
                  </Link>
                </LoadingButton>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {navLinks.map((navLink) => {
            return <NavMenuItem key={navLink.url} navLink={navLink} />;
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
}

function NavMenuItem({ navLink: { url, title } }: NavMenuItemProps) {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const { getNavigationLinkWithPathnameWithoutUpdate } =
    useCustomSearchParams();
  const modifiedUrl = getNavigationLinkWithPathnameWithoutUpdate(`${url}`);
  const isActive = pathname.startsWith(url) && pathname !== "/";

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        active={isActive}
        disabled={pathname===url}
        onClick={() => startTransition(() => {})}
        className="p-0 " // className={navigationMenuTriggerStyle()}
        
      >
        <div>
          <LoadingButton
            loading={isPending}
            variant={"ghost"}
            className={cn(
              "p-0",
              isActive &&  " uppercase",
              isPending && "ps-3"
            )}
          >
            <Link href={modifiedUrl} className=" size-full px-3 py-2 ">
             {title}
            </Link>
          </LoadingButton>
        </div>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
