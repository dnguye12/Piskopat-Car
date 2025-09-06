import { CalendarIcon, CarFrontIcon, CheckCheckIcon, CircleUserRoundIcon, ClockIcon, FileIcon, FileTextIcon, FuelIcon, ListTodoIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const TestFeatures = () => {
    return (
        <>
            <div id="vorteile" className="p-6 relative w-full min-h-[calc(100vh-88px)]">
                <div className="grid grid-cols-2 container mx-auto h-full gap-6 relative z-10 py-8">
                    <div className="col-span-2 flex flex-col items-start justify-center relative z-10 w-4/5">
                        <div className="col-span-12 xl:col-span-8 flex flex-col px-6" data-aos="fade-right">
                            <div className="relative bg-main rounded-lg px-8 py-8 border text-neutral-900 overflow-hidden">
                                <h3 className="hidden sm:block text-2xl lg:text-3xl">Ob ein Tag voller Adrenalin, ein Wochenende im Zeichen der Freiheit oder gleich für länger – du wählst, wir machen es möglich.</h3>
                                <p className="hidden sm:block mt-3 lg:text-lg break-words">Das bekommst du, wenn du bei uns einen Sportwagen mietest:</p>
                                <h3 className="block sm:hidden text-3xl">Das bekommst du, wenn du bei uns einen Sportwagen mietest:</h3>
                                <img src="/thing.svg" className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 z-0 w-full" />
                            </div>
                            <div className="hidden min-[500px]:grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-sm">
                                <div className=" flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <ListTodoIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">Gemeinsame Fahrzeugkontrolle</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Übergabe mit gemeinsamer Prüfung</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <ZapIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">Schnelle Übergabe</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Max. 120 Minuten bis zur Übergabe.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <FileTextIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">Übergabe inkl. Übergabeprotokoll</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Protokollierte Fahrzeugübergabe</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <CheckCheckIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">Unkomplizierte Abwicklung</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Schnell & unkompliziert mieten</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <FileIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">Mietvertrag inkl. AGB’s</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Transparenter Vertrag mit AGB.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <CircleUserRoundIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">Persönlicher Service</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Persönliche Betreuung</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <CalendarIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium truncate">Selbstfahrermietfahrzeug</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Fahr selbst. Fühl dich frei.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <ShieldCheckIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">Vollkasko versichert</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Vollkaskoschutz für sorgenfreie Fahrten</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <SiWhatsapp className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">WhatsApp Support</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Schnelle Hilfe per WhatsApp.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <ClockIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">24/7 Support</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Jederzeit erreichbar.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <CarFrontIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">Top Zustand</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Fahrzeuge im Bestzustand.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                        <FuelIcon className="min-w-5 size-5" />
                                    </div>
                                    <p className="font-medium">Vollgetankt</p>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Vollgetankt ins Abenteuer</p>
                                </div>
                            </div>
                            <div className="hidden max-[500px]:grid grid-cols-1 gap-4 mt-4 text-sm">
                                <div className=" flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <ListTodoIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">Gemeinsame Fahrzeugkontrolle</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Übergabe mit gemeinsamer Prüfung</p>
                                </div>
                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <ZapIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">Schnelle Übergabe</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Max. 120 Minuten bis zur Übergabe.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <FileTextIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">Übergabe inkl. Übergabeprotokoll</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Protokollierte Fahrzeugübergabe</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <CheckCheckIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">Unkomplizierte Abwicklung</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Schnell & unkompliziert mieten</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <FileIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">Mietvertrag inkl. AGB’s</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Transparenter Vertrag mit AGB.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <CircleUserRoundIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">Persönlicher Service</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Persönliche Betreuung</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <CalendarIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium truncate">Selbstfahrermietfahrzeug</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Fahr selbst. Fühl dich frei.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <ShieldCheckIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">Vollkasko versichert</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Vollkaskoschutz für sorgenfreie Fahrten</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <SiWhatsapp className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">WhatsApp Support</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Schnelle Hilfe per WhatsApp.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <ClockIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">24/7 Support</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Jederzeit erreichbar.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <CarFrontIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">Top Zustand</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Fahrzeuge im Bestzustand.</p>
                                </div>

                                <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent/66 backdrop-blur-sm shadow-lg border transition-all hover:bg-main hover:text-neutral-900 group">
                                    <div className="flex items-center gap-3">
                                        <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                            <FuelIcon className="min-w-5 size-5" />
                                        </div>
                                        <p className="font-medium">Vollgetankt</p>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Vollgetankt ins Abenteuer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="z-0 absolute top-0 right-6 bg-[url('https://i.ibb.co/v4Q4Bk04/features.jpg')] bg-cover bg-center w-[calc(50%-32px)] h-full rounded-lg border shadow"></div>
                </div>
            </div>
        </>
    );
}

export default TestFeatures;