import { Button } from "@/components/ui/button";
import { CakeIcon, CalendarCheckIcon, Clock7Icon, HeartIcon, UserRoundPlusIcon } from "lucide-react";
import { Link } from "react-router";

const TestMoments = () => {
    return (
        <section className="container mx-auto mt-6 px-6">
            <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="flex flex-col justify-center items-center bg-main rounded-lg shadow-md border p-8 lg:p-14" data-aos="fade-up" data-aos-delay="100">
                    <div className=" w-14 h-14 rounded-md flex justify-center items-center border-2 border-neutral-900">
                        <CalendarCheckIcon className="w-7 h-7 text-neutral-900" />
                    </div>
                    <h2 className="mt-5 text-neutral-900 text-2xl lg:text-3xl">Langzeitmiete</h2>
                    <p className="mt-5 text-neutral-900 lg:text-lg text-center min-h-[140px]">Ob für besondere Projekte, längere Aufenthalte oder einfach, weil du auf Performance nicht verzichten willst: Wir liefern Fahrgefühl auf Zeit.</p>
                    <Button size={"lg"} className="mt-5 py-2 !px-8 h-14 bg-neutral-900 text-neutral-100 hover:bg-neutral-900/80" asChild>
                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                            <span className=" text-lg font-semibold">Sportwagen mieten</span>
                        </a>
                    </Button>
                </div>

                <div className="rounded-lg shadow-md border p-8 lg:p-14 relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                    <div className="flex flex-col justify-center items-center relative z-20">
                        <div className=" w-14 h-14 rounded-md flex justify-center items-center border-2 border-main">
                            <Clock7Icon className="w-7 h-7 text-main" />
                        </div>
                        <h2 className="mt-5 text-main text-2xl lg:text-3xl">Wochenendmiete</h2>
                        <p className="mt-5 text-neutral-100 lg:text-lg text-center">Zwei Tage, unbegrenzte Emotion: Genieße die volle Ladung Fahrspaß von Freitag bis Sonntag. Ideal für Kurztrips, besondere Dates oder einfach nur, um dem Alltag zu entfliehen – mit Stil und Power.</p>
                        <Button size={"lg"} variant={"main"} className="mt-5 py-2 !px-8 h-14 " asChild>
                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                <span className=" text-lg font-semibold">Sportwagen mieten</span>
                            </a>
                        </Button>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://i.ibb.co/d42JWdjc/moments1.jpg')] bg-cover bg-center"></div>
                </div>

                <div className="rounded-lg shadow-md border p-8 lg:p-14 relative overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                    <div className="flex flex-col justify-center items-center relative z-20">
                        <div className=" w-14 h-14 rounded-md flex justify-center items-center border-2 border-main">
                            <HeartIcon className="w-7 h-7 text-main" />
                        </div>
                        <h2 className="mt-5 text-main text-2xl lg:text-3xl">Hochzeitsmiete</h2>
                        <p className="mt-5 text-neutral-100 lg:text-lg text-center">Der Moment, in dem sich alles ändert, beginnt mit deinem perfekten Auftritt. Unsere Fahrzeuge machen aus deiner Hochzeit mehr als ein Fest – sie machen sie zu einer unvergesslichen Fahrt ins Glück.</p>
                        <Button size={"lg"} variant={"main"} className="mt-5 py-2 !px-8 h-14 " asChild>
                            <Link to="/hochzeitsmiete" className="gap-x-1">

                                <span className=" text-lg font-semibold">Hochzeitsmiete</span>
                            </Link>
                        </Button>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url('https://i.ibb.co/MDstTCFs/moments2.jpg')] bg-cover bg-center"></div>
                </div>
            </div>
            <div className="mt-6 flex flex-col lg:grid grid-cols-12 gap-x-12 gap-y-10 lg:gap-y-0">
                <div className="col-span-12 lg:col-span-5 w-full h-[600px] bg-[url('https://i.ibb.co/j9YF9qCp/discount.jpg')] bg-cover bg-center rounded-lg border shadow-md" data-aos="fade-right"></div>
                <div className="col-span-12 lg:col-span-7 flex flex-col justify-center lg:items-center h-full gap-10" data-aos="fade-left">
                    <div className="flex gap-x-3">
                        <div className="min-w-14 size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                            <UserRoundPlusIcon className=" size-7 dark:text-main" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-xl lg:text-2xl">10% Neukundenrabatt</h3>
                            <p className=" text-muted-foreground lg:text-lg lg:max-w-xl">Zum ersten Mal bei uns? Dann bekommst du 10% Rabatt auf deine
                                erste Fahrzeuganmietung als Willkommensgeschenk!</p>
                        </div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className="min-w-14 size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                            <HeartIcon className=" size-7 dark:text-main" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className=" text-xl lg:text-2xl">10% Hochzeitsrabatt</h3>
                            <p className=" text-muted-foreground lg:text-lg lg:max-w-xl">Der große Tag steht an? Wir machen ihn noch schöner: 10% Rabatt auf dein Hochzeitsfahrzeug. Einfach Heiratsnachweis vorlegen und stilvoll durchstarten.</p>
                        </div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className="min-w-14 size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                            <CakeIcon className=" size-7 dark:text-main" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className=" text-xl lg:text-2xl">5% Geburtstagsrabatt</h3>
                            <p className=" text-muted-foreground lg:text-lg lg:max-w-xl">Feier mit uns und erhalte 5% Rabatt auf deine nächste Miete.
                                Wenn du zusätzlich zum ersten Mal bei uns buchst, gibt’s sogar satte 15%!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestMoments;