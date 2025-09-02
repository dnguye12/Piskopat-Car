import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { BanknoteArrowDownIcon, GiftIcon, MailIcon, MessagesSquareIcon } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

const Coupon = () => {
    const [selected, setSelected] = useState(1)
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const count = 4

    const progress = (current * 100) / count;

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        <div className="contact w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px] mb-6">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-main font-orbi" data-aos="fade-right" data-aos-delay="300">Gutschein</h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-neutral-100" data-aos="fade-left" data-aos-delay="300">Schenken Sie die Freude eines Sportwagens</h2>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 lg:h-16 px-8 lg:text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>
                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://images.pexels.com/photos/26691199/pexels-photo-26691199.jpeg')] bg-cover bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                </div>
                <div className="container mx-auto mt-6 px-4">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 lg:col-span-2 bg-main rounded-lg border p-8 relative shadow">
                            <div className="relative flex flex-col items-start z-10 text-neutral-900 gap-y-4">
                                <h3 className="text-2xl lg:text-3xl">Gutschein sportwagen selber fahren!</h3>
                                <p className="lg:text-lg">Verschenken Sie einzigartige Freude und ein besonderes Erlebnis mit unserem Gutschein zum selber fahren. Wählen Sie aus einem allgemeinen Wertgutschein oder einer Fahrt in einem spezifischen Sportwagen. Gerne helfen wir Ihnen auch bei der Auswahl des passenden Geschenks.</p>
                                <Separator className="bg-accent" />
                                <div className="flex items-center gap-4 w-full">
                                    <Button size="lg" className="h-12 px-8 bg-neutral-900 text-neutral-100 hover:bg-neutral-800 group w-full sm:w-auto" asChild>
                                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank"><GiftIcon className="min-w-5 size-5 group-hover:mr-1 transition-all" /> Gutschein anfragen</a>
                                    </Button>
                                    <Button size="lg" className="hidden sm:flex h-12 px-8 bg-neutral-900 text-neutral-100 hover:bg-neutral-800 w-auto group" asChild>
                                        <Link to="/kontakt" target="_blank">Kontakt</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block col-span-1 rounded-lg border overflow-hidden shadow bg-[url('https://images.pexels.com/photos/29873585/pexels-photo-29873585.jpeg')] bg-cover bg-center">
                        </div>
                    </div>
                    <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
                        <div className="flex flex-col gap-6">
                            <div onClick={() => setSelected(1)} className={cn(
                                "py-4 lg:py-8 p-8 flex flex-col w-full gap-3 text-muted-foreground bg-accent rounded-lg border hover:text-foreground transition-all cursor-pointer hover:bg-sidebar",
                                selected === 1 && "text-neutral-900! bg-main hover:text-neutral-900 hover:bg-main",
                            )}>
                                <div className="flex items-center gap-x-3">
                                    <div className={cn(
                                        "border border-muted-foreground rounded-md min-w-8 size-8 hidden lg:inline-flex justify-center items-center transition-all",
                                        selected === 1 && "border-neutral-900"
                                    )}>
                                        <MessagesSquareIcon className="min-w-4 size-4" />
                                    </div>
                                    <p className="text-lg lg:text-xl">Gutschein anfragen</p>
                                </div>
                                <p className="text-sm lg:text-base transition-all text-start">Jetzt einfach Ihren Gutschein anfordern</p>
                            </div>
                            <div onClick={() => setSelected(2)} className={cn(
                                "py-4 lg:py-8 p-8 flex flex-col w-full gap-3 text-muted-foreground bg-accent rounded-lg border hover:text-foreground transition-all cursor-pointer hover:bg-sidebar",
                                selected === 2 && "text-neutral-900! bg-main hover:text-neutral-900 hover:bg-main",
                            )}>
                                <div className="flex items-center gap-x-3">
                                    <div className={cn(
                                        "border border-muted-foreground rounded-md min-w-8 size-8 hidden lg:inline-flex justify-center items-center transition-all",
                                        selected === 2 && "border-neutral-900 hover:text-neutral-900"
                                    )}>
                                        <BanknoteArrowDownIcon className="min-w-4 size-4" />
                                    </div>
                                    <p className="text-lg lg:text-xl">Bestellung abschließen</p>
                                </div>
                                <p className="text-sm lg:text-base transition-all text-start">Bequem und sicher Ihre Bestellung finalisieren</p>
                            </div>
                            <div onClick={() => setSelected(3)} className={cn(
                                "py-4 lg:py-8 p-8 flex flex-col w-full gap-3 text-muted-foreground bg-accent rounded-lg border hover:text-foreground transition-all cursor-pointer hover:bg-sidebar",
                                selected === 3 && "text-neutral-900! bg-main hover:text-neutral-900 hover:bg-main",
                            )}>
                                <div className="flex items-center gap-x-3">
                                    <div className={cn(
                                        "border border-muted-foreground rounded-md min-w-8 size-8 hidden lg:inline-flex justify-center items-center transition-all",
                                        selected === 3 && "border-neutral-900"
                                    )}>
                                        <MailIcon className="min-w-4 size-4" />
                                    </div>
                                    <p className="text-lg lg:text-xl">Gutschein erhalten</p>
                                </div>
                                <p className="text-sm lg:text-base transition-all text-start">Ihren Gutschein direkt per Mail bekommen</p>
                            </div>
                            <div onClick={() => setSelected(4)} className={cn(
                                "py-4 lg:py-8 p-8 flex flex-col w-full gap-3 text-muted-foreground bg-accent rounded-lg border hover:text-foreground transition-all cursor-pointer hover:bg-sidebar",
                                selected === 4 && "text-neutral-900 bg-main hover:text-neutral-900 hover:bg-main",
                            )}>
                                <div className="flex items-center gap-x-3">
                                    <div className={cn(
                                        "border border-muted-foreground rounded-md min-w-8 size-8 hidden lg:inline-flex justify-center items-center transition-all",
                                        selected === 4 && "border-neutral-900"
                                    )}>
                                        <GiftIcon className="min-w-4 size-4" />
                                    </div>
                                    <p className="text-lg lg:text-xl">Fahrfreude verschenken</p>
                                </div>
                                <p className="text-sm lg:text-base transition-all text-start">Ein besonderes Erlebnis als Geschenk überreichen</p>
                            </div>
                        </div>
                        {
                            selected === 1 && (
                                <div className="col-span-2 flex flex-col gap-6">
                                    <div className="p-8 bg-accent rounded-lg border flex flex-col items-start">
                                        <h4 className="text-3xl lg:text-4xl text-main font-medium">Gutschein anfragen</h4>
                                        <p className="lg:text-lg my-6">Du möchtest Fahrfreude verschenken? Sende uns einfach eine WhatsApp‒Nachricht und teile uns mit, welches Fahrzeug und welche Erlebnisdauer du verschenken möchtest oder frage nach einem flexiblen Wertgutschein.</p>
                                        <Button variant="main" size="lg" className="h-12 px-8 w-auto group" asChild>
                                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank"><GiftIcon className="min-w-5 size-5 group-hover:mr-1 transition-all" /> Gutschein anfragen</a>
                                        </Button>
                                    </div>
                                    <div className="rounded-lg overflow-hidden border bg-[url('https://images.pexels.com/photos/346734/pexels-photo-346734.jpeg')] bg-center bg-cover w-full h-full"></div>
                                </div>
                            )}
                        {
                            selected === 2 && (
                                <div className="col-span-2 flex flex-col gap-6">
                                    <div className="p-8 bg-accent rounded-lg border flex flex-col items-start">
                                        <h4 className="text-3xl lg:text-4xl text-main font-medium">Bestellung abschließen</h4>
                                        <p className="lg:text-lg my-6">Sobald wir Deine Anfrage erhalten haben, schicken wir Dir alle Infos zur Bestellung und Bezahlung direkt per WhatsApp zu. Du wählst deine gewünschte Zahlungsmethode (z.B. PayPal, Überweisung) und gibst deine Versandadresse an.</p>
                                        <Button variant="main" size="lg" className="h-12 px-8 w-auto group" asChild>
                                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank"><GiftIcon className="min-w-5 size-5 group-hover:mr-1 transition-all" /> Gutschein anfragen</a>
                                        </Button>
                                    </div>
                                    <div className="rounded-lg overflow-hidden border bg-[url('https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg')] bg-center bg-cover w-full h-full"></div>
                                </div>
                            )}
                        {
                            selected === 3 && (
                                <div className="col-span-2 flex flex-col gap-6">
                                    <div className="p-8 bg-accent rounded-lg border flex flex-col items-start">
                                        <h4 className="text-3xl lg:text-4xl text-main font-medium">Gutschein erhalten</h4>
                                        <p className="lg:text-lg my-6">Nach Zahlungseingang senden wir Dir den Gutschein ganz bequem per Post zu auf Wunsch auch direkt an die beschenkte Person.</p>
                                        <Button variant="main" size="lg" className="h-12 px-8 w-auto group" asChild>
                                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank"><GiftIcon className="min-w-5 size-5 group-hover:mr-1 transition-all" /> Gutschein anfragen</a>
                                        </Button>
                                    </div>
                                    <div className="rounded-lg overflow-hidden border bg-[url('https://images.pexels.com/photos/19130897/pexels-photo-19130897.jpeg')] bg-center bg-cover w-full h-full"></div>
                                </div>
                            )}
                        {
                            selected === 4 && (
                                <div className="col-span-2 flex flex-col gap-6">
                                    <div className="p-8 bg-accent rounded-lg border flex flex-col items-start">
                                        <h4 className="text-3xl lg:text-4xl text-main font-medium">Fahrfreude verschenken</h4>
                                        <p className="lg:text-lg my-6">Fertig! So einfach verschenkst Du ein exklusives Sportwagenerlebnis mit Monroe Sportwagenvermietung. Der Gutschein kann jederzeit unkompliziert eingelöst werden.</p>
                                        <Button variant="main" size="lg" className="h-12 px-8 w-auto group" asChild>
                                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank"><GiftIcon className="min-w-5 size-5 group-hover:mr-1 transition-all" /> Gutschein anfragen</a>
                                        </Button>
                                    </div>
                                    <div className="rounded-lg overflow-hidden border bg-[url('https://images.pexels.com/photos/1588073/pexels-photo-1588073.jpeg')] bg-center bg-cover w-full h-full"></div>
                                </div>
                            )}
                    </div>
                    <div className="block md:hidden mt-6">
                        <Carousel setApi={setApi} className="w-full mx-auto">
                            <CarouselContent className="-ml-4 ">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <CarouselItem key={index} className="pl-4">
                                        {
                                            index === 0 &&
                                            (
                                                <div className="rounded-lg bg-accent border p-0 overflow-hidden">
                                                    <div className="bg-[url('https://images.pexels.com/photos/346734/pexels-photo-346734.jpeg')] bg-cover bg-center aspect-video"></div>
                                                    <div className=" p-8">
                                                        <h4 className="text-2xl sm:text-3xl lg:text-4xl text-main font-medium">Gutschein anfragen</h4>
                                                        <p className="lg:text-lg my-6">Du möchtest Fahrfreude verschenken? Sende uns einfach eine WhatsApp‒Nachricht und teile uns mit, welches Fahrzeug und welche Erlebnisdauer du verschenken möchtest oder frage nach einem flexiblen Wertgutschein.</p>
                                                        <Button variant="main" size="lg" className="h-12 px-8 w-full sm:w-auto group" asChild>
                                                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank"><GiftIcon className="min-w-5 size-5 group-hover:mr-1 transition-all" /> Gutschein anfragen</a>
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            index === 1 &&
                                            (
                                                <div className="rounded-lg bg-accent border p-0 overflow-hidden">
                                                    <div className="bg-[url('https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg')] bg-cover bg-center aspect-video"></div>
                                                    <div className=" p-8">
                                                        <h4 className="text-2xl sm:text-3xl lg:text-4xl text-main font-medium">Bestellung abschließen</h4>
                                                        <p className="lg:text-lg my-6">Sobald wir Deine Anfrage erhalten haben, schicken wir Dir alle Infos zur Bestellung und Bezahlung direkt per WhatsApp zu. Du wählst deine gewünschte Zahlungsmethode (z.B. PayPal, Überweisung) und gibst deine Versandadresse an.</p>
                                                        <Button variant="main" size="lg" className="h-12 px-8 w-full sm:w-auto group" asChild>
                                                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank"><GiftIcon className="min-w-5 size-5 group-hover:mr-1 transition-all" /> Gutschein anfragen</a>
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            index === 2 &&
                                            (
                                                <div className="rounded-lg bg-accent border p-0 overflow-hidden">
                                                    <div className="bg-[url('https://images.pexels.com/photos/19130897/pexels-photo-19130897.jpeg')] bg-cover bg-center aspect-video"></div>
                                                    <div className=" p-8">
                                                        <h4 className="text-2xl sm:text-3xl lg:text-4xl text-main font-medium">Gutschein erhalten</h4>
                                                        <p className="lg:text-lg my-6">Nach Zahlungseingang senden wir Dir den Gutschein ganz bequem per Post zu auf Wunsch auch direkt an die beschenkte Person.</p>
                                                        <Button variant="main" size="lg" className="h-12 px-8 w-full sm:w-auto group" asChild>
                                                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank"><GiftIcon className="min-w-5 size-5 group-hover:mr-1 transition-all" /> Gutschein anfragen</a>
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            index === 3 &&
                                            (
                                                <div className="rounded-lg bg-accent border p-0 overflow-hidden">
                                                    <div className="bg-[url('https://images.pexels.com/photos/1588073/pexels-photo-1588073.jpeg')] bg-cover bg-center aspect-video"></div>
                                                    <div className=" p-8">
                                                        <h4 className="text-2xl sm:text-3xl lg:text-4xl text-main font-medium">Fahrfreude verschenken</h4>
                                                        <p className="lg:text-lg my-6">Fertig! So einfach verschenkst Du ein exklusives Sportwagenerlebnis mit Monroe Sportwagenvermietung. Der Gutschein kann jederzeit unkompliziert eingelöst werden.</p>
                                                        <Button variant="main" size="lg" className="h-12 px-8 w-full sm:w-auto group" asChild>
                                                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank"><GiftIcon className="min-w-5 size-5 group-hover:mr-1 transition-all" /> Gutschein anfragen</a>
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="inline-flex top-[calc(100%+0.5rem)] translate-y-0 left-0 shadow" />
                            <CarouselNext className="inline-flex top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full shadow" />
                        </Carousel>
                        <Progress value={progress} className="w-48 h-3 ml-auto mt-5 shadow" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Coupon;