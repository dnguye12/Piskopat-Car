import { Separator } from "@/components/ui/separator";
import type { Car } from "../Vehicles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

interface VehicleCardProps {
    index: number;
    car: Car
}

const VehicleCard = ({ index, car }: VehicleCardProps) => {
    console.log(index)
    return (
        <div className=" rounded-lg overflow-hidden" data-aos="fade-up">
            <div className={`w-full aspect-video bg-[url(${car.image})] bg-cover bg-bottom`}></div>

            <div className="bg-main flex flex-col items-start">
                <div className="px-8 pt-8 pb-4 w-full flex justify-between items-start flex-col-reverse sm:flex-row gap-y-3">
                    <div>
                        <p className=" text-2xl text-neutral-900 font-medium">{car.name}</p>
                        <p className="text-xl text-neutral-900">{car.brand}</p>
                    </div>
                    <Badge variant={"outline"} className=" border border-neutral-900 text-neutral-900 px-3 py-1 h-8 uppercase">{car.status && "Verfügbar"}</Badge>
                </div>
                <Separator className="bg-neutral-900/25 w-[calc(100%-64px)]! mx-auto" />
                <div className="px-8 py-4 flex justify-between items-center text-neutral-900 w-full">
                    <div className="hidden sm:flex flex-col">
                        <p className="font-sans"><span className="font-medium">Leistung:</span> {car.ps} PS</p>
                        <p className="font-sans"><span className="font-medium">Getriebeart:</span> {car.auto}</p>
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <p className="font-sans"><span className="font-medium">Antriebsart:</span> {car.wheel}</p>
                        <p className="font-sans"><span className="font-medium">Drehmoment:</span> {car.nm} NM</p>
                    </div>
                    <div className="flex sm:hidden flex-col">
                        <p className="font-sans"><span className="font-medium">Leistung:</span> {car.ps} PS</p>
                        <p className="font-sans"><span className="font-medium">Getriebeart:</span> {car.auto}</p>
                        <p className="font-sans"><span className="font-medium">Antriebsart:</span> {car.wheel}</p>
                        <p className="font-sans"><span className="font-medium">Drehmoment:</span> {car.nm} NM</p>
                    </div>
                </div>
                <Separator className="bg-neutral-900/25 w-[calc(100%-64px)]! mx-auto" />
                <div className="flex flex-col sm:flex-row justify-between gap-4 px-8 pb-8 pt-4 w-full">
                    <Button size={"lg"} variant={"main-outline"} className="h-12 border border-neutral-900 text-neutral-100 bg-neutral-900! hover:text-neutral-100 hover:bg-neutral-800!" asChild>
                        <Link to="/fahrzeuge/vw_golf_8">Zum Fahrzeug</Link>
                    </Button>
                    <Button size={"lg"} variant={"main-outline"} className="h-12 border border-neutral-900 text-neutral-100 bg-neutral-900! hover:text-neutral-100 hover:bg-neutral-800!" asChild>
                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default VehicleCard;