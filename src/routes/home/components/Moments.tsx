import { Button } from "@/components/ui/button";
import { CakeIcon, CalendarCheckIcon, Clock7Icon, FlameIcon, HeartIcon, UserRoundPlusIcon } from "lucide-react";
import { Link } from "react-router";
import { SiWhatsapp } from '@icons-pack/react-simple-icons';

const Moments = () => {
    return (
        <section className="container mx-auto mt-20 px-6">
            <div className="rounded-lg h-72 relative overflow-hidden flex justify-center items-center shadow-md">
                <h3 className="text-main text-6xl z-20">Wähle deinen Moment.</h3>
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/75 opacity-90 z-10 bg-no-repeat bg-center"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url(Home/moments.jpg)] bg-cover bg-center z-0" />
            </div>
            <div className="mt-20 grid grid-cols-2 gap-6">
                <div className="flex flex-col justify-center items-center bg-main rounded-lg shadow-md border p-14">
                    <div className=" w-14 h-14 rounded-md flex justify-center items-center border-2 border-neutral-900">
                        <CalendarCheckIcon className="w-7 h-7 text-neutral-900" />
                    </div>
                    <h2 className="mt-5 text-neutral-900 text-3xl">Langzeitmiete</h2>
                    <p className="mt-5 text-neutral-900 text-lg text-center">Manche Träume dauern länger – genau dafür gibt’s unsere Langzeitmiete. Ob für besondere Projekte, längere Aufenthalte oder einfach, weil du auf Performance nicht verzichten willst: Wir liefern Fahrgefühl auf Zeit.</p>
                    <Button size={"lg"} className="mt-5 py-2 !px-8 h-14 bg-neutral-900 text-neutral-100 hover:bg-neutral-900/80" asChild>
                        <Link to="" className="gap-x-1">
                            <SiWhatsapp className="!size-5" />
                            <span className=" text-lg font-semibold">Jetzt buchen</span>
                        </Link>
                    </Button>
                </div>

                <div className="rounded-lg shadow-md border p-14 relative overflow-hidden">
                    <div className="flex flex-col justify-center items-center relative z-20">
                        <div className=" w-14 h-14 rounded-md flex justify-center items-center border-2 border-main">
                            <Clock7Icon className="w-7 h-7 text-main" />
                        </div>
                        <h2 className="mt-5 text-main text-3xl">Wochenendmiete</h2>
                        <p className="mt-5 text-neutral-100 text-lg text-center">Zwei Tage, unbegrenzte Emotion: Genieße die volle Ladung Fahrspaß von Freitag bis Sonntag. Ideal für Kurztrips, besondere Dates oder einfach nur, um dem Alltag zu entfliehen – mit Stil und Power.</p>
                        <Button size={"lg"} variant={"main"} className="mt-5 py-2 !px-8 h-14 " asChild>
                            <Link to="" className="gap-x-1">
                                <SiWhatsapp className="!size-5" />
                                <span className=" text-lg font-semibold">Jetzt buchen</span>
                            </Link>
                        </Button>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url(/Home/moments1.jpg)] bg-cover bg-center"></div>
                </div>

                <div className="rounded-lg shadow-md border p-14 relative overflow-hidden">
                    <div className="flex flex-col justify-center items-center relative z-20">
                        <div className=" w-14 h-14 rounded-md flex justify-center items-center border-2 border-main">
                            <HeartIcon className="w-7 h-7 text-main" />
                        </div>
                        <h2 className="mt-5 text-neutral-100 text-3xl">Hochzeitsmiete</h2>
                        <p className="mt-5 text-neutral-100 text-lg text-center">Der Moment, in dem sich alles ändert, beginnt mit deinem perfekten Auftritt. Unsere Fahrzeuge machen aus deiner Hochzeit mehr als ein Fest – sie machen sie zu einer unvergesslichen Fahrt ins Glück.</p>
                        <Button size={"lg"} variant={"main"} className="mt-5 py-2 !px-8 h-14 " asChild>
                            <Link to="" className="gap-x-1">
                                <SiWhatsapp className="!size-5" />
                                <span className=" text-lg font-semibold">Jetzt buchen</span>
                            </Link>
                        </Button>
                    </div>
                    <div className="w-full h-full z-10 absolute top-0 left-0 bg-neutral-900/75"></div>
                    <div className="w-full h-full z-0 absolute top-0 left-0 bg-[url(/Home/moments2.jpg)] bg-cover bg-center"></div>
                </div>

                <div className="flex flex-col justify-center items-center bg-sidebar rounded-lg shadow-md border p-14">
                    <div className=" w-14 h-14 rounded-md flex justify-center items-center border-2 border-foreground">
                        <FlameIcon className="w-7 h-7 text-foreground" />
                    </div>
                    <h2 className="mt-5 dark:text-main text-3xl">Langzeitmiete</h2>
                    <p className="mt-5 text-foreground text-lg text-center">Manche Träume dauern länger – genau dafür gibt’s unsere Langzeitmiete. Ob für besondere Projekte, längere Aufenthalte oder einfach, weil du auf Performance nicht verzichten willst: Wir liefern Fahrgefühl auf Zeit.</p>
                    <Button size={"lg"} variant={"main"} className="mt-5 py-2 !px-8 h-14 " asChild>
                        <Link to="" className="gap-x-1">
                            <SiWhatsapp className="!size-5" />
                            <span className=" text-lg font-semibold">Jetzt buchen</span>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="mt-44 grid grid-cols-12 gap-x-12">
                <div className="col-span-5 w-full h-[600px] bg-[url(Home/discount.jpg)] bg-cover bg-center rounded-lg border shadow-md"></div>
                <div className=" col-span-7 flex flex-col justify-center items-center h-full gap-10">
                    <div className="flex gap-x-3">
                        <div className=" size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                            <UserRoundPlusIcon className=" size-7 dark:text-main" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className=" text-2xl">10% Neukundenrabatt</h3>
                            <p className=" text-muted-foreground text-lg max-w-xl">Zum ersten Mal bei uns? Dann bekommst du 10% Rabatt auf deine
                                erste Fahrzeuganmietung als Willkommensgeschenk!</p>
                        </div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className=" size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                            <HeartIcon className=" size-7 dark:text-main" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className=" text-2xl">10% Hochzeitsrabatt</h3>
                            <p className=" text-muted-foreground text-lg max-w-xl">Der große Tag steht an? Wir machen ihn noch schöner: 10% Rabatt auf dein Hochzeitsfahrzeug. Einfach Heiratsnachweis vorlegen und stilvoll durchstarten.</p>
                        </div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className=" size-14 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                            <CakeIcon className=" size-7 dark:text-main" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className=" text-2xl">5% Geburtstagsrabatt</h3>
                            <p className=" text-muted-foreground text-lg max-w-xl">Feier mit uns und erhalte 5% Rabatt auf deine nächste Miete.
                                Wenn du zusätzlich zum ersten Mal bei uns buchst, gibt’s sogar satte 15%!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Moments;