import { Button } from "@/components/ui/button";
import { BadgePercentIcon, CreditCardIcon, StarIcon, UserRoundCheckIcon } from "lucide-react";
import { Link } from "react-router";

const TestHero = () => {
    return (
        <div className="w-full min-h-screen lg:h-screen pt-[88px] relative">
            <div className="container mx-auto px-4 pt-36  h-full relative hidden lg:flex flex-col items-center z-20">
                <h5 className="text-6xl text-neutral-100" data-aos="fade-right" data-aos-delay="300">Wo Freiheit beginnt</h5>
                <h1 className="text-6xl text-main font-orbi" data-aos="fade-left" data-aos-delay="300">Fährt Ein Sportwagen</h1>
                <p className="mt-8 text-xl text-neutral-100 max-w-4xl whitespace-pre-wrap break-words text-center" data-aos="zoom-in" data-aos-delay="500">X-Sportwagen – Luxus, Leistung, Leidenschaft. Hier zählt nicht das Papier, sondern das Erlebnis. Deine Zeit im Sportwagen – einzigartig gemacht durch unseren Premium-Service.
                </p>
                <div className="mt-8 grid grid-cols-2 max-w-2xl" >
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-right" data-aos-delay="700">
                        <CreditCardIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">Keine Kreditkarte notwendig</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-left" data-aos-delay="700">
                        <UserRoundCheckIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">Vermietung ab 18 Jahren</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-right" data-aos-delay="700">
                        <StarIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">Lieferung & Abholung</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center" data-aos="fade-left" data-aos-delay="700">
                        <BadgePercentIcon className=" text-main" /><span className=" text-lg font-semibold text-neutral-100">10% Neukundenrabatt!</span>
                    </div>
                </div>
                <div className="mt-8 flex gap-x-4 items-center" data-aos="fade-up" data-aos-delay="900">
                    <Button variant={"main"} size="lg" className="h-12 lg:h-16 px-8 lg:text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                    <Button variant={"main-outline"} size="lg" className="h-12 lg:h-16 px-8 lg:text-lg" asChild>
                        <Link to="/fahrzeuge">Fahrzeuge</Link>
                    </Button>
                </div>
            </div>
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="100"></div>
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/JWDkcgjD/pexels-mike-noga-1916934-3541743.jpg')] bg-cover z-0 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="100"></div>


            <div className="container mx-auto px-6 pt-6 pb-0 h-full flex lg:hidden flex-col">
                <h5 className="text-2xl sm:text-3xl">Wo Freiheit beginnt</h5>
                <h1 className="text-2xl sm:text-3xl text-main">Fährt Ein Sportwagen</h1>
                <img src="https://i.ibb.co/JWDkcgjD/pexels-mike-noga-1916934-3541743.jpg" className="w-full h-auto rounded-lg border shadow my-6" />
                <p className="max-w-3xl whitespace-pre-wrap break-words">X-Sportwagen – Luxus, Leistung, Leidenschaft. Hier zählt nicht das Papier, sondern das Erlebnis. Deine Zeit im Sportwagen – einzigartig gemacht durch unseren Premium-Service.
                </p>
                <div className="mt-3 grid sm:grid-cols-2 gap-x-6 mx-auto sm:mx-0">
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
                <div className="my-6 flex flex-col sm:flex-row sm:justify-center gap-6 items-center">
                    <Button variant={"main"} size="lg" className="sm:flex-1 font-semibold h-12 lg:h-16 px-8 lg:text-lg w-full" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                    <Button variant={"main-outline"} size="lg" className="sm:flex-1 font-semibold h-12 lg:h-16 px-8 lg:text-lg w-full">Fahrzeuge</Button>
                </div>
            </div>
        </div>
    );
}

export default TestHero;