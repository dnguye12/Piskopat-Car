import { Button } from "@/components/ui/button";
import { CakeIcon, CalendarCheckIcon, Clock7Icon, HeartIcon, UserRoundPlusIcon, ZapIcon } from "lucide-react";
import { Link } from "react-router";

const TestMoments = () => {
    return (
        <section className="container mx-auto px-6">
            <div className="rounded-lg p-6 py-20 relative overflow-hidden flex justify-center items-center shadow-md border mt-6" data-aos="fade-up">
                <div className="z-20">
                    <h5 className="text-3xl sm:text-4xl md:text-5xl text-neutral-100 z-20 mb-2 text-center">Dein Anlass. Unsere Sportwagen.</h5>
                    <h3 className="text-main text-3xl sm:text-4xl md:text-5xl z-20 font-orbi text-center">Wähle deinen Moment</h3>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-75 dark:opacity-50 z-10 bg-no-repeat"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/9H0wSD5f/moments.jpg')] bg-cover bg-center z-0" />
            </div>

            <div
                className="mt-6 hidden lg:flex gap-6
         [&:has(.card:hover)_.card]:w-1/12
         [&:has(.card:hover)_.card:hover]:w-3/4
         [&:has(.card:hover)_.card:not(:hover)_h3]:opacity-0
    [&:has(.card:hover)_.card:hover_h3]:opacity-100
         " data-aos="fade-up">
                <div className="card group w-1/4 p-8 flex flex-col h-96 transition-all border rounded-lg relative overflow-hidden !duration-500">
                    <div className="absolute top-1/2 left-1/2 -translate-1/2 z-20 flex flex-col gap-y-4 items-center transition-all group-hover:opacity-0 !duration-500">
                        <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                            <ZapIcon className="w-7 h-7 text-main" />
                        </div>
                        <h3 className="text-main text-2xl lg:text-3xl !duration-500">Tagesmiete</h3>
                    </div>
                    <div className="flex flex-col justify-between h-full opacity-0 group-hover:opacity-100 transition-all !duration-500">
                        <div className="relative z-20 w-14 h-14 rounded-md flex justify-center items-center border border-main mb-5 lg:mb-0">
                            <ZapIcon className="w-7 h-7 text-main" />
                        </div>
                        <div className="relative z-20 flex flex-col items-start gap-y-5">
                            <h2 className="text-main text-2xl lg:text-3xl">Tagesmiete</h2>
                            <p className="text-neutral-100 lg:text-lg">Ein ganzer Tag voller Performance – perfekt für spontane Auszeiten oder besondere Anlässe.</p>
                            <Button size={"lg"} variant={"main"} className="py-2 !px-8 h-14 " asChild>
                                <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                    <span className=" text-lg">Jetzt buchen</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg')] bg-cover bg-center"></div>
                </div>
                <div className="card group w-1/4 p-8 flex flex-col h-96 transition-all border rounded-lg relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-1/2 z-20 flex flex-col gap-y-4 items-center transition-all group-hover:opacity-0 !duration-500">
                        <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                            <Clock7Icon className="w-7 h-7 text-main" />
                        </div>
                        <h3 className="text-main text-2xl lg:text-3xl !duration-500">Wochenendmiete</h3>
                    </div>
                    <div className="flex flex-col justify-between h-full opacity-0 group-hover:opacity-100 transition-all !duration-500">
                        <div className="relative z-20 w-14 h-14 rounded-md flex justify-center items-center border border-main mb-5 lg:mb-0">
                            <Clock7Icon className="w-7 h-7 text-main" />
                        </div>
                        <div className="relative z-20 flex flex-col items-start gap-y-5">
                            <h2 className="text-main text-2xl lg:text-3xl">Wochenendmiete</h2>
                            <p className="text-neutral-100 lg:text-lg">Zwei Tage, unbegrenzte Emotion: Genieße die volle Ladung Fahrspaß von Freitag bis Sonntag. Ideal für Kurztrips, besondere Dates oder einfach nur, um dem Alltag zu entfliehen – mit Stil und Power.</p>
                            <Button size={"lg"} variant={"main"} className="py-2 !px-8 h-14 " asChild>
                                <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                    <span className=" text-lg">Jetzt buchen</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://i.ibb.co/d42JWdjc/moments1.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="card group w-1/4 p-8 flex flex-col h-96 transition-all border rounded-lg relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-1/2 z-20 flex flex-col gap-y-4 items-center transition-all group-hover:opacity-0 !duration-500">
                        <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                            <HeartIcon className="w-7 h-7 text-main" />
                        </div>
                        <h3 className="text-main text-2xl lg:text-3xl !duration-500">Hochzeitsmiete</h3>
                    </div>
                    <div className="flex flex-col justify-between h-full opacity-0 group-hover:opacity-100 transition-all !duration-500">
                        <div className="relative z-20 w-14 h-14 rounded-md flex justify-center items-center border border-main mb-5 lg:mb-0">
                            <HeartIcon className="w-7 h-7 text-main" />
                        </div>
                        <div className="relative z-20 flex flex-col items-start gap-y-5">
                            <h2 className="text-main text-2xl lg:text-3xl">Hochzeitsmiete</h2>
                            <p className="text-neutral-100 lg:text-lg">Der Moment, in dem sich alles ändert, beginnt mit deinem perfekten Auftritt. Unsere Fahrzeuge machen aus deiner Hochzeit mehr als ein Fest – sie machen sie zu einer unvergesslichen Fahrt ins Glück.</p>
                            <Button size={"lg"} variant={"main"} className="py-2 !px-8 h-14 " asChild>
                                <Link to="/hochzeitsmiete" className="gap-x-1">

                                    <span className=" text-lg">Hochzeitsmiete</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://i.ibb.co/MDstTCFs/moments2.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="card group w-1/4 p-8 flex flex-col h-96 transition-all border rounded-lg relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-1/2 z-20 flex flex-col gap-y-4 items-center transition-all group-hover:opacity-0 !duration-500">
                        <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                            <CalendarCheckIcon className="w-7 h-7 text-main" />
                        </div>
                        <h3 className="text-main text-2xl lg:text-3xl !duration-500">Langzeitmiete</h3>
                    </div>
                    <div className="flex flex-col justify-between h-full opacity-0 group-hover:opacity-100 transition-all !duration-500">
                        <div className="relative z-20 w-14 h-14 rounded-md flex justify-center items-center border border-main mb-5 lg:mb-0">
                            <CalendarCheckIcon className="w-7 h-7 text-main" />
                        </div>
                        <div className="relative z-20 flex flex-col items-start gap-y-5">
                            <h2 className="text-main text-2xl lg:text-3xl">Langzeitmiete</h2>
                            <p className="text-neutral-100 lg:text-lg">Ob für besondere Projekte oder längere Aufenthalte: Wir liefern Fahrgefühl auf Zeit</p>
                            <Button size={"lg"} variant={"main"} className="py-2 !px-8 h-14 " asChild>
                                <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                    <span className=" text-lg">Jetzt buchen</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg')] bg-cover bg-center"></div>
                </div>

            </div>



            <div className="mt-6 grid lg:hidden grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="flex flex-col justify-between rounded-lg border p-8 relative overflow-hidden" data-aos="fade-left">
                    <div className="flex items-center gap-x-4 relative z-20 ">
                        <div className="w-10 h-10 rounded-md flex justify-center items-center border border-main">
                            <ZapIcon className="w-5 h-5 text-main" />
                        </div>
                        <h2 className="text-main text-2xl lg:text-3xl">Tagesmiete</h2>
                    </div>
                    <div className="relative z-20">
                        <p className="text-neutral-100 lg:text-lg my-6">Ein ganzer Tag voller Performance – perfekt für spontane Auszeiten oder besondere Anlässe.</p>
                        <Button size={"lg"} variant={"main"} className="w-full h-12" asChild>
                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                <span className="text-base">Jetzt buchen</span>
                            </a>
                        </Button>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg')] bg-cover bg-center"></div>
                </div>
                <div className="flex flex-col justify-between rounded-lg border p-8 relative overflow-hidden" data-aos="fade-left">
                    <div className="flex items-center gap-x-4 relative z-20 ">
                        <div className="w-10 h-10 rounded-md flex justify-center items-center border border-main">
                            <Clock7Icon className="w-5 h-5 text-main" />
                        </div>
                        <h2 className="text-main text-2xl lg:text-3xl">Wochenendmiete</h2>
                    </div>
                    <div className="relative z-20">
                        <p className="text-neutral-100 lg:text-lg my-6">Zwei Tage, unbegrenzte Emotion: Genieße die volle Ladung Fahrspaß von Freitag bis Sonntag. Ideal für Kurztrips, besondere Dates oder einfach nur, um dem Alltag zu entfliehen – mit Stil und Power.</p>
                        <Button size={"lg"} variant={"main"} className="w-full h-12" asChild>
                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                <span className="text-base">Jetzt buchen</span>
                            </a>
                        </Button>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://i.ibb.co/d42JWdjc/moments1.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="flex flex-col justify-between rounded-lg border p-8 relative overflow-hidden" data-aos="fade-left">
                    <div className="flex items-center gap-x-4 relative z-20 ">
                        <div className="w-10 h-10 rounded-md flex justify-center items-center border border-main">
                            <HeartIcon className="w-5 h-5 text-main" />
                        </div>
                        <h2 className="text-main text-2xl lg:text-3xl">Hochzeitsmiete</h2>
                    </div>
                    <div className="relative z-20">
                        <p className="text-neutral-100 lg:text-lg my-6">Der Moment, in dem sich alles ändert, beginnt mit deinem perfekten Auftritt. Unsere Fahrzeuge machen aus deiner Hochzeit mehr als ein Fest – sie machen sie zu einer unvergesslichen Fahrt ins Glück.</p>
                        <Button size={"lg"} variant={"main"} className="w-full h-12" asChild>
                            <Link to="/hochzeitsmiete" className="">

                                <span className=" text-base">Hochzeitsmiete</span>
                            </Link>
                        </Button>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://i.ibb.co/MDstTCFs/moments2.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="flex flex-col justify-between rounded-lg border p-8 relative overflow-hidden" data-aos="fade-left">
                    <div className="flex items-center gap-x-4 relative z-20 ">
                        <div className="w-10 h-10 rounded-md flex justify-center items-center border border-main">
                            <CalendarCheckIcon className="w-5 h-5 text-main" />
                        </div>
                        <h2 className="text-main text-2xl lg:text-3xl">Langzeitmiete</h2>
                    </div>
                    <div className="relative z-20">
                        <p className="text-neutral-100 lg:text-lg my-6">Ob für besondere Projekte oder längere Aufenthalte: Wir liefern Fahrgefühl auf Zeit.</p>
                        <Button size={"lg"} variant={"main"} className="w-full h-12" asChild>
                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                <span className="text-base">Jetzt buchen</span>
                            </a>
                        </Button>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg')] bg-cover bg-center"></div>
                </div>
            </div>
            <div className="mt-6 hidden sm:flex flex-col lg:grid grid-cols-2 rounded-lg bg-accent shadow border overflow-hidden" data-aos="fade-up">
                <div className="flex flex-col gap-6 lg:gap-10 p-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-main text-center lg:text-start">Rabattmöglichkeiten</h2>
                    <div className="flex gap-x-6">
                        <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                            <UserRoundPlusIcon className="size-5 lg:size-7 " />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg sm:text-xl lg:text-2xl mb-2 sm:leading-none text-main">10% Neukundenrabatt</h3>
                            <p className=" text-muted-foreground lg:text-lg lg:max-w-xl">Zum ersten Mal bei uns? Dann bekommst du 10% Rabatt auf deine
                                erste Fahrzeuganmietung als Willkommensgeschenk!</p>
                        </div>
                    </div>

                    <div className="flex gap-x-6">
                        <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                            <HeartIcon className=" size-5 lg:size-7" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className=" text-lg sm:text-xl lg:text-2xl mb-2 sm:leading-none text-main">10% Hochzeitsrabatt</h3>
                            <p className=" text-muted-foreground lg:text-lg lg:max-w-xl">Der große Tag steht an? Wir machen ihn noch schöner: 10% Rabatt auf dein Hochzeitsfahrzeug. Einfach Heiratsnachweis vorlegen und stilvoll durchstarten.</p>
                        </div>
                    </div>

                    <div className="flex gap-x-6">
                        <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                            <CakeIcon className=" size-5 lg:size-7" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className=" text-lg sm:text-xl lg:text-2xl mb-2 sm:leading-none text-main">5% Geburtstagsrabatt</h3>
                            <p className=" text-muted-foreground lg:text-lg lg:max-w-xl">Feier mit uns und erhalte 5% Rabatt auf deine nächste Miete.
                                Wenn du zusätzlich zum ersten Mal bei uns buchst, gibt’s sogar satte 15%!</p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block w-full bg-[url('https://i.ibb.co/j9YF9qCp/discount.jpg')] bg-cover bg-center border"></div>
            </div>
            <div className="mt-6 flex sm:hidden flex-col rounded-lg bg-accent shadow border overflow-hidden">
                <div className="flex flex-col gap-6 lg:gap-10 p-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-main text-center lg:text-start">Rabattmöglichkeiten</h2>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-x-2">
                            <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                                <UserRoundPlusIcon className="size-5 lg:size-7 " />
                            </div>
                            <h3 className="text-lg text-main">10% Neukundenrabatt</h3>
                        </div>
                        <p className="">Zum ersten Mal bei uns? Dann bekommst du 10% Rabatt auf deine erste Fahrzeuganmietung als Willkommensgeschenk!</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-x-2">
                            <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                                <HeartIcon className="size-5 lg:size-7 " />
                            </div>
                            <h3 className="text-lg text-main">10% Hochzeitsrabatt</h3>
                        </div>
                        <p className="">Der große Tag steht an? Wir machen ihn noch schöner: 10% Rabatt auf dein Hochzeitsfahrzeug. Einfach Heiratsnachweis vorlegen und stilvoll durchstarten.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-x-2">
                            <div className="min-w-10 size-10 lg:min-w-14 lg:size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                                <UserRoundPlusIcon className="size-5 lg:size-7 " />
                            </div>
                            <h3 className="text-lg text-main">5% Geburtstagsrabatt</h3>
                        </div>
                        <p className="">Feier mit uns und erhalte 5% Rabatt auf deine nächste Miete. Wenn du zusätzlich zum ersten Mal bei uns buchst, gibt’s sogar satte 15%!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestMoments;