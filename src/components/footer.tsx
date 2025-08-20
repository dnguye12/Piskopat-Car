import { Link } from "react-router";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-sidebar px-6 py-6 lg:py-12 border border-t">
            <div className="container mx-auto ">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-5">
                    <div className="flex flex-col gap-y-5">
                        <h5 className="text-2xl lg:text-3xl font-semibold text-center lg:text-start">SIE MÖCHTEN SCHON BALD IHREN TRAUMWAGEN FAHREN?</h5>
                        <p className=" text-muted-foreground text-center lg:text-start">Erleben Sie Ihren Traumwagen hautnah! Kontaktieren Sie uns & sichern sich ein unvergessliches Fahrerlebnis. Auf Wunsch begleitet Sie ein erfahrener Instruktor!</p>
                    </div>
                    <div className="flex justify-center lg:justify-end items-center gap-x-2">
                        <Button size={"lg"} variant={"main"} className="h-12 cursor-pointer font-semibold shadow" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Sportwagen mieten</a></Button>
                        <Button size={"lg"} variant={"outline"} className="h-12 cursor-pointer font-semibold shadow" asChild><Link to="/kontakt">Kontakt</Link></Button>
                    </div>
                </div>
                <Separator className="my-6 lg:my-12" />
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mb-12">
                    <div className="flex flex-col md:mx-auto">
                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold">Kontakt</h4>
                        <ul className="text-muted-foreground space-y-3 text-base font-medium mb-12">
                            <li className="flex items-center gap-x-1"><MapPinIcon className="dark:text-main" /> Wulfsbergstr 1a, 59320 Ennigerloh</li>
                            <li className="flex items-center gap-x-1"><MailIcon className="dark:text-main" /> info@xsportwagen.de</li>
                            <li className="flex items-center gap-x-1"><PhoneCallIcon className="dark:text-main" /> +49 176 72223678</li>
                        </ul>

                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold hidden lg:block">FahrzeugModelle</h4>
                        <ul className="text-muted-foreground space-y-3 text-base font-medium mb-12 hidden lg:block">
                            <Link to="/fahrzeuge/vw_golf_8" className="hover:text-foreground transition-all">VW Golf 8 R</Link>
                        </ul>

                        <div className="hidden lg:inline-flex items-center gap-x-2">
                            <img src="/logo-black.svg" alt="" className="block dark:hidden h-14 w-auto fill-black" />
                            <img src="/logo-dark-no-text.svg" alt="" className="hidden dark:block h-14 w-auto" />
                            <span className="text-xl font-semibold dark:text-main">X-Sportwagen</span>
                        </div>
                        <div>
                            <p className="hidden lg:block text-muted-foreground">@ X-Sportwagen 2025. Alle Rechte vorbehalten.</p>

                        </div>

                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold block lg:hidden">Rechtliches</h4>
                        <div className="text-muted-foreground flex lg:hidden flex-col gap-y-3 text-base font-medium mb-0 md:mb-12">
                            <Link to="/impressum" className="hover:text-foreground transition-all">Impressum</Link>
                            <Link to="/datenschutz" className="hover:text-foreground transition-all">Datenschutz</Link>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col md:mx-auto">
                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold">Sportwagen mieten</h4>
                        <div className="text-muted-foreground flex flex-col gap-y-3 text-base font-medium">
                            <Link to="/sportwagen-mieten" className="hover:text-foreground transition-all">Sportwagen mieten Ennigerloh</Link>
                            <Link to="/sportwagen-mieten" className="hover:text-foreground transition-all">Sportwagenvermietung</Link>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto">
                        <div className="h-6 mb-3"></div>
                        <div className="text-muted-foreground hidden lg:flex flex-col gap-y-3 text-base font-medium">
                            <Link to="/hochzeitsmiete" className="hover:text-foreground transition-all">Hochzeitsauto mieten</Link>
                            <Link to="/sportwagen-mieten" className="hover:text-foreground transition-all">Sportwagen miete</Link>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col md:mx-auto">
                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold">Rechtliches</h4>
                        <div className="text-muted-foreground flex flex-col gap-y-3 text-base font-medium mb-20">
                            <Link to="/impressum" className="hover:text-foreground transition-all">Impressum</Link>
                            <Link to="/datenschutz" className="hover:text-foreground transition-all">Datenschutz</Link>
                        </div>

                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold hidden lg:block">Fahrzeugmarken</h4>
                        <ul className="text-muted-foreground space-y-3 text-base font-medium hidden lg:block">
                            <Link to="/fahrzeuge/vw_golf_8" className="hover:text-foreground transition-all">VW mieten</Link>
                        </ul>
                    </div>
                    <div className=" md:col-span-2 flex lg:hidden flex-col md:items-center">
                        <div className="inline-flex items-center gap-x-2">
                            <img src="/logo-black.svg" alt="" className="block dark:hidden h-14 w-auto fill-black" />
                            <img src="/logo-dark-no-text.svg" alt="" className="hidden dark:block h-14 w-auto" />
                            <span className="text-xl font-semibold dark:text-main">X-Sportwagen</span>
                        </div>
                        <p className="block lg:hidden text-muted-foreground md:text-center">@ X-Sportwagen 2025. <br className="block md:hidden" /> Alle Rechte vorbehalten.</p>
                    </div>
                </div>
                <div className="hidden sm:grid lg:hidden grid-cols-2">
                    <div className="mx-auto">
                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold">Kontakt</h4>
                        <ul className="text-muted-foreground space-y-3 text-base font-medium mb-12">
                            <li className="flex items-center gap-x-1"><MapPinIcon className="dark:text-main" /> Wulfsbergstr 1a, 59320 Ennigerloh</li>
                            <li className="flex items-center gap-x-1"><MailIcon className="dark:text-main" /> info@xsportwagen.de</li>
                            <li className="flex items-center gap-x-1"><PhoneCallIcon className="dark:text-main" /> +49 176 72223678</li>
                        </ul>

                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold">Sportwagen mieten</h4>
                        <div className="text-muted-foreground flex flex-col gap-y-3 text-base font-medium mb-12">
                            <Link to="/hochzeitsmiete" className="hover:text-foreground transition-all">Hochzeitsauto mieten</Link>
                            <Link to="/sportwagen-mieten" className="hover:text-foreground transition-all">Sportwagen miete</Link>
                        </div>

                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold">FahrzeugModelle</h4>
                        <ul className="text-muted-foreground space-y-3 text-base font-medium mb-12 ">
                            <Link to="/fahrzeuge/vw_golf_8" className="hover:text-foreground transition-all">VW Golf 8 R</Link>
                        </ul>
                    </div>
                    <div className="mx-auto">
                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold">Rechtliches</h4>
                        <div className="text-muted-foreground flex flex-col gap-y-3 text-base font-medium mb-12">
                            <Link to="/impressum" className="hover:text-foreground transition-all">Impressum</Link>
                            <Link to="/datenschutz" className="hover:text-foreground transition-all">Datenschutz</Link>
                            <p className="hover:text-foreground transition-all text-transparent">.</p>
                        </div>

                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold text-transparent">Sportwagen mieten</h4>
                        <div className="text-muted-foreground flex flex-col gap-y-3 text-base font-medium mb-12">
                            <Link to="/sportwagen-mieten" className="hover:text-foreground transition-all">Sportwagen mieten Ennigerloh</Link>
                            <Link to="/sportwagen-mieten" className="hover:text-foreground transition-all">Sportwagenvermietung</Link>
                        </div>

                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold">FahrzeugModelle</h4>
                        <ul className="text-muted-foreground space-y-3 text-base font-medium mb-12 ">
                            <Link to="/fahrzeuge/vw_golf_8" className="hover:text-foreground transition-all">VW Golf 8 R</Link>
                        </ul>
                    </div>
                    <div className=" sm:col-span-2 flex flex-col items-center">
                        <div className="inline-flex items-center gap-x-2">
                            <img src="/logo-black.svg" alt="" className="block dark:hidden h-14 w-auto fill-black" />
                            <img src="/logo-dark-no-text.svg" alt="" className="hidden dark:block h-14 w-auto" />
                            <span className="text-xl font-semibold dark:text-main">X-Sportwagen</span>
                        </div>
                        <p className=" text-muted-foreground text-center">@ X-Sportwagen 2025. <br className="block md:hidden" /> Alle Rechte vorbehalten.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:hidden">
                    <div className="mx-auto">
                        <h4 className="mb-3 text-base font-semibold">Kontakt</h4>
                        <ul className="text-muted-foreground space-y-3 text-base font-medium mb-12">
                            <li className="flex items-center gap-x-1"><MapPinIcon className="dark:text-main" /> Wulfsbergstr 1a, 59320 Ennigerloh</li>
                            <li className="flex items-center gap-x-1"><MailIcon className="dark:text-main" /> info@xsportwagen.de</li>
                            <li className="flex items-center gap-x-1"><PhoneCallIcon className="dark:text-main" /> +49 176 72223678</li>
                        </ul>

                        <h4 className="mb-3 text-base font-semibold">Rechtliches</h4>
                        <div className="text-muted-foreground flex flex-col gap-y-3 text-base font-medium mb-12">
                            <Link to="/impressum" className="hover:text-foreground transition-all">Impressum</Link>
                            <Link to="/datenschutz" className="hover:text-foreground transition-all">Datenschutz</Link>
                        </div>

                        <h4 className="mb-3 text-base font-semibold">Sportwagen mieten</h4>
                        <div className="text-muted-foreground flex flex-col gap-y-3 text-base font-medium mb-12">
                            <Link to="/hochzeitsmiete" className="hover:text-foreground transition-all">Hochzeitsauto mieten</Link>
                            <Link to="/sportwagen-mieten" className="hover:text-foreground transition-all">Sportwagen miete</Link>
                            <Link to="/hochzeitsmiete" className="hover:text-foreground transition-all">Hochzeitsauto mieten</Link>
                            <Link to="/sportwagen-mieten" className="hover:text-foreground transition-all">Sportwagen miete</Link>
                        </div>

                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold">FahrzeugModelle</h4>
                        <ul className="text-muted-foreground space-y-3 text-base font-medium mb-12 ">
                            <Link to="/fahrzeuge/vw_golf_8" className="hover:text-foreground transition-all">VW Golf 8 R</Link>
                        </ul>

                        <h4 className="mb-3 whitespace-nowrap text-base font-semibold">FahrzeugModelle</h4>
                        <ul className="text-muted-foreground space-y-3 text-base font-medium mb-12 ">
                            <Link to="/fahrzeuge/vw_golf_8" className="hover:text-foreground transition-all">VW Golf 8 R</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;