import { CalendarIcon, CarFrontIcon, CheckCheckIcon, CircleUserRoundIcon, ClockIcon, FileIcon, FileTextIcon, FuelIcon, ListTodoIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const TestFeatures = () => {
    return (
        <>
            <section id="vorteile" className="block md:hidden container mx-auto mt-6 px-6 overflow-hidden">
                <div className="bg-main p-8 rounded-lg shadow border relative flex flex-col lg:grid grid-cols-12 gap-x-12" data-aos="fade-up">
                    <div className="col-span-12 lg:col-span-7 text-neutral-900" data-aos="fade-right" data-aos-delay="400">
                        <h3 className="text-3xl lg:text-4xl max-w-2xl">Für einen Tag voller Adrenalin, ein Wochenende voller Freiheit oder länger – <span className="font-medium ">du entscheidest, wir liefern</span>.</h3>
                        <p className=" my-6 text-xl break-words">Das erwartet dich, wenn du bei uns einen Sportwagen mietest:</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:w-full mx-auto">
                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <ListTodoIcon className="w-auto h-5 " />
                                </div>
                                <span>Gemeinsame Fahrzeugkontrolle</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <ZapIcon className="w-auto h-5 " />
                                </div>
                                <span>Innerhalb 120 min von Buchung bis Übergabe</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <FileTextIcon className="w-auto h-5 " />
                                </div>
                                <span>Übergabe inkl. Übergabeprotokoll</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <CheckCheckIcon className="w-auto h-5 " />
                                </div>
                                <span>Unkomplizierte Abwicklung</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <FileIcon className="w-auto h-5 " />
                                </div>
                                <span>Mietvertrag inkl. AGB’s</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <CircleUserRoundIcon className="w-auto h-5 " />
                                </div>
                                <span>Persönlicher Service</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <CalendarIcon className="w-auto h-5 " />
                                </div>
                                <span>Selbstfahrermietfahrzeug</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <ShieldCheckIcon className="w-auto h-5 " />
                                </div>
                                <span>Vollkasko versichert</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <SiWhatsapp className="!h-5 " />
                                </div>
                                <span>WhatsApp Support</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <ClockIcon className="w-auto h-5 " />
                                </div>
                                <span>24/7 Support</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <CarFrontIcon className="w-auto h-5 " />
                                </div>
                                <span>Top Zustand</span>
                            </div>

                            <div className=" flex items-center gap-x-3">
                                <div className="min-w-10 w-10 h-10 rounded border border-neutral-900 inline-flex items-center justify-center">
                                    <FuelIcon className="w-auto h-5 " />
                                </div>
                                <span>Vollgetankt</span>
                            </div>
                        </div>
                    </div>
                    <img src="/thing.svg" className="absolute lg:hidden bottom-0 left-1/2 -translate-x-1/2 opacity-10 z-0" />
                </div>
            </section>
            <section className="hidden md:block container mx-auto mt-6 px-6 overflow-hidden">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 xl:col-span-8 flex flex-col">
                        <div className="relative bg-main rounded-lg px-8 py-4 border text-neutral-900" data-aos="fade-up">
                            <h3 className="text-2xl md:text-3xl">Für einen Tag voller Adrenalin, ein Wochenende voller Freiheit oder länger – <span className="font-medium ">du entscheidest, wir liefern</span>.</h3>
                            <p className=" mt-3 text-lg break-words">Das erwartet dich, wenn du bei uns einen Sportwagen mietest:</p>
                        </div>
                        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 text-sm" data-aos="fade-up">
                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <ListTodoIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Gemeinsame Fahrzeugkontrolle</p>
                                <p className="text-muted-foreground">Fahrzeug bei Übergabe gemeinsam prüfen.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <ZapIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Schnelle Übergabe</p>
                                <p className="text-muted-foreground">Übergabe in maximal 120 Minuten.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <FileTextIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Übergabe inkl. Übergabeprotokoll</p>
                                <p className="text-muted-foreground">Dokumentierte Fahrzeugübergabe.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <CheckCheckIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Unkomplizierte Abwicklung</p>
                                <p className="text-muted-foreground">Einfach und schnell mieten.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <FileIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Mietvertrag inkl. AGB’s</p>
                                <p className="text-muted-foreground">Transparenter Vertrag mit AGB.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <CircleUserRoundIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Persönlicher Service</p>
                                <p className="text-muted-foreground">Individuelle Betreuung.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <CalendarIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Selbstfahrermietfahrzeug</p>
                                <p className="text-muted-foreground">Freiheit selbst zu fahren.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <ShieldCheckIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Vollkasko versichert</p>
                                <p className="text-muted-foreground">Vollkasko für maximale Sicherheit.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <SiWhatsapp className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">WhatsApp Support</p>
                                <p className="text-muted-foreground">Schnelle Hilfe per WhatsApp.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <ClockIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">24/7 Support</p>
                                <p className="text-muted-foreground">Jederzeit erreichbar.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <CarFrontIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Top Zustand</p>
                                <p className="text-muted-foreground">Fahrzeuge im Bestzustand.</p>
                            </div>

                            <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center">
                                    <FuelIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Vollgetankt</p>
                                <p className="text-muted-foreground">Startklar mit vollem Tank.</p>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="hidden xl:block col-span-4 bg-[url('https://i.ibb.co/0px8z1BC/features.jpg')] bg-cover bg-center rounded-lg border" data-aos="fade-left"></div>
                </div>
            </section>
        </>
    );
}

export default TestFeatures;