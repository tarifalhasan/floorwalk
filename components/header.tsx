"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import * as React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Globe, Menu } from "lucide-react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const products: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Talent Acquisition",
    href: "/services/business-intelligent",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Digital Transformation Services",
    href: "/services/digital-transformation",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Custom Application Development",
    href: "/services/custom-application-development",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Intelligent Automation",
    href: "/services/intelligent-automation",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Managed Services",
    href: "/services/edi-managed-services",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "EDI Modernisation",
    href: "/services/edi-modaration",
    description:
      "Embrace the future with SwiftAnt's EDI Modernization, overcoming legacy EDI limitations like high maintenance costs and lack of analytics. Transition to real-time data exchange and enhanced supply chain operations with AI-powered, API-enabled platforms. We modernize your EDI systems, integrating seamlessly with ERP, WMS, and TMS systems, ensuring agility and real-time analytics for a truly digital transformation",
  },
];

export const resources: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "TaaaS",
    href: "platforms/taas",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Afrisure",
    href: "platforms/afrisure",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "PrimeZ",
    href: "platforms/PrimeZ",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "SwiftB2B",
    href: "platforms/SwiftB2B",
    description: "Visually or semantically separates content.",
  },
  {
    title: "InnoYantra",
    href: "platforms/innoYantra",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

export function MainHeader() {
  const [header, setHeader] = React.useState(false);
  const [openMenu, setIsOpenMenu] = React.useState(false);
  const [activeTrigger, setActiveTrigger] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        " hidden lg:flex py-5 border-b border-skin-gray-20 z-50 h-[88px] items-center    sticky left-0 right-0 top-0",
        header ? "backdrop-blur-sm bg-white/[0.8] " : ""
      )}
    >
      <div className=" container flex items-center justify-between">
        <div className="inline-flex items-center gap-7">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" width={164} height={62} />
          </Link>
          <div className=" hidden lg:block">
            <NavigationsLinks
              activeTrigger={activeTrigger}
              setActiveTrigger={setActiveTrigger}
              setIsOpenMenu={setIsOpenMenu}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
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

        <div className=" lg:hidden">
          <Sheet open={openMenu} onOpenChange={setIsOpenMenu}>
            <SheetTrigger asChild>
              <button>
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent>
              <NavigationsLinks
                activeTrigger={activeTrigger}
                setActiveTrigger={setActiveTrigger}
                setIsOpenMenu={setIsOpenMenu}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
interface AuthNavigationsLinksProps {
  setIsOpenMenu: (isOpen: boolean) => void;
}

const AuthMenu: React.FC<AuthNavigationsLinksProps> = ({ setIsOpenMenu }) => (
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
  activeTrigger: string | null;
  setActiveTrigger: (trigger: string | null) => void;
}

const NavigationsLinks: React.FC<NavigationsLinksProps> = ({
  setIsOpenMenu,

  setActiveTrigger,
}) => {
  const router = useRouter();
  return (
    <NavigationMenu className=" w-full mx-auto lg:mx-0">
      <NavigationMenuList className="flex-col gap-4 lg:flex-row">
        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={() => router.push("/services")}>
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[316px]   ">
              {products.map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  href={link.href}
                  onClick={() => setActiveTrigger("products")}
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem onClick={() => setIsOpenMenu(false)}>
          <Link href="/case-studies" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem onClick={() => setIsOpenMenu(false)}>
          <NavigationMenuTrigger onClick={() => router.push("/platforms")}>
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[316px]  ">
              {resources.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <AuthMenu setIsOpenMenu={setIsOpenMenu} />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <Link href={href || "#"} passHref legacyBehavior>
        <NavigationMenuLink
          className="lg:text-base text-skin-neutral-800 font-normal "
          asChild
        >
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 lg:text-base text-skin-neutral-800 font-normal  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm leading-none lg:text-base text-skin-neutral-800 font-normal ">
              {title}
            </div>
          </a>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
