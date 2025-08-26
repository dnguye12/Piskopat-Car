import { Button } from "@/components/ui/button";
import { CalendarCheckIcon, FileTextIcon, HandshakeIcon, KeyRoundIcon, MessageSquareTextIcon, ZapIcon } from "lucide-react";

const TestProcess = () => {
    return (
        <>
            <section className="container mx-auto mt-6 px-6">
                <div className="flex flex-col lg:grid grid-cols-3 gap-6 mt-6">
                    <div className="p-8 rounded-lg border bg-main flex flex-col items-start gap-y-5 shadow-md relative" data-aos="fade-up">
                        <div className=" size-14 rounded-lg border border-neutral-900 bg-neutral-900 inline-flex justify-center items-center">
                            <MessageSquareTextIcon className=" w-auto h-7 text-main" />
                        </div>
                        <h5 className=" text-2xl text-neutral-900">Fahrzeug anfragen</h5>
                        <p className=" text-lg text-neutral-900">Du nimmst ganz einfach Kontakt über WhatsApp auf. Wir beantworten alle Fragen persönlich und beraten dich individuell.</p>
                        <Button asChild size={"lg"} className="bg-neutral-900 hover:bg-neutral-900/80 text-neutral-100 relative z-10">
                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="h-12">Jetzt buchen</a>
                        </Button>
                        <div className="absolute top-0 left-0 bg-[url('https://i.ibb.co/mCs2hQVM/next-img-bg.png')] bg-cover w-full h-full z-0"></div>
                    </div>

                    <div className="p-8 rounded-lg border bg-accent flex flex-col gap-y-5 shadow-md" data-aos="fade-up" data-aos-delay="100">
                        <div className=" size-14 rounded-lg border border-neutral-900 dark:border-main inline-flex justify-center items-center">
                            <CalendarCheckIcon className=" w-auto h-7" />
                        </div>
                        <h5 className=" text-2xl text-foreground dark:text-main">Termin & Reservierung</h5>
                        <p className=" text-lg text-muted-foreground">Gemeinsam finden wir den passenden Termin und reservieren dein Fahrzeug. Eine Anzahlung sichert dir die Buchung.</p>
                        <div className="hidden lg:block h-12"></div>
                    </div>

                    <div className="p-8 rounded-lg border bg-accent flex flex-col gap-y-5 shadow-md" data-aos="fade-up" data-aos-delay="200">
                        <div className=" size-14 rounded-lg border border-neutral-900 dark:border-main inline-flex justify-center items-center">
                            <FileTextIcon className=" w-auto h-7" />
                        </div>
                        <h5 className=" text-2xl text-foreground dark:text-main">Vertrag & Bezahlung</h5>
                        <p className=" text-lg text-muted-foreground">Du erhältst den Mietvertrag inklusive AGBs. Danach erfolgt die vollständige Zahlung bequem per Überweisung oder vor Ort.
                        </p>
                        <div className="hidden lg:block h-12"></div>
                    </div>

                    <div className="p-8 rounded-lg border bg-accent flex flex-col gap-y-5 shadow-md" data-aos="fade-up">
                        <div className=" size-14 rounded-lg border border-neutral-900 dark:border-main inline-flex justify-center items-center">
                            <KeyRoundIcon className=" w-auto h-7" />
                        </div>
                        <h5 className=" text-2xl text-foreground dark:text-main">Fahrzeugübergabe</h5>
                        <p className=" text-lg text-muted-foreground">Am Übergabetag prüfen wir das Fahrzeug gemeinsam und halten alles im Übergabeformular fest für maximale Transparenz.</p>
                        <div className="hidden lg:block h-12"></div>
                    </div>

                    <div className="p-8 rounded-lg border bg-accent flex flex-col gap-y-5 shadow-md" data-aos="fade-up" data-aos-delay="100">
                        <div className=" size-14 rounded-lg border border-neutral-900 dark:border-main inline-flex justify-center items-center">
                            <ZapIcon className=" w-auto h-7" />
                        </div>
                        <h5 className=" text-2xl text-foreground dark:text-main">Fahrspaß pur</h5>
                        <p className=" text-lg text-muted-foreground">
                            Jetzt beginnt dein Erlebnis: Du genießt die Fahrt im Luxusfahrzeug – mit Vollkasko-Versicherung und Top-Service im Hintergrund.</p>
                        <div className="hidden lg:block h-12"></div>
                    </div>

                    <div className="p-8 rounded-lg border bg-accent flex flex-col gap-y-5 shadow-md" data-aos="fade-up" data-aos-delay="200">
                        <div className=" size-14 rounded-lg border border-neutral-900 dark:border-main inline-flex justify-center items-center">
                            <HandshakeIcon className=" w-auto h-7" />
                        </div>
                        <h5 className=" text-2xl text-foreground dark:text-main">Rückgabe</h5>
                        <p className=" text-lg text-muted-foreground">Nach deinem Erlebnis gibst du das Fahrzeug wie vereinbart zurück – schnell, professionell und mit finalem Protokoll.</p>
                        <div className="hidden lg:block h-12"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TestProcess;