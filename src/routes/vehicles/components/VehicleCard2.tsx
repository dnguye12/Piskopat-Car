import { Separator } from "@/components/ui/separator";
import type { Car } from "../Vehicles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

interface VehicleCardProps {
    index: number;
    car: Car
}

const VehicleCard2 = ({ index, car }: VehicleCardProps) => {
    console.log(index)
    return (
        <div className=" rounded-lg overflow-hidden">
            <div className={`w-full aspect-video bg-[url(${car.image})] bg-cover bg-bottom`}></div>

            <div className="bg-main flex flex-col items-start">
                <div className="px-8 pt-8 pb-4 w-full flex justify-between items-start">
                    <div>
                        <p className=" text-2xl text-neutral-900 font-medium">{car.name}</p>
                        <p className="text-xl text-neutral-900">{car.brand}</p>
                    </div>
                    <Badge variant={"outline"} className=" border border-neutral-900 text-neutral-900 px-3 py-1 h-8 uppercase">{car.status && "Verfügbar"}</Badge>
                </div>
                <Separator className="bg-neutral-900/25 w-[calc(100%-64px)]! mx-auto" />
                <div className="px-8 py-4 flex justify-between items-center text-neutral-900 w-full">
                    <div className="flex flex-col">
                        <p className="font-sans"><span className="font-medium">Leistung:</span> 333 PS</p>
                        <p className="font-sans"><span className="font-medium">Getriebeart:</span> Automatik</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-sans"><span className="font-medium">Antriebsart:</span> Allradantrieb</p>
                        <p className="font-sans"><span className="font-medium">Drehmoment:</span> 420 NM</p>
                    </div>
                </div>
                <Separator className="bg-neutral-900/25 w-[calc(100%-64px)]! mx-auto" />
                <div className="flex gap-x-4 px-8 pb-8 pt-4">
                    <Button size={"lg"} variant={"main-outline"} className="h-12 border border-neutral-900 text-neutral-100 bg-neutral-900! hover:text-neutral-100 hover:bg-neutral-800!" asChild>
                        <Link to="/fahrzeuge/vw_golf_8">Zum Fahrzeug</Link>
                    </Button>
                    <Button size={"lg"} variant={"outline"} className="h-12 border-none text-neutral-900 shadow-none bg-transparent hover:text-neutral-100 hover:bg-neutral-800! cursor-pointer" asChild>
                        <Link to="/kontakt">Kontakt</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default VehicleCard2;