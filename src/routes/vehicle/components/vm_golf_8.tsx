import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Faq from "@/routes/home/components/Faq";
import { BadgeEuroIcon, BanknoteArrowDownIcon, IdCardIcon, ShieldCheckIcon, UserRoundCheckIcon } from "lucide-react";

const imageLinks = [
    "https://i.ibb.co/C3BBJk0z/A7402867.jpg",
    "https://i.ibb.co/fV8ww5Fs/A7402875.jpg",
    "https://i.ibb.co/WvmPMHQL/A7402886.jpg",
    "https://i.ibb.co/39yn3qdX/A7402908.jpg",
    "https://i.ibb.co/xqHfq8nJ/A7402911.jpg",
    "https://i.ibb.co/M5nPJHq5/A7402939.jpg",
    "https://i.ibb.co/kgCwxVS8/A7402945.jpg",
    "https://i.ibb.co/84PX7KGK/A7402949.jpg",
]

/*
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDragStart = (e: any) => e.preventDefault();

const items = imageLinks.map((src) => (
    <img key={src} src={src} onDragStart={handleDragStart} role="presentation" alt="" />
));*/

const VM_Golf_8 = () => {

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px]">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className=" text-5xl lg:text-6xl text-main mb-7" data-aos="fade-up" data-aos-delay="600">VW Golf 8 R</h1>
                        <p className="text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="600">Du senkst den Fuß ein kurzes Zischen, dann entfesselt der Golf R seine Kraft. Kein Zögern, kein großes Spektakel nur ein kompromissloser Vorstoß nach vorn, direkt, kontrolliert, brutal und präzise auf alle vier Räder verteilt. Dieses Auto braucht keinen Applaus, es kündigt sich an durch die Akrapovic-Auspuffanlage.
                        </p>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-16 px-8 text-lg w-full lg:w-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Sportwagen mieten</a></Button>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="200"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://i.ibb.co/tF10tNC/A7402864.jpg')] bg-cover bg-center" data-aos="fade-up" data-aos-delay="200"></div>
                </div>
                <div className="container max-w-7xl mx-auto px-4 py-20 ">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true
                        }}
                        className="w-[calc(100%-80px)] md:w-full mx-auto"
                    >
                        <CarouselContent>
                            {imageLinks.map((item, index) => (
                                <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3">
                                    <div className="p-1">
                                        <Card className="p-0 overflow-hidden border shadow">
                                            <CardContent className="p-0">
                                                <img src={item} />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="container mx-auto px-4 flex flex-col gap-y-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center p-8 bg-sidebar border shadow gap-y-5 rounded-lg" data-aos="fade-up">
                            <div className="min-w-14 size-14 inline-flex rounded-md justify-center items-center bg-main">
                                <IdCardIcon className=" w-6 h-6 text-neutral-900" />
                            </div>
                            <p className="text-2xl">Führerschein</p>
                        </div>
                        <div className="flex flex-col items-center p-8 bg-sidebar border shadow gap-y-5 rounded-lg" data-aos="fade-up">
                            <div className="min-w-14 size-14 inline-flex rounded-md justify-center items-center bg-main">
                                <UserRoundCheckIcon className=" w-6 h-6 text-neutral-900" />
                            </div>
                            <p className="text-2xl">Ab 18 Jahren</p>
                        </div>
                        <div className="flex flex-col items-center p-8 bg-sidebar border shadow gap-y-5 rounded-lg" data-aos="fade-up">
                            <div className="min-w-14 size-14 inline-flex rounded-md justify-center items-center bg-main">
                                <BadgeEuroIcon className=" w-6 h-6 text-neutral-900" />
                            </div>
                            <p className="text-2xl">4000€ SB</p>
                        </div>
                        <div className="flex flex-col items-center p-8 bg-sidebar border shadow gap-y-5 rounded-lg" data-aos="fade-up">
                            <div className="min-w-14 size-14 inline-flex rounded-md justify-center items-center bg-main">
                                <BanknoteArrowDownIcon className=" w-6 h-6 text-neutral-900" />
                            </div>
                            <p className="text-2xl">Kaution 1000€</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className=" relative p-6 lg:p-12 rounded-lg overflow-hidden shadow border" data-aos="fade-right">
                            <div className="flex flex-col gap-y-5 items-start relative z-20">
                                <h3 className="text-main text-3xl">VW Golf 8 R Performance</h3>
                                <p className=" lg:text-lg">Der Golf 8 R Performance – gebaut für maximale Performance im Alltag und auf der Rennstrecke. Unter der Motorhaube arbeitet ein kraftvoller 2,0-Liter-TSI-Vierzylinder, der mit 333 PS und 420 Nm Drehmoment beeindruckt. In nur 4,7 Sekunden schießt er auf Tempo 100 und liefert dabei ein Fahrerlebnis, das unter die Haut geht. Besonders markant: die optionale Akrapovic‒Abgasanlage mit Titan-Endrohren – leicht, edel und mit einem Sound, der Emotionen weckt. Das fortschrittliche Allradsystem mit R‒Performance Torque Vectoring sorgt für messerscharfe Kurvenlage und volle Kontrolle in jeder Fahrsituation. Optisch zeigt sich der Golf R von seiner schärfsten Seite mit muskulösem Auftritt, R-spezifischer Front, markantem Diffusor und dezentem Dachkantenspoiler. Im Innenraum trifft Hightech auf Sportlichkeit: digitales Cockpit, R-Sportsitze und eine Verarbeitung, die keine Wünsche offenlässt.</p>
                                <Button variant={"main"} size="lg" className="font-semibold h-16 px-8 text-lg w-full lg:w-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Sportwagen mieten</a></Button>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/90 z-10 bg-no-repeat bg-center"></div>
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/qMvYXMHP/A7402872.jpg')] bg-cover bg-center z-0" />
                        </div>
                        <div className="p-6 lg:p-12 rounded-lg overflow-hidden shadow border bg-main flex flex-col gap-y-5 items-start" data-aos="fade-left">
                            <h3 className="text-neutral-900 text-3xl">Datenblatt</h3>
                            <div className="text-neutral-900 lg:text-lg">
                                <p><span className="font-semibold">Hersteller:</span> <span>Volkswagen</span></p>
                                <p><span className="font-semibold">Modell:</span> <span>Golf 8 R Performance</span></p>
                                <p><span className="font-semibold">Typ:</span> <span>Kompaktklasse</span></p>
                                <p><span className="font-semibold">Kraftstoffart:</span> <span>Benzin</span></p>
                                <p><span className="font-semibold">Getriebe:</span> <span>Automatik</span></p>
                                <p><span className="font-semibold">Leistung:</span> <span>333 PS</span></p>
                                <p><span className="font-semibold">Drehmoment:</span> <span>420 Nm</span></p>
                                <p><span className="font-semibold">Höchstgeschwindigkeit:</span> <span>270 km/h</span></p>
                                <p><span className="font-semibold">0–100 km/h:</span> <span>4,7 Sekunden</span></p>
                                <p><span className="font-semibold">Antrieb:</span> <span>Allradantrieb</span></p>
                                <p><span className="font-semibold">Sitze:</span> <span>5</span></p>
                            </div>
                            <h3 className="text-neutral-900 text-3xl">Mietbedingungen</h3>
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex flex-col md:flex-row gap-y-3 p-8 justify-between items-start md:items-center border border-main rounded-lg text-main">
                            <p className="text-xl">Mietpreis an Wochentagen (Mo-Do)</p>
                            <p className="text-xl">180,00 € inkl. 200 km</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-y-3 p-8 justify-between items-start md:items-center border border-main rounded-lg text-main">
                            <p className="text-xl">Mietpreis an Wochenenden (Fr, Sa, So)</p>
                            <p className="text-xl">190,00€ inkl. 200 km</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-y-3 p-8 justify-between items-start md:items-center border border-main rounded-lg text-main">
                            <p className="text-xl">Wochenendtarif 1 (Fr-So)</p>
                            <p className="text-xl">380,00€ inkl. 400 km</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-y-3 p-8 justify-between items-start md:items-center border border-main rounded-lg text-main">
                            <p className="text-xl">Wochenendtarif 2 (Fr-Mo)</p>
                            <p className="text-xl">465,00€ inkl. 500 km</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-y-3 p-8 justify-between items-start md:items-center border border-main rounded-lg text-main">
                            <p className="text-xl">Wochenpaket 5 Tage</p>
                            <p className="text-xl">680,00€ inkl. 800 km</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-y-3 p-8 justify-between items-start md:items-center border border-main rounded-lg text-main">
                            <p className="text-xl">Wochenpaket 7 Tage</p>
                            <p className="text-xl">850,00€ inkl. 1000 km</p>
                        </div>
                    </div>
                </div>
                <Faq />
            </main>
            <Footer />
        </div>
    );
}

export default VM_Golf_8;