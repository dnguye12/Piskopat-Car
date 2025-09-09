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
    const count = 6

    useEffect(() => {
        if (!api) {
            return;
        }
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api])

    return (
        <>
            <section className="container mx-auto pt-6 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-6">
                    <div className="relative bg-main rounded-lg p-8 flex flex-col justify-between items-start border" data-aos="fade-right">
                        <div>
                            <h2 className="text-3xl text-neutral-900 mb-2">Unser Mietablauf</h2>
                            <p className="text-lg text-neutral-900">Wir machen’s leicht – klar, fair und in wenigen Schritten.</p>
                        </div>
                        <Button asChild size={"lg"} className="w-full lg:w-auto mt-6 lg:mt-0 bg-neutral-900 hover:bg-neutral-900/80 text-neutral-100 relative z-10">
                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="h-12">Jetzt buchen</a>
                        </Button>
                        <div className="absolute top-0 left-0 bg-[url('https://i.ibb.co/mCs2hQVM/next-img-bg.png')] bg-cover w-full h-full z-0 pointer-events-none"></div>
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
                                        <p className="">Schreib uns einfach per WhatsApp – wir beantworten deine Fragen persönlich und beraten dich individuell.</p>
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
                                        <p className="">Zusammen wählen wir deinen Termin, reservieren dein Fahrzeug – und mit einer Anzahlung ist alles fix.</p>
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
                                        <p className="">Am Übergabetag kontrollieren wir das Fahrzeug zusammen und halten jeden Punkt im Formular fest, damit alles nachvollziehbar bleibt.</p>
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
                                        <p className="">Jetzt startet dein Erlebnis: Genieße die Fahrt im Luxusfahrzeug – abgesichert mit Vollkasko und begleitet von unserem Premium-Service.</p>
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
                                        <p className="">Am Ende deines Erlebnisses gibst du das Fahrzeug unkompliziert zurück – transparent dokumentiert und professionell abgewickelt.</p>
                                    </div>
                                </div>
                            </Step>
                        </Stepper>
                    </div>
                    <div className="block sm:hidden col-span-2 rounded-lg bg-accent border pb-8">
                        <Carousel setApi={setApi} className="w-full ">
                            <CarouselContent>
                                <CarouselItem className="">
                                    <div className="flex flex-col gap-4 p-8 ps-12">
                                        <div className="flex items-center gap-x-2">
                                            <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                                <MessageSquareTextIcon className=" w-auto h-5 lg:h-7 " />
                                            </div>
                                            <h5 className=" text-2xl text-main">Fahrzeug anfragen</h5>
                                        </div>
                                        <p className="">Schreib uns einfach per WhatsApp – wir beantworten deine Fragen persönlich und beraten dich individuell.</p>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="">
                                    <div className="flex flex-col gap-4 p-8 ps-12">
                                        <div className="flex items-center gap-x-2">
                                            <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                                <CalendarCheckIcon className=" w-auto h-5 lg:h-7 " />
                                            </div>
                                            <h5 className=" text-2xl text-main">Termin & Reservierung</h5>
                                        </div>
                                        <p className="">Zusammen wählen wir deinen Termin, reservieren dein Fahrzeug – und mit einer Anzahlung ist alles fix.</p>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="">
                                    <div className="flex flex-col gap-4 p-8 ps-12">
                                        <div className="flex items-center gap-x-2">
                                            <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                                <FileTextIcon className=" w-auto h-5 lg:h-7 " />
                                            </div>
                                            <h5 className=" text-2xl text-main">Vertrag & Bezahlung</h5>
                                        </div>
                                        <p className="">Du erhältst den Mietvertrag inklusive AGBs. Danach erfolgt die vollständige Zahlung bequem per Überweisung oder vor Ort.</p>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="">
                                    <div className="flex flex-col gap-4 p-8 ps-12">
                                        <div className="flex items-center gap-x-2">
                                            <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                                <KeyRoundIcon className=" w-auto h-5 lg:h-7 " />
                                            </div>
                                            <h5 className=" text-2xl text-main">Fahrzeugübergabe</h5>
                                        </div>
                                        <p className="">Am Übergabetag kontrollieren wir das Fahrzeug zusammen und halten jeden Punkt im Formular fest, damit alles nachvollziehbar bleibt.</p>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="">
                                    <div className="flex flex-col gap-4 p-8 ps-12">
                                        <div className="flex items-center gap-x-2">
                                            <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                                <ZapIcon className=" w-auto h-5 lg:h-7 " />
                                            </div>
                                            <h5 className=" text-2xl text-main">Fahrspaß pur</h5>
                                        </div>
                                        <p className="">Jetzt startet dein Erlebnis: Genieße die Fahrt im Luxusfahrzeug – abgesichert mit Vollkasko und begleitet von unserem Premium-Service.</p>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="">
                                    <div className="flex flex-col gap-4 p-8 ps-12">
                                        <div className="flex items-center gap-x-2">
                                            <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 rounded-lg border border-main  inline-flex justify-center items-center">
                                                <HandshakeIcon className=" w-auto h-5 lg:h-7 " />
                                            </div>
                                            <h5 className=" text-2xl text-main">Rückgabe</h5>
                                        </div>
                                        <p className="">Am Ende deines Erlebnisses gibst du das Fahrzeug unkompliziert zurück – transparent dokumentiert und professionell abgewickelt.</p>
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
        </>
    );
}

export default TestProcess;