import { CalendarIcon, CarFrontIcon, CheckCheckIcon, CircleUserRoundIcon, ClockIcon, FileIcon, FileTextIcon, FuelIcon, ListTodoIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const TestFeatures = () => {
    return (
        <section id="vorteile" className="container mx-auto mt-6 px-6 overflow-hidden">
            <div className="bg-main p-8 rounded-lg shadow border relative flex flex-col lg:grid grid-cols-12 gap-x-12" data-aos="fade-up">
                <div className="col-span-12 lg:col-span-7 text-neutral-900" data-aos="fade-right"  data-aos-delay="400">
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
                <div className="hidden sm:block col-span-12 lg:col-span-5 mt-12 lg:mt-0 w-full aspect-square lg:aspect-auto lg:min-h-[600px] bg-[url('https://i.ibb.co/0px8z1BC/features.jpg')] bg-cover bg-center rounded-lg border shadow-md" data-aos="fade-left" data-aos-delay="400"></div>
                <img src="/thing.svg" className="hidden lg:block lg:absolute bottom-0 left-0 ml-24 opacity-10 z-0"  />
                <img src="/thing.svg" className="absolute lg:hidden bottom-0 left-1/2 -translate-x-1/2 opacity-10 z-0" />
            </div>
        </section>
    );
}

export default TestFeatures;