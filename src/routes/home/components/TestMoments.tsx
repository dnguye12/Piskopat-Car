import { Button } from "@/components/ui/button";
import { CalendarCheckIcon, Clock7Icon, HeartIcon } from "lucide-react";
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
        </section>
    );
}

export default TestMoments;