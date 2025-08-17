import { Button } from "@/components/ui/button";
import { BadgePercentIcon, CreditCardIcon, StarIcon, UserRoundCheckIcon } from "lucide-react";

const Hero = () => {
    return (
        <div className="w-full h-screen pt-[88px] relative">
            <div className="container mx-auto px-4 pb-24 h-full relative flex flex-col justify-end z-20">
                <h5 className="text-6xl text-neutral-100">Reiseziel? Egal.</h5>
                <h1 className="text-6xl text-main">Hauptsache Sportwagen</h1>
                <p className="mt-7 text-xl text-neutral-100 max-w-3xl whitespace-pre-wrap break-words">Leistung erkennst du nicht nur an Zahlen – sondern am Sound, am Puls, und dem Moment, in dem die Welt um dich herum stillsteht. Genau dieses Gefühl kannst du bei Monroe Sportwagenvermietung erleben: Luxusfahrzeuge, die begeistern. Ein Premium‒Service, der jeden Moment unvergesslich macht in Kastellaun – und weit darüber hinaus.
                </p>
                <div className="mt-7 grid grid-cols-2 max-w-2xl">
                    <div className="inline-flex gap-x-2 p-3 items-center">
                        <CreditCardIcon className=" text-main"/><span className=" text-lg font-semibold text-neutral-100">Keine Kreditkarte notwendig</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center">
                        <UserRoundCheckIcon className=" text-main"/><span className=" text-lg font-semibold text-neutral-100">Vermietung ab 18 Jahren</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center">
                        <StarIcon className=" text-main"/><span className=" text-lg font-semibold text-neutral-100">Lieferung & Abholung</span>
                    </div>
                    <div className="inline-flex gap-x-2 p-3 items-center">
                        <BadgePercentIcon className=" text-main"/><span className=" text-lg font-semibold text-neutral-100">10% Neukundenrabatt!</span>
                    </div>
                </div>
                <div className="mt-7 flex gap-x-4 items-center">
                    <Button variant={"main"} size="lg" className="font-semibold h-16 px-8 text-lg">Sportwagen mieten</Button>
                    <Button variant={"main-outline"} size="lg" className="font-semibold h-16 px-8 text-lg">Fahrzeuge</Button>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900/90 dark:from-background to-neutral-900/75 z-10 bg-no-repeat bg-center"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/Home/hero.jpg')] bg-cover z-0 bg-no-repeat bg-center"></div>
        </div>
    );
}

export default Hero;