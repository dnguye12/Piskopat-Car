import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CakeIcon, CalendarCheckIcon, Clock7Icon, GiftIcon, HeartIcon, UserRoundPlusIcon, ZapIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const TestMoments = () => {
    const [active, setActive] = useState<number | null>(null)
    const baseCard = "card group p-8 flex flex-col h-96 transition-[flex-basis] will-change-[flex-basis] border rounded-lg relative overflow-hidden duration-500 transform-gpu"

    const classFor = (i: number) => {
        if (active === null) {
            return "basis-1/4"
        }
        return active === i ? "basis-3/4" : "basis-1/12";
    }

    const headingClass = (i: number) =>
        cn(
            "text-main text-2xl lg:text-3xl transition-opacity duration-500 transform-gpu",
            active !== null && active !== i && "opacity-0"
        );

    return (
        <>

            <section className="py-6">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="aspect-[2/1] bg-[url('https://i.ibb.co/qYNX66sQ/moments.jpg')] bg-cover bg-center border shadow rounded-lg"></div>
                        <div className="flex flex-col pr-8 justify-center items-start ">
                            <h3 className="text-main text-4xl md:text-5xl z-20 font-medium">Wähle deinen Moment</h3>
                            <h5 className="text-3xl md:text-4xl z-20">Dein Moment. Unser Sportwagen.</h5>
                            <p className="text-lg text-muted-foreground max-w-xl my-6">Dein besonderer Anlass, unser Sportwagen – miete ihn für Hochzeit, Wochenende oder Events.</p>
                            <Button variant={"main"} size="lg" className="font-semibold h-12 border w-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>

                    </div>

                    <div className="mt-6 hidden lg:flex gap-6" onMouseLeave={() => setActive(null)} data-aos="fade-up">
                        <div onMouseEnter={() => setActive(0)} className={`${baseCard} ${classFor(0)}`}>
                            <div className="absolute top-1/2 left-1/2 -translate-1/2 z-20 flex flex-col gap-y-4 items-center transition-all group-hover:opacity-0 !duration-500">
                                <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                                    <ZapIcon className="w-7 h-7 text-main" />
                                </div>
                                <h3 className={headingClass(0)}>Tagesmiete</h3>
                            </div>
                            <div className="flex flex-col justify-between h-full opacity-0 group-hover:opacity-100 transition-all !duration-500">
                                <div className="relative z-20 w-14 h-14 rounded-md flex justify-center items-center border border-main mb-5 lg:mb-0">
                                    <ZapIcon className="w-7 h-7 text-main" />
                                </div>
                                <div className="relative z-20 flex flex-col items-start gap-y-5">
                                    <h2 className="text-main text-2xl lg:text-3xl">Tagesmiete</h2>
                                    <p className="text-neutral-100 lg:text-lg">Erlebe Performance pur – ideal für spontane Auszeiten oder den großen Auftritt.</p>
                                    <Button size={"lg"} variant={"main"} className="!px-8 h-12 " asChild>
                                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                            <span className=" text-base">Jetzt buchen</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className={`w-full h-full z-10 absolute top-0 left-0 transition-all !duration-500 bg-accent/66 ${active !== null && active === 0 && "backdrop-blur-sm"}`}></div>
                            <img
                                src="https://i.ibb.co/4nBKjNNt/pexels-photo-13781.jpg"
                                fetchPriority="high"
                                className="w-full h-full z-0 absolute top-0 left-0 object-cover object-center"
                            />
                        </div>
                        <div onMouseEnter={() => setActive(1)} className={`${baseCard} ${classFor(1)}`}>
                            <div className="absolute top-1/2 left-1/2 -translate-1/2 z-20 flex flex-col gap-y-4 items-center transition-all group-hover:opacity-0 !duration-500">
                                <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                                    <Clock7Icon className="w-7 h-7 text-main" />
                                </div>
                                <h3 className={headingClass(1)}>Wochenendmiete</h3>
                            </div>
                            <div className="flex flex-col justify-between h-full opacity-0 group-hover:opacity-100 transition-all !duration-500">
                                <div className="relative z-20 w-14 h-14 rounded-md flex justify-center items-center border border-main mb-5 lg:mb-0">
                                    <Clock7Icon className="w-7 h-7 text-main" />
                                </div>
                                <div className="relative z-20 flex flex-col items-start gap-y-5">
                                    <h2 className="text-main text-2xl lg:text-3xl">Wochenendmiete</h2>
                                    <p className="text-neutral-100 lg:text-lg">Ein ganzes Wochenende im Sportwagen: Stil, Power und Leidenschaft. Ob Kurztrip oder ein besonderes Date – hier wird jeder Moment einzigartig.</p>
                                    <Button size={"lg"} variant={"main"} className="py-2 !px-8 h-14 " asChild>
                                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                            <span className=" text-lg">Jetzt buchen</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className={`w-full h-full z-10 absolute top-0 left-0 transition-all !duration-500 bg-accent/66 ${active !== null && active === 1 && "backdrop-blur-sm"}`}></div>
                            <img
                                src="https://i.ibb.co/BVxh3r38/moments1.jpg"
                                fetchPriority="high"
                                className="w-full h-full z-0 absolute top-0 left-0 object-cover object-center"
                            />
                        </div>
                        <div onMouseEnter={() => setActive(2)} className={`${baseCard} ${classFor(2)}`}>
                            <div className="absolute top-1/2 left-1/2 -translate-1/2 z-20 flex flex-col gap-y-4 items-center transition-all group-hover:opacity-0 !duration-500">
                                <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                                    <HeartIcon className="w-7 h-7 text-main" />
                                </div>
                                <h3 className={headingClass(2)}>Hochzeitsmiete</h3>
                            </div>
                            <div className="flex flex-col justify-between h-full opacity-0 group-hover:opacity-100 transition-all !duration-500">
                                <div className="relative z-20 w-14 h-14 rounded-md flex justify-center items-center border border-main mb-5 lg:mb-0">
                                    <HeartIcon className="w-7 h-7 text-main" />
                                </div>
                                <div className="relative z-20 flex flex-col items-start gap-y-5">
                                    <h2 className="text-main text-2xl lg:text-3xl">Hochzeitsmiete</h2>
                                    <p className="text-neutral-100 lg:text-lg">Mit Stil ankommen, mit Emotion weiterfahren – unsere Fahrzeuge schenken dir den perfekten Auftritt und verwandeln deine Hochzeit in eine unvergessliche Fahrt ins Glück.</p>
                                    <Button size={"lg"} variant={"main"} className="py-2 !px-8 h-14 " asChild>
                                        <Link to="/hochzeitsmiete" className="gap-x-1">

                                            <span className=" text-lg">Hochzeitsmiete</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className={`w-full h-full z-10 absolute top-0 left-0 transition-all !duration-500 bg-accent/66 ${active !== null && active === 2 && "backdrop-blur-sm"}`}></div>
                            <img
                                src="https://i.ibb.co/5XcysVT8/moments2.jpg"
                                fetchPriority="high"
                                className="w-full h-full z-0 absolute top-0 left-0 object-cover object-center"
                            />
                        </div>
                        <div onMouseEnter={() => setActive(3)} className={`${baseCard} ${classFor(3)}`}>
                            <div className="absolute top-1/2 left-1/2 -translate-1/2 z-20 flex flex-col gap-y-4 items-center transition-all group-hover:opacity-0 !duration-500">
                                <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                                    <CalendarCheckIcon className="w-7 h-7 text-main" />
                                </div>
                                <h3 className={headingClass(3)}>Langzeitmiete</h3>
                            </div>
                            <div className="flex flex-col justify-between h-full opacity-0 group-hover:opacity-100 transition-all !duration-500">
                                <div className="relative z-20 w-14 h-14 rounded-md flex justify-center items-center border border-main mb-5 lg:mb-0">
                                    <CalendarCheckIcon className="w-7 h-7 text-main" />
                                </div>
                                <div className="relative z-20 flex flex-col items-start gap-y-5">
                                    <h2 className="text-main text-2xl lg:text-3xl">Langzeitmiete</h2>
                                    <p className="text-neutral-100 lg:text-lg">Ob Projekt, Aufenthalt oder einfach Lifestyle: Mit unseren Sportwagen bleibst du flexibel – und fährst immer mit Stil.</p>
                                    <Button size={"lg"} variant={"main"} className="py-2 !px-8 h-14 " asChild>
                                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                            <span className=" text-lg">Jetzt buchen</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className={`w-full h-full z-10 absolute top-0 left-0 transition-all !duration-500 bg-accent/66 ${active !== null && active === 3 && "backdrop-blur-sm"}`}></div>
                            <img
                                src="https://i.ibb.co/Z6QsYt3x/pexels-photo-620335.jpg"
                                fetchPriority="high"
                                className="w-full h-full z-0 absolute top-0 left-0 object-cover object-center"
                            />
                        </div>

                    </div>



                    <div className="mt-6 grid lg:hidden grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div className="flex flex-col justify-between rounded-lg border p-8 relative overflow-hidden">
                            <div className="flex items-center gap-x-4 relative z-20 ">
                                <div className="w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                    <ZapIcon className="w-5 h-5 text-main" />
                                </div>
                                <h2 className="text-main text-2xl lg:text-3xl">Tagesmiete</h2>
                            </div>
                            <div className="relative z-20">
                                <p className="text-neutral-100 lg:text-lg my-6">Erlebe Performance pur – ideal für spontane Auszeiten oder den großen Auftritt.</p>
                                <Button size={"lg"} variant={"main"} className="w-full h-12" asChild>
                                    <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                        <span className="text-base">Jetzt buchen</span>
                                    </a>
                                </Button>
                            </div>
                            <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                            <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://i.ibb.co/4nBKjNNt/pexels-photo-13781.jpg')] bg-cover bg-center"></div>
                        </div>
                        <div className="flex flex-col justify-between rounded-lg border p-8 relative overflow-hidden">
                            <div className="flex items-center gap-x-4 relative z-20 ">
                                <div className="w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                    <Clock7Icon className="w-5 h-5 text-main" />
                                </div>
                                <h2 className="text-main text-2xl lg:text-3xl">Wochenendmiete</h2>
                            </div>
                            <div className="relative z-20">
                                <p className="text-neutral-100 lg:text-lg my-6">Ein ganzes Wochenende im Sportwagen: Stil, Power und Leidenschaft. Ob Kurztrip oder ein besonderes Date – hier wird jeder Moment einzigartig.</p>
                                <Button size={"lg"} variant={"main"} className="w-full h-12" asChild>
                                    <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                        <span className="text-base">Jetzt buchen</span>
                                    </a>
                                </Button>
                            </div>
                            <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                            <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://i.ibb.co/BVxh3r38/moments1.jpg')] bg-cover bg-center"></div>
                        </div>
                        <div className="flex flex-col justify-between rounded-lg border p-8 relative overflow-hidden">
                            <div className="flex items-center gap-x-4 relative z-20 ">
                                <div className="w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                    <HeartIcon className="w-5 h-5 text-main" />
                                </div>
                                <h2 className="text-main text-2xl lg:text-3xl">Hochzeitsmiete</h2>
                            </div>
                            <div className="relative z-20">
                                <p className="text-neutral-100 lg:text-lg my-6">Mit Stil ankommen, mit Emotion weiterfahren – unsere Fahrzeuge schenken dir den perfekten Auftritt und verwandeln deine Hochzeit in eine unvergessliche Fahrt ins Glück.</p>
                                <Button size={"lg"} variant={"main"} className="w-full h-12" asChild>
                                    <Link to="/hochzeitsmiete" className="">

                                        <span className=" text-base">Hochzeitsmiete</span>
                                    </Link>
                                </Button>
                            </div>
                            <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                            <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://i.ibb.co/5XcysVT8/moments2.jpg')] bg-cover bg-center"></div>
                        </div>
                        <div className="flex flex-col justify-between rounded-lg border p-8 relative overflow-hidden">
                            <div className="flex items-center gap-x-4 relative z-20 ">
                                <div className="w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                    <CalendarCheckIcon className="w-5 h-5 text-main" />
                                </div>
                                <h2 className="text-main text-2xl lg:text-3xl">Langzeitmiete</h2>
                            </div>
                            <div className="relative z-20">
                                <p className="text-neutral-100 lg:text-lg my-6">Ob Projekt, Aufenthalt oder einfach Lifestyle: Mit unseren Sportwagen bleibst du flexibel – und fährst immer mit Stil..</p>
                                <Button size={"lg"} variant={"main"} className="w-full h-12" asChild>
                                    <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                        <span className="text-base">Jetzt buchen</span>
                                    </a>
                                </Button>
                            </div>
                            <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                            <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://i.ibb.co/Z6QsYt3x/pexels-photo-620335.jpg')] bg-cover bg-center"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-accent">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 container mx-auto px-6 py-6">
                    <div className="p-8 bg-main rounded-lg border shadow relative overflow-hidden flex flex-col justify-end items-start" data-aos="fade-up">
                        <div className="flex gap-x-4 items-center mb-4">
                            <div className="min-w-10 size-10 border border-neutral-900 rounded inline-flex justify-center items-center">
                                <GiftIcon className="text-neutral-900 size-5" />
                            </div>
                            <h2 className="text-3xl text-neutral-900 font-medium z-10">Unsere Rabatte</h2>
                        </div>
                        <p className="text-neutral-900 text-lg">Sichere dir exklusive Preisvorteile und fahr deinen Traumwagen zu Konditionen, die begeistern.</p>
                        <Button asChild size={"lg"} className="w-full lg:w-auto mt-4 bg-neutral-900 hover:bg-neutral-900/80 text-neutral-100 relative z-10">
                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="h-12">Jetzt buchen</a>
                        </Button>
                        <GiftIcon strokeWidth={1} className="absolute top-1/2 left-1/2 -translate-1/2 opacity-10 w-3/5 h-auto text-neutral-900 -rotate-12 z-10" />
                        <GiftIcon strokeWidth={1} className="absolute top-0 left-0 -translate-1/2 opacity-10 w-3/5 h-auto text-neutral-900 -rotate-12 z-10" />
                        <GiftIcon strokeWidth={1} className="absolute top-full left-full -translate-1/2 opacity-10 w-3/5 h-auto text-neutral-900 -rotate-12 z-10" />
                        <GiftIcon strokeWidth={1} className="absolute top-full left-0 -translate-1/2 opacity-10 w-3/5 h-auto text-neutral-900 -rotate-12 z-10" />
                        <GiftIcon strokeWidth={1} className="absolute top-0 left-full -translate-1/2 opacity-10 w-3/5 h-auto text-neutral-900 -rotate-12 z-10" />
                    </div >
                    <div className="flex flex-col rounded-lg border shadow overflow-hidden relative">
                        <div className="absolute w-full h-full bg-[url('https://images.pexels.com/photos/7144177/pexels-photo-7144177.jpeg?w=960')] bg-cover z-0"></div>
                        <div className="pt-64 h-full relative z-20">
                            <div className="mb-16 hidden items-stretch">
                                <div className="bg-neutral-100 uppercase text-center text-neutral-100 w-5 moment-helper"></div>
                                <div className="border-y-2 border-y-neutral-100 uppercase text-neutral-100 text-center ">

                                    <div className="mt-4 px-5 font-black text-5xl font-sans">10%</div>
                                    <div className="mb-4 font-black text-3xl">Rabatt</div>
                                </div>
                                <div className="bg-neutral-100 uppercase text-center text-neutral-100 w-5 moment-helper2"></div>
                            </div>
                            <div className="flex flex-col items-start gap-4 p-8 bg-accent/66 backdrop-blur-xs z-10 relative">
                                <div className="flex gap-x-4 items-center">
                                    <div className="min-w-10 size-10 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                                        <UserRoundPlusIcon className=" size-5" />
                                    </div>
                                    <h3 className=" text-3xl font-medium text-main">10% Neukundenrabatt</h3>
                                </div>
                                <p className="text-lg">Neu bei uns? Sichere dir jetzt 10% Rabatt auf deine erste Sportwagen-Miete – unser Geschenk zum Start.</p>
                                <Button asChild size={"lg"} variant={"main"}>
                                    <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="h-12">Jetzt buchen</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg border shadow overflow-hidden relative">
                        <div className="absolute w-full h-full bg-[url('https://images.pexels.com/photos/2318049/pexels-photo-2318049.jpeg?w=960')] bg-cover z-0"></div>
                        <div className="pt-64 h-full relative z-20">
                            <div className="flex flex-col items-start gap-4 p-8 bg-accent/66 backdrop-blur-xs z-10 relative">
                                <div className="flex gap-x-4 items-center">
                                    <div className="min-w-10 size-10 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                                        <HeartIcon className=" size-5" />
                                    </div>
                                    <h3 className=" text-3xl font-medium text-main">10% Hochzeitsrabatt</h3>
                                </div>
                                <p className="text-lg">Der schönste Tag deines Lebens, noch unvergesslicher: Sichere dir 10% Rabatt auf dein Hochzeitsauto – mit Heiratsnachweis und jeder Menge Stil.</p>
                                <Button asChild size={"lg"} variant={"main"}>
                                    <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="h-12">Jetzt buchen</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg border shadow overflow-hidden relative">
                        <div className="absolute w-full h-full bg-[url('https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?w=960')] bg-cover z-0"></div>
                        <div className="pt-64 h-full relative z-20">
                            <div className="flex flex-col items-start gap-4 p-8 bg-accent/66 backdrop-blur-xs z-10 relative">
                                <div className="flex gap-x-4 items-center">
                                    <div className="min-w-10 size-10 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                                        <CakeIcon className=" size-5" />
                                    </div>
                                    <h3 className=" text-3xl font-medium text-main">5% Geburtstagsrabatt</h3>
                                </div>
                                <p className="text-lg">Feier mit uns und sichere dir 5% Rabatt auf deine nächste Miete. Zum ersten Mal dabei? Dann gibt’s sogar ganze 15%!</p>
                                <Button asChild size={"lg"} variant={"main"}>
                                    <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="h-12">Jetzt buchen</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TestMoments;