import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils";
import { BadgeEuroIcon, BanknoteArrowDownIcon, IdCardIcon, InfoIcon, ShieldCheckIcon, UserRoundCheckIcon } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";
import PricingCard from "./PricingCard";
import Autoplay from "embla-carousel-autoplay"
import { Progress } from "@/components/ui/progress";

const imageLinks = [
    "https://i.ibb.co/Z1JXP8dZ/A7402911.png",
    "https://i.ibb.co/Z6WrX1bq/A7402922.png",
    "https://i.ibb.co/7dqfXf7b/A7402939.png",
    "https://i.ibb.co/VpDsZX3X/A7402947.png",
    "https://i.ibb.co/Nn7cSgJG/A7402950.png",
    "https://i.ibb.co/HDQ2L3hh/A7402886.png",
    "https://i.ibb.co/k2MHSX5t/A7402888.png",
    "https://i.ibb.co/spRsF65j/A7402904.png",
    "https://i.ibb.co/ZjwY67k/A7402908.png",
    "https://i.ibb.co/v4svgWz7/A7402867.png",
    "https://i.ibb.co/fV5h6C2w/A7402875.png",
]

type Mode = "daily" | "weekly"

const VM_Golf_8_Pricing = () => {
    const [mode, setMode] = useState<Mode>("daily")

    const handleMode = (input: Mode): void => {
        if (mode !== input) {
            setMode(input)
        }
    }

    return (
        <section className="container mx-auto" data-aos="fade-up">
            <div className="mx-auto text-center">
                <h2 className="mb-4 text-4xl font-orbi lg:text-5xl text-main">Preise</h2>
                <div className="h-12 bg-muted flex items-center rounded-lg p-1 text-lg w-fit mx-auto mt-2">
                    <div className="grid gap-3 h-full grid-cols-2">
                        <Button variant={"ghost"} className={cn(
                            "h-full rounded-md transition-all cursor-pointer px-0",
                            mode === "daily" && "bg-background hover:!bg-background dark:bg-main dark:hover:!bg-main cursor-default border"
                        )} onClick={() => handleMode("daily")}>
                            <Label className={cn(
                                "leading-none select-none text-muted-foreground flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold",
                                mode === "daily" && "text-primary dark:text-neutral-900 pointer-events-none",
                                mode === "weekly" && "pointer-events-none opacity-50 cursor-pointer"
                            )}>Tagesmiete</Label>
                        </Button>
                        <Button variant={"ghost"} className={cn(
                            "h-full rounded-md transition-all cursor-pointer px-0",
                            mode === "weekly" && "bg-background hover:!bg-background dark:bg-main dark:hover:!bg-main cursor-default border"
                        )}
                            onClick={() => handleMode("weekly")}
                        >
                            <Label className={cn(
                                "leading-none select-none text-muted-foreground flex h-full cursor-pointer items-center justify-center gap-1.5 px-7 font-semibold",
                                mode === "weekly" && "text-primary dark:text-neutral-900 pointer-events-none",
                                mode === "daily" && "pointer-events-none opacity-50 cursor-pointer"
                            )}>Wochenpaket</Label>
                        </Button>
                    </div>
                </div>
                {
                    mode === "daily" &&
                    (
                        <div className="mt-6 flex flex-col gap-y-6 md:grid rounded-lg md:grid-cols-2 xl:grid-cols-4 md:border overflow-hidden">
                            <PricingCard title="Tagesmiete" date="Montag-Donnerstag" price={99} per="8 Stunden" km={70} />
                            <PricingCard title="Tagesmiete" date="Montag-Donnerstag" price={149} per="pro Tag" km={200} />
                            <PricingCard title="Tagesmiete" date="Freitag-Sonntag" price={175} per="pro Tag" km={200} />
                            <PricingCard title="Wochenendtarif" date="Sparpaket" price={475} per="Austerity package" km={600} highlight={true} />
                        </div>
                    )
                }
                {
                    mode === "weekly" &&
                    (
                        <div className="mt-6 flex flex-col gap-y-6 md:grid rounded-lg md:grid-cols-2 xl:grid-cols-4 overflow-hidden">
                            <div className="hidden md:block"></div>
                            <PricingCard title="Wochenpaket 4 Tage" date="Montag - Donnerstag" price={550} per="Sparpaket" km={800} />
                            <PricingCard title="Wochenpaket 7 Tage" date="1 Woche: (Mo-So)" price={799} per="Sparpaket" km={1000} highlight={true} />
                            <div className="hidden md:block"></div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

const VM_Golf_8 = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const progress = (current * 100) / count;

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px]">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-main mb-7 font-orbi" data-aos="fade-up" data-aos-delay="300">VW Golf 8 R</h1>
                        <p className="text-lg lg:text-xl text-neutral-100" data-aos="fade-up" data-aos-delay="300">Du senkst den Fuß ein kurzes Zischen, dann entfesselt der Golf R seine Kraft. Kein Zögern, kein großes Spektakel nur ein kompromissloser Vorstoß nach vorn, direkt, kontrolliert, brutal und präzise auf alle vier Räder verteilt. Dieses Auto braucht keinen Applaus, es kündigt sich an durch die Akrapovic-Auspuffanlage.
                        </p>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 lg:h-16 px-8 lg:text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://i.ibb.co/LhpZ7HhB/A7402864.png')] bg-cover bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                </div>
                <div className="container mx-auto px-4 pt-6 pb-6 lg:pb-0">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true
                        }}
                        plugins={[
                            Autoplay({
                                delay: 10000,
                            }),
                        ]}
                        className="w-full mx-auto"
                        setApi={setApi}
                    >
                        <CarouselContent className="-ml-4 ">
                            {imageLinks.map((item, index) => (
                                <CarouselItem key={index} className="pl-4 lg:basis-1/2 xl:basis-1/3">
                                    <div className="p-1">
                                        <Card className="p-0 overflow-hidden border shadow">
                                            <CardContent className="p-0">
                                                <img src={item} className="object-cover object-center aspect-square"/>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden lg:inline-flex" />
                        <CarouselNext className="hidden lg:inline-flex" />
                        <CarouselPrevious className="inline-flex lg:hidden top-[calc(100%+0.5rem)] translate-y-0 left-0" />
                        <CarouselNext className="inline-flex lg:hidden top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />
                    </Carousel>
                    <Progress value={progress} className="block lg:hidden w-48 h-3 ml-auto mt-5" />
                </div>
                <div className="container mx-auto px-4 flex flex-col gap-y-6 mt-4">
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center p-6 bg-accent border shadow gap-y-5 rounded-lg" data-aos="fade-up">
                            <div className="min-w-14 size-14 inline-flex rounded-md justify-center items-center bg-main">
                                <IdCardIcon className=" w-6 h-6 text-neutral-900" />
                            </div>
                            <p className="text-2xl">Führerschein</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-accent border shadow gap-y-5 rounded-lg" data-aos="fade-up">
                            <div className="min-w-14 size-14 inline-flex rounded-md justify-center items-center bg-main">
                                <UserRoundCheckIcon className=" w-6 h-6 text-neutral-900" />
                            </div>
                            <p className="text-2xl">Ab 18 Jahren</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-accent border shadow gap-y-5 rounded-lg" data-aos="fade-up">
                            <div className="min-w-14 size-14 inline-flex rounded-md justify-center items-center bg-main">
                                <BadgeEuroIcon className=" w-6 h-6 text-neutral-900" />
                            </div>
                            <p className="text-2xl">5000€ SB</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-accent border shadow gap-y-5 rounded-lg" data-aos="fade-up">
                            <div className="min-w-14 size-14 inline-flex rounded-md justify-center items-center bg-main">
                                <BanknoteArrowDownIcon className=" w-6 h-6 text-neutral-900" />
                            </div>
                            <p className="text-2xl">Kaution 1000€</p>
                        </div>
                    </div>

                    <div className="grid md:hidden grid-cols-2 gap-4 min-[475px]:gap-6 w-full bg-accent p-6 rounded-lg border">
                        <div className="flex items-center gap-y-5 rounded-lg gap-x-2" data-aos="fade-up">
                            <div className="min-w-8 size-8 min-[475px]:min-w-10 min-[475px]:size-10 inline-flex rounded-md justify-center items-center bg-main">
                                <IdCardIcon className="w-4 h-4 min-[475px]:w-5 min-[475px]:h-5 text-neutral-900" />
                            </div>
                            <p className="min-[475px]:text-lg">Führerschein</p>
                        </div>
                        <div className="flex items-center gap-y-5 rounded-lg gap-x-2" data-aos="fade-up">
                            <div className="min-w-8 size-8 min-[475px]:min-w-10 min-[475px]:size-10 inline-flex rounded-md justify-center items-center bg-main">
                                <UserRoundCheckIcon className="w-4 h-4 min-[475px]:w-5 min-[475px]:h-5 text-neutral-900" />
                            </div>
                            <p className="min-[475px]:text-lg">Ab 18 Jahren</p>
                        </div>
                        <div className="flex items-center gap-y-5 rounded-lg gap-x-2" data-aos="fade-up">
                            <div className="min-w-8 size-8 min-[475px]:min-w-10 min-[475px]:size-10 inline-flex rounded-md justify-center items-center bg-main">
                                <BadgeEuroIcon className="w-4 h-4 min-[475px]:w-5 min-[475px]:h-5 text-neutral-900" />
                            </div>
                            <p className="min-[475px]:text-lg">5000€ SB</p>
                        </div>
                        <div className="flex items-center gap-y-5 rounded-lg gap-x-2" data-aos="fade-up">
                            <div className="min-w-8 size-8 min-[475px]:min-w-10 min-[475px]:size-10 inline-flex rounded-md justify-center items-center bg-main">
                                <BanknoteArrowDownIcon className="w-4 h-4 min-[475px]:w-5 min-[475px]:h-5 text-neutral-900" />
                            </div>
                            <p className="min-[475px]:text-lg">Kaution 1000€</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                        <div className={`col-span-6 lg:col-span-2 aspect-video lg:aspect-auto rounded-lg border bg-[url(https://i.ibb.co/LhpZ7HhB/A7402864.png)] bg-cover bg-center shadow`} data-aos="fade-right"></div>
                        <div className="col-span-6 lg:col-span-4 p-8 rounded-lg border bg-accent shadow" data-aos="fade-left">
                            <p className="text-xl mb-1">Volkswagen</p>
                            <h3 className="text-3xl mb-4">VW Golf 8 R Performance</h3>
                            <p className="text-muted-foreground lg:text-lg mb-4">Der Golf 8 R Performance – gebaut für maximale Performance im Alltag und auf der Rennstrecke. Unter der Motorhaube arbeitet ein kraftvoller 2,0-Liter-TSI-Vierzylinder, der mit 333 PS und 420 Nm Drehmoment beeindruckt. In nur 4,7 Sekunden schießt er auf Tempo 100 und liefert dabei ein Fahrerlebnis, das unter die Haut geht. Besonders markant: die optionale Akrapovic‒Abgasanlage mit Titan-Endrohren – leicht, edel und mit einem Sound, der Emotionen weckt. Das fortschrittliche Allradsystem mit R‒Performance Torque Vectoring sorgt für messerscharfe Kurvenlage und volle Kontrolle in jeder Fahrsituation. Optisch zeigt sich der Golf R von seiner schärfsten Seite mit muskulösem Auftritt, R-spezifischer Front, markantem Diffusor und dezentem Dachkantenspoiler. Im Innenraum trifft Hightech auf Sportlichkeit: digitales Cockpit, R-Sportsitze und eine Verarbeitung, die keine Wünsche offenlässt.</p>
                            <Button variant={"main"} size={"lg"} className="h-12 font-semibold" asChild>
                                <a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a>
                            </Button>
                        </div>
                        <div className="col-span-6 sm:col-span-3 rounded-lg border bg-main p-8 text-neutral-900 shadow" data-aos="fade-right">
                            <h4 className="text-3xl mb-4">Datenblatt</h4>
                            <div className="grid lg:grid-cols-2 gap-x-6 lg:text-lg">
                                <div>
                                    <p><span className="font-semibold">Hersteller:</span> <span>Volkswagen</span></p>
                                    <p><span className="font-semibold">Modell:</span> <span>Golf 8 R Performance</span></p>
                                    <p><span className="font-semibold">Typ:</span> <span>Kompaktklasse</span></p>
                                    <p><span className="font-semibold">Kraftstoffart:</span> <span>Benzin</span></p>
                                    <p><span className="font-semibold">Getriebe:</span> <span>Automatik</span></p>
                                    <p><span className="font-semibold">Leistung:</span> <span>333 PS</span></p>
                                </div>
                                <div>
                                    <p><span className="font-semibold">Drehmoment:</span> <span>420 Nm</span></p>
                                    <p><span className="font-semibold">Höchstgeschwindigkeit:</span> <span>270 km/h</span></p>
                                    <p><span className="font-semibold">0–100 km/h:</span> <span>4,7 Sekunden</span></p>
                                    <p><span className="font-semibold">Antrieb:</span> <span>Allradantrieb</span></p>
                                    <p><span className="font-semibold">Sitze:</span> <span>5</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-3 rounded-lg border bg-main p-8 text-neutral-900 shadow" data-aos="fade-left">
                            <h4 className="text-3xl mb-4">Mietbedingungen</h4>
                            <div className="flex flex-col gap-y-3 text-neutral-900">
                                <div className="inline-flex gap-x-3 items-center">
                                    <IdCardIcon className="min-w-7 size-7" />
                                    <span className=" lg:text-lg">Ab 18 Jahren</span>
                                </div>
                                <div className="inline-flex gap-x-3 items-center">
                                    <ShieldCheckIcon className="min-w-7 size-7" />
                                    <span className=" lg:text-lg">Vollkaskoschutz ab 4.000€ Selbstbeteiligung
                                        (Kann auf Wunsch mit einer Zusatzversicherung auf
                                        2.500€ reduziert werden. Wir kümmern uns um alles!)</span>
                                </div>
                                <div className="inline-flex gap-x-3 items-center">
                                    <BadgeEuroIcon className="min-w-7 size-7" />
                                    <span className=" lg:text-lg">
                                        1.000 € Kaution Bar, Überweisung oder per Paypal oder
                                        Eigenes Fahrzeug im wert von mindestens 1.000€</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <VM_Golf_8_Pricing />
                    <div className="bg-main rounded-lg border mb-6 p-8 flex flex-col text-neutral-900" data-aos="fade-up">
                        <div className="flex gap-x-4 items-center">
                            <InfoIcon className="min-w-7 size-7 lg:min-w-12 lg:size-12" style={{ strokeWidth: 1 }} />
                            <div className="flex flex-col text-lg font-medium">
                                <p>Nicht gebuchte Kilometer werden mit 2,00€ pro Kilometer berechnet.</p>
                                <p>Zusätzliche Kilometer können vorab oder während der Miete für 0,85€ pro Kilometer dazugebucht werden.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default VM_Golf_8;