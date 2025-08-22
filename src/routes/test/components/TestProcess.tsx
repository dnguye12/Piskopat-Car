import { Button } from "@/components/ui/button";
import { CalendarCheckIcon, FileTextIcon, HandshakeIcon, KeyRoundIcon, MessageSquareTextIcon, ZapIcon } from "lucide-react";

const TestProcess = () => {
    return (
        <section className="container mx-auto mt-6 px-6">
            <div className="flex flex-col lg:grid grid-cols-3 gap-6">
                <div className="p-8 rounded-lg border bg-main flex flex-col items-start gap-y-5 shadow-md relative" data-aos="fade-up">
                    <div className=" size-14 rounded-lg border border-neutral-900 bg-neutral-900 inline-flex justify-center items-center">
                        <MessageSquareTextIcon className=" w-auto h-7 text-main" />
                    </div>
                    <h5 className=" text-2xl text-neutral-900">Fahrzeug anfragen</h5>
                    <p className=" text-lg text-neutral-900">Du nimmst ganz einfach Kontakt über WhatsApp auf. Wir beantworten alle Fragen persönlich und beraten dich individuell.</p>
                    <Button asChild size={"lg"} className="bg-neutral-900 hover:bg-neutral-900/80 text-neutral-100">
                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="h-12">Sportwagen mieten</a>
                    </Button>
                    <div className="absolute top-0 left-0 bg-[url('https://i.ibb.co/mCs2hQVM/next-img-bg.png')] bg-cover w-full h-full"></div>
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
            <div className="relative mt-6 rounded-lg overflow-hidden shadow" data-aos="fade-up">
                <div className="flex flex-col justify-center items-center px-8 py-32 text-center z-20 relative">
                    <h3 className="font-medium text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-100">Sag uns, was du suchst<br /><span className="text-main">wir kümmern uns</span> um den Rest.</h3>
                    <Button asChild size={"lg"} variant={"main"} className="h-12 cursor-pointer font-semibold shadow">
                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="h-12">Sportwagen mieten</a>
                    </Button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-75 dark:opacity-50 z-10 bg-no-repeat bg-center"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/30730588/pexels-photo-30730588.jpeg')] bg-cover bg-center z-0" />
            </div>
        </section>
    );
}

export default TestProcess;