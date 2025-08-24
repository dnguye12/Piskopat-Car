import { Link } from "react-router";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MenuIcon, XIcon } from "lucide-react";
import ThemeToggle from "./theme-toggle";

interface NavbarTriggerProps {
    text: string
}

const NavbarTrigger = ({ text }: NavbarTriggerProps) => {
    return (
        <NavigationMenuTrigger className="!bg-transparent hover:bg-main! dark:hover:bg-transparent! transition-all !text-base hover:font-semibold dark:hover:text-main">
            {text}
        </NavigationMenuTrigger>
    )
}

interface NavbarItemProps {
    to: string;
    text: string
}

const NavbarItem = ({ to, text }: NavbarItemProps) => {
    return (
        <Button size={"lg"} variant={"ghost"} className="hover:bg-main! dark:hover:bg-transparent! transition-all ml-4" asChild>
            <Link to={to} className="!text-base hover:font-semibold dark:hover:text-main transition-all">{text}</Link>
        </Button>
    )
}

const Navbar = () => {
    return (
        <header className="w-screen py-4 bg-accent/66 backdrop-blur-3xl fixed top-0 left-0 right-0 h-[88px] z-50 border border-b">
            <div className="relative container mx-auto hidden lg:flex justify-between items-center px-4">
                <Link to="/" className="inline-flex items-center gap-x-2">
                    <img src="/logo-black.svg" alt="" className="block dark:hidden h-14 w-auto fill-neutral-900" />
                    <img src="/logo-dark-no-text.svg" alt="" className="hidden dark:block h-14 w-auto" />
                    <span className="text-xl font-semibold text-neutral-900 dark:text-main">X-Sportwagen</span>
                </Link>
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <NavbarItem to="/" text="Startseite" />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavbarTrigger text="Fahrzeuge" />
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <NavbarItem to="/fahrzeuge" text="Alle Fahrzeuge" />
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <NavbarItem to="/fahrzeuge/vw_golf_8" text="VW Golf 8" />
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <NavbarItem to="/kontakt" text="Kontakt" />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <NavbarItem to="/faq" text="FAQ" />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-x-2">
                    <Button size={"lg"} variant={"main"} className="h-12 cursor-pointer font-semibold shadow" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Sportwagen mieten</a></Button>
                    <Separator orientation="vertical" className="!h-12 mx-1" />
                    <ThemeToggle />
                    {/* 
                    <TooltipContainer trigger={
                        <Button size={"icon"} variant={"outline"} className="size-12">
                            <GlobeIcon className="size-5" />
                        </Button>
                    } content={"Sprache"} />*/}

                </div>
            </div>
            <div className="relative container mx-auto flex lg:hidden justify-between items-center px-4">
                <Link to="/" className="inline-flex items-center gap-x-2">
                    <img src="/logo-black.svg" alt="" className="block dark:hidden h-14 w-auto fill-neutral-900" />
                    <img src="/logo-dark-no-text.svg" alt="" className="hidden dark:block h-14 w-auto" />
                    <span className="text-xl font-semibold text-neutral-900 dark:text-main">X-Sportwagen</span>
                </Link>
                <div className="flex items-center gap-x-2">
                    <Drawer direction="left">
                        <DrawerTrigger asChild>
                            <Button size={"icon"} variant={"outline"} className="size-12 cursor-pointer">
                                <MenuIcon className="size-5" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="!w-screen !h-screen !max-w-screen bg-sidebar">
                            <div className="w-full h-full relative">
                                <DrawerHeader className="p-6 flex-row items-center justify-between">
                                    <Link to="/" className="inline-flex items-center gap-x-2">
                                        <img src="/logo-black.svg" alt="" className="block dark:hidden h-14 w-auto fill-neutral-900" />
                                        <img src="/logo-dark-no-text.svg" alt="" className="hidden dark:block h-14 w-auto" />
                                        <span className="text-xl font-semibold text-neutral-900 dark:text-main">X-Sportwagen</span>
                                    </Link>
                                    <DrawerClose asChild>
                                        <Button variant={"main-outline"} size={"icon"}><XIcon /></Button>
                                    </DrawerClose>
                                </DrawerHeader>
                                <nav className="flex flex-col items-start gap-y-2">
                                    <NavbarItem to="/" text="Startseite" />
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="mb-nav-Fahrzeuge" className="border-b-0">
                                            <AccordionTrigger className="px-6 py-0 h-10 ml-4 items-center hover:bg-main! dark:hover:bg-transparent! !text-base hover:font-semibold dark:hover:text-main transition-all">
                                                Fahrzeuge
                                            </AccordionTrigger>
                                            <AccordionContent className="p-0 ml-4">
                                                <div className="flex flex-col items-start">
                                                    <NavbarItem to="/fahrzeuge" text="Alle Fahrzeuge" />
                                                    <NavbarItem to="/fahrzeuge/vw_golf_8" text="VW Golf 8" />
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <NavbarItem to="/kontakt" text="Kontakt" />
                                </nav>
                                <div className="px-6">
                                    <Separator className="my-6" />
                                </div>
                                <div className="flex items-center px-6 gap-x-3">
                                    <Button size={"lg"} variant={"main"} className="h-12 cursor-pointer font-semibold shadow" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Sportwagen mieten</a></Button>
                                    <ThemeToggle />
                                    {/*
                                    <Button size={"icon"} variant={"outline"} className="size-12">
                                        <GlobeIcon className="size-5" />
                                    </Button>*/}
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    );
}

export default Navbar;