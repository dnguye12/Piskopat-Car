import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

const Test2 = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <section className="w-full h-[calc(100vh-88px)] mt-[88px] relative">
                <div className="absolute z-10 top-12 right-32">
                    <p className="text-2xl text-neutral-100 max-w-2xl whitespace-pre-wrap break-words text-start leading-7 lg:leading-10">    X-Sportwagen – hier zählt nicht nur die Leistung auf dem Papier, sondern das Gefühl am Steuer. Erlebe pure Faszination in unseren Luxusfahrzeugen – mit Premium-Service, der jeden Moment unvergesslich macht.</p>
                </div>
                <div className="absolute bottom-52 z-10 left-72">
                    <div className="text-neutral-100 text-7xl font-medium text-end">
                        <h3>Reiseziel? Egal</h3>
                        <h3 className="text-main">Hauptsache Sportwagen</h3>
                    </div>
                </div>
                <div className="top-0 left-0 absolute w-full h-full bg-cover bg-[url('/car2.png')] bg-bottom z-0" ></div>
            </section>
            <Separator className="my-10" />
            <section className="w-full h-[calc(100vh-88px)] relative overflow-hidden">
                <div className="absolute z-20 top-1/2 left-1/2 -translate-1/2 flex flex-col w-full items-center">
                    <h1 className="text-8xl font-bold text-main text-center uppercase [text-shadow:_0_-5px_0_#497d00] dark:[text-shadow:_0_-5px_0_#5ea500]">X-Sportwagen</h1>
                    <p className="my-8 text-neutral-100 max-w-4xl text-center text-2xl leading-7 lg:leading-10 font-medium">
                        X-Sportwagen – hier zählt nicht nur die Leistung auf dem Papier, sondern das Gefühl am Steuer. Erlebe pure Faszination in unseren Luxusfahrzeugen – mit Premium-Service, der jeden Moment unvergesslich macht.
                    </p>
                    <div className=" flex gap-x-4 items-center">
                        <Button variant={"main"} size="lg" className="font-semibold h-16 px-8 text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Sportwagen mieten</a></Button>
                        <Button variant={"main-outline"} size="lg" className="font-semibold h-16 px-8 text-lg !bg-neutral-900 !text-neutral-100" asChild>
                            <Link to="/fahrzeuge">Fahrzeuge</Link>
                        </Button>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900/75 to-neutral-900/50 z-10 bg-no-repeat bg-center "></div>
                <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline>
                    <source src="https://files.catbox.moe/kcquer.mp4" type="video/mp4" />
                </video>
            </section>
            <Separator className="my-10" />
            <section className="w-full h-[calc(100vh-88px)] relative">
                <div className="absolute top-24 left-24 flex flex-col z-10">
                    <h1 className="text-main text-7xl font-medium mb-4">X-Sportwagen</h1>
                    <p className="text-xl text-neutral-100 max-w-2xl whitespace-pre-wrap break-words text-start">X-Sportwagen – hier zählt nicht nur die Leistung auf dem Papier, sondern das Gefühl am Steuer. Erlebe pure Faszination in unseren Luxusfahrzeugen – mit Premium-Service, der jeden Moment unvergesslich macht.</p>
                </div>
                <div className="absolute right-24 bottom-16 flex gap-x-4 items-center z-10">
                    <Button size="lg" className="font-semibold h-16 px-8 text-lg border" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Sportwagen mieten</a></Button>
                    <Button variant={"secondary"} size="lg" className="font-semibold h-16 px-8 text-lg border" asChild>
                        <Link to="/fahrzeuge">Fahrzeuge</Link>
                    </Button>
                </div>
                <div className="top-0 left-0 absolute w-full h-full bg-cover bg-[url('/car3.png')] bg-center z-0" ></div>
            </section>
        </div>
    );
}

export default Test2;