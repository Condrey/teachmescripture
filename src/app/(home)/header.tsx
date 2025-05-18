"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { url: string; title: string };

export default function Header() {
  const navLinks: NavLink[] = [
    { title: "Bible Studies", url: "/bible-study" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  const { getNavigationLinkWithPathnameWithoutUpdate } =
    useCustomSearchParams();
  const pathname = usePathname();
  const isHomeActive = pathname === "/";

  return (
    <div className="w-full py-2 sticky top-0 bg-background/10 backdrop-blur-md z-50">
      <NavigationMenu className="w-full max-w-7xl mx-auto  flex justify-between">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" passHref>
              <NavigationMenuLink
                active={isHomeActive}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {navLinks.map(({ url, title }) => {
            const modifiedUrl =
               getNavigationLinkWithPathnameWithoutUpdate(`${url}`);
            const isActive = pathname.startsWith(url) && pathname !== "/";
            return (
              <NavigationMenuItem key={url} >
                <Link href={modifiedUrl} >
                  <NavigationMenuLink
                    active={isActive}
                    // className={navigationMenuTriggerStyle()}
                  >
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
