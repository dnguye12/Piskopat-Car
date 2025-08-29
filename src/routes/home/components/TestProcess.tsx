import Stepper, { Step } from "@/components/react-bits/Stepper";
import { Button } from "@/components/ui/button";
import { CalendarCheckIcon, FileTextIcon, HandshakeIcon, KeyRoundIcon, MessageSquareTextIcon, ZapIcon } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const TestProcess = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api])

    return (
        <>
            <section className="container mx-auto mt-6 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-6">
                    <div className="relative bg-main rounded-lg p-8 flex flex-col justify-between items-start border" data-aos="fade-right">
                        <div>
                            <h2 className="text-3xl text-neutral-900 mb-2">Unser Mietprozess</h2>
                            <p className="text-lg text-neutral-900">Unser Mietprozess ist einfach, transparent und schnell abgeschlossen.</p>
                        </div>
                        <Button asChild size={"lg"} className="mt-6 lg:mt-0 bg-neutral-900 hover:bg-neutral-900/80 text-neutral-100 relative z-10">
                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="h-12">Jetzt buchen</a>
                        </Button>
                        <div className="absolute top-0 left-0 bg-[url('https://i.ibb.co/mCs2hQVM/next-img-bg.png')] bg-cover w-full h-full z-0"></div>
                    </div>
                    <div className="hidden sm:block col-span-2 rounded-lg bg-accent border p-8" data-aos="fade-left">
                        <Stepper
                            initialStep={1}
                            onFinalStepCompleted={() => console.log("All steps completed!")}
                            backButtonText="Previous"
                            nextButtonText="Next"
                            className="hidden sm:block"
                        >
                            <Step>
                                <div className="flex gap-x-4">
                                    <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                        <MessageSquareTextIcon className=" w-auto h-7 " />
                                    </div>
                                    <div>
                                        <h5 className=" text-2xl text-main mb-2">Fahrzeug anfragen</h5>
                                        <p className="">Du nimmst ganz einfach Kontakt über WhatsApp auf. Wir beantworten alle Fragen persönlich und beraten dich individuell.</p>
                                    </div>
                                </div>
                            </Step>
                            <Step>
                                <div className="flex gap-x-4">
                                    <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                        <CalendarCheckIcon className=" w-auto h-7 " />
                                    </div>
                                    <div>
                                        <h5 className=" text-2xl text-main mb-2">Termin & Reservierung</h5>
                                        <p className="">Gemeinsam finden wir den passenden Termin und reservieren dein Fahrzeug. Eine Anzahlung sichert dir die Buchung.</p>
                                    </div>
                                </div>
                            </Step>
                            <Step>
                                <div className="flex gap-x-4">
                                    <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                        <FileTextIcon className=" w-auto h-7 " />
                                    </div>
                                    <div>
                                        <h5 className=" text-2xl text-main mb-2">Vertrag & Bezahlung</h5>
                                        <p className="">Du erhältst den Mietvertrag inklusive AGBs. Danach erfolgt die vollständige Zahlung bequem per Überweisung oder vor Ort.</p>
                                    </div>
                                </div>
                            </Step>
                            <Step>
                                <div className="flex gap-x-4">
                                    <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                        <KeyRoundIcon className=" w-auto h-7 " />
                                    </div>
                                    <div>
                                        <h5 className=" text-2xl text-main mb-2">Fahrzeugübergabe</h5>
                                        <p className="">Am Übergabetag prüfen wir das Fahrzeug gemeinsam und halten alles im Übergabeformular fest für maximale Transparenz.</p>
                                    </div>
                                </div>
                            </Step>
                            <Step>
                                <div className="flex gap-x-4">
                                    <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                        <ZapIcon className=" w-auto h-7 " />
                                    </div>
                                    <div>
                                        <h5 className=" text-2xl text-main mb-2">Fahrspaß pur</h5>
                                        <p className="">Jetzt beginnt dein Erlebnis: Du genießt die Fahrt im Luxusfahrzeug – mit Vollkasko-Versicherung und Top-Service im Hintergrund.</p>
                                    </div>
                                </div>
                            </Step>
                            <Step>
                                <div className="flex gap-x-4">
                                    <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                        <HandshakeIcon className=" w-auto h-7 " />
                                    </div>
                                    <div>
                                        <h5 className=" text-2xl text-main mb-2">Rückgabe</h5>
                                        <p className="">Nach deinem Erlebnis gibst du das Fahrzeug wie vereinbart zurück – schnell, professionell und mit finalem Protokoll.</p>
                                    </div>
                                </div>
                            </Step>
                        </Stepper>
                    </div>
                    <div className="block sm:hidden col-span-2 rounded-lg bg-accent border pb-8" data-aos="fade-right">
                        <Carousel setApi={setApi} className="w-full ">
                            <CarouselContent>
                                <CarouselItem className="">
                                    <div className="flex gap-x-4 p-8 ps-12">
                                        <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                            <MessageSquareTextIcon className=" w-auto h-7 " />
                                        </div>
                                        <div>
                                            <h5 className=" text-2xl text-main mb-2">Fahrzeug anfragen</h5>
                                            <p className="">Du nimmst ganz einfach Kontakt über WhatsApp auf. Wir beantworten alle Fragen persönlich und beraten dich individuell.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="flex gap-x-4 p-8 ps-12">
                                        <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                            <CalendarCheckIcon className=" w-auto h-7 " />
                                        </div>
                                        <div>
                                            <h5 className=" text-2xl text-main mb-2">Termin & Reservierung</h5>
                                            <p className="">Gemeinsam finden wir den passenden Termin und reservieren dein Fahrzeug. Eine Anzahlung sichert dir die Buchung.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="flex gap-x-4 p-8 ps-12">
                                        <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                            <FileTextIcon className=" w-auto h-7 " />
                                        </div>
                                        <div>
                                            <h5 className=" text-2xl text-main mb-2">Vertrag & Bezahlung</h5>
                                            <p className="">Du erhältst den Mietvertrag inklusive AGBs. Danach erfolgt die vollständige Zahlung bequem per Überweisung oder vor Ort.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="flex gap-x-4 p-8 ps-12">
                                        <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                            <KeyRoundIcon className=" w-auto h-7 " />
                                        </div>
                                        <div>
                                            <h5 className=" text-2xl text-main mb-2">Fahrzeugübergabe</h5>
                                            <p className="">Am Übergabetag prüfen wir das Fahrzeug gemeinsam und halten alles im Übergabeformular fest für maximale Transparenz.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="flex gap-x-4 p-8 ps-12">
                                        <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                            <ZapIcon className=" w-auto h-7 " />
                                        </div>
                                        <div>
                                            <h5 className=" text-2xl text-main mb-2">Fahrspaß pur</h5>
                                            <p className="">Jetzt beginnt dein Erlebnis: Du genießt die Fahrt im Luxusfahrzeug – mit Vollkasko-Versicherung und Top-Service im Hintergrund.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="flex gap-x-4 p-8 ps-12">
                                        <div className="min-w-14 size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                            <HandshakeIcon className=" w-auto h-7 " />
                                        </div>
                                        <div>
                                            <h5 className=" text-2xl text-main mb-2">Rückgabe</h5>
                                            <p className="">Nach deinem Erlebnis gibst du das Fahrzeug wie vereinbart zurück – schnell, professionell und mit finalem Protokoll.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-8" />
                            <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-10 translate-x-full" />
                        </Carousel>
                        <div className="mt-4 flex items-center justify-end gap-2 px-8">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={cn("h-3.5 w-3.5 rounded-full border-2", {
                                        "border-main": current === index + 1,
                                    })}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/*
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
            */}
        </>
    );
}

export default TestProcess;