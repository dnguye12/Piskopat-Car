import { Link } from "react-router";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-sidebar px-6 py-12 border border-t">
            <div className="container mx-auto ">
                <div className=" grid grid-cols-2">
                    <div className="flex flex-col gap-y-5">
                        <h5 className=" text-3xl font-semibold">SIE MÖCHTEN SCHON BALD IHREN TRAUMWAGEN FAHREN?</h5>
                        <p className=" text-muted-foreground">Erleben Sie Ihren Traumwagen hautnah! Kontaktieren Sie uns & sichern sich ein unvergessliches Fahrerlebnis. Auf Wunsch begleitet Sie ein erfahrener Instruktor!</p>
                    </div>
                    <div className="flex justify-end items-center gap-x-2">
                        <Button size={"lg"} variant={"main"} className="h-12 cursor-pointer font-semibold shadow" asChild><Link to="">Sportwagen mieten</Link></Button>
                        <Button size={"lg"} variant={"outline"} className="h-12 cursor-pointer font-semibold shadow" asChild><Link to="">Kontakt</Link></Button>
                    </div>
                </div>
                <Separator className="my-12" />
                <div className="flex justify-between items-start">
                    <div className="">
                        <div className="inline-flex items-center gap-x-2">
                            <img src="/logo-black.svg" alt="" className="block dark:hidden h-14 w-auto fill-black" />
                            <img src="/logo-dark-no-text.svg" alt="" className="hidden dark:block h-14 w-auto" />
                            <span className="text-xl font-semibold dark:text-main">X-Sportwagen</span>
                        </div>
                        <p className="text-muted-foreground">@ X-Sportwagen 2025. Alle Rechte vorbehalten.</p>
                    </div>
                    <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
                        <div className="flex gap-x-20">
                            <div className="h-fit">
                                <h4 className="mb-3 whitespace-nowrap text-base font-semibold">Kontakt</h4>
                                <ul className="text-muted-foreground space-y-3 text-base font-medium">
                                    <li className="flex items-center gap-x-1"><MapPinIcon className="dark:text-main"/> Wulfsbergstr 1a, 59320 Ennigerloh</li>
                                    <li className="flex items-center gap-x-1"><MailIcon className="dark:text-main"/> info@xsportwagen.de</li>
                                    <li className="flex items-center gap-x-1"><PhoneCallIcon className="dark:text-main"/> +49 176 72223678</li>
                                </ul>
                            </div>
                            <div className="h-fit">
                                <h4 className="mb-3 whitespace-nowrap text-base font-semibold">Links</h4>
                                <ul className="text-muted-foreground space-y-3 text-base font-medium">
                                    <li><Link to="" className="hover:text-main transition-all">Fahrzeuge</Link></li>
                                    <li><Link to="" className="hover:text-main transition-all">Kontakt</Link></li>
                                    <li><Link to="" className="hover:text-main transition-all">Impressum</Link></li>
                                    <li><Link to="" className="hover:text-main transition-all">Datenschutz</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;