"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { components } from "../utils/Navitems";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-1 inset-shadow-xl">
      <Image src="/assets/logo.png" alt="logo" width={96} height={96} />
      <NavigationMenu className="">
        <NavigationMenuList className="flex-wrap">
          {components.map((component) => {
            return component.children!.length > 0 ? (
              <NavigationMenuItem
                key={component.id}
                className="hidden md:block text-white"
              >
                <NavigationMenuTrigger className=" bg-[#0E383B]">
                  {component.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      {component.children!.map((child) => {
                        return (
                          <NavigationMenuLink key={child.id} asChild>
                            <Link href={child.href!}>
                              <div className="font-medium">{child.title}</div>
                              <div className="text-muted-foreground">
                                {child.description}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem className="text-white" key={component.id}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} bg-[#0E383B]`}
                >
                  <Link href={component.href!}>{component.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <Button className="rounded-xl bg-[#124F54] hover:bg-[#0E383B] text-white">
        Login
      </Button>
    </div>
  );
};

export default Navbar;
