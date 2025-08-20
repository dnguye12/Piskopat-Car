import { Button } from "@/components/ui/button";
import { BadgePercentIcon, CreditCardIcon, StarIcon, UserRoundCheckIcon } from "lucide-react";
import { Link } from "react-router";
/*
<div className="container mx-auto px-4 pb-24 h-full relative hidden lg:flex flex-col justify-end z-20">
                <h5 className="text-6xl text-neutral-100" data-aos="fade-right" data-aos-delay="600">Reiseziel? Egal.</h5>
                <h1 className="text-6xl text-main" data-aos="fade-left" data-aos-delay="600">Hauptsache Sportwagen</h1>
                <p className="mt-7 text-xl text-neutral-100 max-w-3xl whitespace-pre-wrap break-words" data-aos="zoom-in" data-aos-delay="800">Leistung erkennst du nicht nur an Zahlen – sondern am Sound, am Puls, und dem Moment, in dem die Welt um dich herum stillsteht. Genau dieses Gefühl kannst du bei Monroe Sportwagenvermietung erleben: Luxusfahrzeuge, die begeistern. Ein Premium‒Service, der jeden Moment unvergesslich macht in Kastellaun – und weit darüber hinaus.
                </p>
                <div className="mt-7 grid grid-cols-2 max-w-2xl" >
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-right" data-aos-delay="800">
                        <CreditCardIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">Keine Kreditkarte notwendig</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-left" data-aos-delay="800">
                        <UserRoundCheckIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">Vermietung ab 18 Jahren</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-right" data-aos-delay="800">
                        <StarIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">Lieferung & Abholung</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-left" data-aos-delay="800">
                        <BadgePercentIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">10% Neukundenrabatt!</span>
                    </div>
                </div>
                <div className="mt-7 flex gap-x-4 items-center" data-aos="fade-right" data-aos-delay="800">
                    <Button variant={"main"} size="lg" className="font-semibold h-16 px-8 text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Sportwagen mieten</a></Button>
                    <Button variant={"main-outline"} size="lg" className="font-semibold h-16 px-8 text-lg" asChild>
                        <Link to="/fahrzeuge">Fahrzeuge</Link>
                    </Button>
                </div>
            </div>
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/0 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="200"></div>
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/xSgzRTP3/fb7772b40cf1d5ab756c9cd9b626603b.webp')] bg-cover z-0 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="200"></div>

*/
const Hero = () => {
    return (
        <div className="w-full min-h-screen lg:h-screen pt-[88px] relative">
            <div className="container mx-auto px-4 pt-36  h-full relative hidden lg:flex flex-col items-center z-20">
                <h5 className="text-6xl text-neutral-100" data-aos="fade-right" data-aos-delay="600">Reiseziel? Egal.</h5>
                <h1 className="text-6xl text-main" data-aos="fade-left" data-aos-delay="600">Hauptsache Sportwagen</h1>
                <p className="mt-8 text-xl text-neutral-100 max-w-3xl whitespace-pre-wrap break-words text-center" data-aos="zoom-in" data-aos-delay="1000">X-Sportwagen – hier zählt nicht nur die Leistung auf dem Papier, sondern das Gefühl am Steuer. Erlebe pure Faszination in unseren Luxusfahrzeugen – mit Premium-Service, der jeden Moment unvergesslich macht.
                </p>
                <div className="mt-8 grid grid-cols-2 max-w-2xl" >
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-right" data-aos-delay="1400">
                        <CreditCardIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">Keine Kreditkarte notwendig</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-left" data-aos-delay="1400">
                        <UserRoundCheckIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">Vermietung ab 18 Jahren</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-right" data-aos-delay="1400">
                        <StarIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">Lieferung & Abholung</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-left" data-aos-delay="1400">
                        <BadgePercentIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">10% Neukundenrabatt!</span>
                    </div>
                </div>
                <div className="mt-8 flex gap-x-4 items-center" data-aos="fade-up" data-aos-delay="1800">
                    <Button variant={"main"} size="lg" className="font-semibold h-16 px-8 text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Sportwagen mieten</a></Button>
                    <Button variant={"main-outline"} size="lg" className="font-semibold h-16 px-8 text-lg" asChild>
                        <Link to="/fahrzeuge">Fahrzeuge</Link>
                    </Button>
                </div>
            </div>
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="200"></div>
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/JWDkcgjD/pexels-mike-noga-1916934-3541743.jpg')] bg-cover z-0 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="200"></div>


            <div className="container mx-auto px-4 pt-12 pb-24 h-full flex lg:hidden flex-col">
                <h5 className="text-3xl">Reiseziel? Egal.</h5>
                <h1 className="text-3xl text-main">Hauptsache Sportwagen</h1>
                <img src="https://i.ibb.co/k6wn42TC/hero.jpg" className="w-full h-auto rounded-lg border shadow my-6" />
                <p className="max-w-3xl whitespace-pre-wrap break-words">X-Sportwagen – hier zählt nicht nur die Leistung auf dem Papier, sondern das Gefühl am Steuer. Erlebe pure Faszination in unseren Luxusfahrzeugen – mit Premium-Service, der jeden Moment unvergesslich macht.
                </p>
                <div className="mt-3 grid grid-cols-1 mx-auto">
                    <div className="inline-flex gap-x-2 py-3 items-center">
                        <CreditCardIcon className=" text-main" /><span className=" font-semibold ">Keine Kreditkarte notwendig</span>
                    </div>
                    <div className="inline-flex gap-x-2 py-3 items-center">
                        <UserRoundCheckIcon className=" text-main" /><span className=" font-semibold ">Vermietung ab 18 Jahren</span>
                    </div>
                    <div className="inline-flex gap-x-2 py-3 items-center">
                        <StarIcon className=" text-main" /><span className=" font-semibold ">Lieferung & Abholung</span>
                    </div>
                    <div className="inline-flex gap-x-2 py-3 items-center">
                        <BadgePercentIcon className=" text-main" /><span className=" font-semibold ">10% Neukundenrabatt!</span>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-y-6 items-center">
                    <Button variant={"main"} size="lg" className="font-semibold h-16 px-8 text-lg w-full" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Sportwagen mieten</a></Button>
                    <Button variant={"main-outline"} size="lg" className="font-semibold h-16 px-8 text-lg w-full">Fahrzeuge</Button>
                </div>
            </div>
        </div>
    );
}

export default Hero;