import { Link } from "react-router";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { GlobeIcon } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import TooltipContainer from "./tooltip-container";

interface NavbarItemProps {
    to: string;
    text: string
}

const NavbarItem = ({ to, text }: NavbarItemProps) => {
    return (
        <Button size={"lg"} variant={"ghost"} className="hover:bg-main! dark:hover:bg-transparent! transition-all" asChild>
            <Link to={to} className="!text-base hover:font-semibold dark:hover:text-main transition-all">{text}</Link>
        </Button>
    )
}

const Navbar = () => {
    return (
        <header className="w-full py-4 bg-sidebar fixed top-0 left-0 right-0 h-[88px] z-50 border border-b">
            <div className="relative container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="inline-flex items-center gap-x-2">
                    <img src="/logo-black.svg" alt="" className="block dark:hidden h-14 w-auto fill-neutral-900" />
                    <img src="/logo-dark-no-text.svg" alt="" className="hidden dark:block h-14 w-auto" />
                    <span className="text-xl font-semibold text-neutral-900 dark:text-main">X-Sportwagen</span>
                </Link>
                <nav className=" absolute top-1/2 left-1/2 -translate-1/2">
                    <NavbarItem to="/" text="Home" />
                </nav>
                <div className="flex items-center gap-x-2">
                    <Button size={"lg"} variant={"main"} className="h-12 cursor-pointer font-semibold shadow">Sportwagen mieten</Button>
                    <Separator orientation="vertical" className="!h-12 mx-1" />
                    <ThemeToggle />
                    <TooltipContainer trigger={
                        <Button size={"icon"} variant={"outline"} className="size-12">
                            <GlobeIcon className="size-5" />
                        </Button>
                    } content={"Sprache"} />

                </div>
            </div>
        </header>
    );
}

export default Navbar;