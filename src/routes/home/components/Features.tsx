import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { CalendarIcon, CarFrontIcon, CheckCheckIcon, CircleUserRoundIcon, ClockIcon, FileIcon, FileTextIcon, FuelIcon, ListTodoIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";

const Features = () => {
    return (
        <section className="container mx-auto mt-32 lg:mt-44 px-6">
            <div className="flex flex-col lg:grid grid-cols-12 gap-x-12">
                <div className="col-span-12 lg:col-span-7 " data-aos="fade-right">
                    <h3 className="text-4xl lg:text-5xl max-w-2xl">Für einen Tag voller Adrenalin, ein Wochenende voller Freiheit oder länger – <span className="font-semibold dark:font-normal dark:text-main">du entscheidest, wir liefern</span>.</h3>
                    <p className=" my-8 text-xl break-words">Das erwartet dich, wenn du bei uns einen Sportwagen mietest:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <ListTodoIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>Gemeinsame Fahrzeugkontrolle</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <ZapIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>Innerhalb 120 min von Buchung bis Übergabe</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <FileTextIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>Übergabe inkl. Übergabeprotokoll</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <CheckCheckIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>Unkomplizierte Abwicklung</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <FileIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>Mietvertrag inkl. AGB’s</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <CircleUserRoundIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>Persönlicher Service</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <CalendarIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>Selbstfahrermietfahrzeug</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <ShieldCheckIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>Vollkasko versichert</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <SiWhatsapp className="!h-5 dark:text-main" />
                            </div>
                            <span>WhatsApp Support</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <ClockIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>24/7 Support</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <CarFrontIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>Top Zustand</span>
                        </div>

                        <div className=" flex items-center gap-x-3">
                            <div className="min-w-10 w-10 h-10 rounded border border-foreground dark:border-main inline-flex items-center justify-center">
                                <FuelIcon className="w-auto h-5 dark:text-main" />
                            </div>
                            <span>Vollgetankt</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 mt-12 lg:mt-0 w-full min-h-[600px] bg-[url('https://i.ibb.co/0px8z1BC/features.jpg')] bg-cover bg-center rounded-lg border shadow-md" data-aos="fade-left"></div>
            </div>
        </section>
    );
}

export default Features;