"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Globe, Menu } from "lucide-react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { products, resources } from "./header";
import { Button } from "./ui/button";

export function MobileHeader() {
  const [openMenu, setIsOpenMenu] = React.useState(false);

  return (
    <header
      className={cn(
        "lg:hidden py-5 z-50 bg-white h-[88px] items-center sticky left-0 right-0 top-0"
      )}
    >
      <div className=" container flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" width={164} height={62} />
          </Link>
        </div>
        <div className=" hidden lg:block">
          <NavigationsLinks setIsOpenMenu={setIsOpenMenu} />
        </div>

        <div className=" lg:hidden">
          <Sheet open={openMenu} onOpenChange={setIsOpenMenu}>
            <SheetTrigger asChild>
              <button>
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <NavigationsLinks setIsOpenMenu={setIsOpenMenu} />
              <div className="flex items-center flex-col gap-4">
                <Link href={"/login"} passHref legacyBehavior>
                  <Button variant={"outline"}>Login</Button>
                </Link>
                <Link href={"/login"} passHref legacyBehavior>
                  <Button className="gap-x-2">
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM21 6H18V3H16V6H13V8H16V11H18V8H21V6Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </Button>
                </Link>
                <div className="flex items-center gap-2">
                  <Globe size={20} color="#353E4C" />
                  <Select>
                    <SelectTrigger className="w-[50px] text-skin-neutral-800 px-0 border-none">
                      <SelectValue placeholder="Eng"></SelectValue>
                    </SelectTrigger>
                    <SelectContent align="end" className="">
                      <SelectItem value="eng">Eng</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const AuthMenu: React.FC<NavigationsLinksProps> = ({ setIsOpenMenu }) => (
  <div className=" flex flex-col lg:flex-row lg:items-center gap-4">
    <button
      className="text-sm uppercase font-semibold text-white py-1 px-2 bg-skin-blue"
      onClick={() => setIsOpenMenu(false)}
    >
      Let’s Start
    </button>
  </div>
);
interface NavigationsLinksProps {
  setIsOpenMenu: (isOpen: boolean) => void;
}
const NavigationsLinks: React.FC<NavigationsLinksProps> = ({
  setIsOpenMenu,
}) => {
  const router = useRouter();
  return (
    <NavigationMenu className=" w-full mx-auto lg:mx-0">
      <NavigationMenuList className="flex-col gap-4 lg:flex-row">
        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <NavigationMenuTrigger onClick={() => router.push("/products")}>
                Products
              </NavigationMenuTrigger>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-full min-w-[200px] flex flex-col items-center">
              {products.map((component) => (
                <DropdownMenuItem className=" list-none" key={component.title}>
                  <ListItem
                    className=" list-none"
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>

        <NavigationMenuItem onClick={() => setIsOpenMenu(false)}>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <NavigationMenuTrigger onClick={() => router.push("/resources")}>
                Resources
              </NavigationMenuTrigger>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-full min-w-[200px] flex flex-col items-center">
              {resources.map((component) => (
                <DropdownMenuItem className=" list-none" key={component.title}>
                  <ListItem
                    className=" list-none"
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
        <AuthMenu setIsOpenMenu={setIsOpenMenu} />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
