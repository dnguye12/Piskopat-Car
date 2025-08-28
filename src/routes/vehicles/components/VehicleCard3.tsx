import { Link } from "react-router";
import type { Car } from "../Vehicles";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface VehicleCardProps {
    index: number;
    car: Car
}
const VehicleCard3 = ({ index, car }: VehicleCardProps) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link to={car.link} className="shadow rounded-lg overflow-hidden relative border aspect-video group hover:scale-[1.01] hover:-translate-y-2 cursor-pointer transition-all">
                    <div className="relative p-8 z-20 h-full">
                        <div className="flex flex-col justify-between h-full">
                            <div className="">
                                <p className=" text-2xl text-neutral-100 font-medium">{car.name}</p>
                                <p className="text-xl text-neutral-100">{car.brand}</p>
                            </div>
                            <div className="flex justify-between items-center text-neutral-100">
                                <div className="flex flex-col items-center">
                                    <p className="">Leistung</p>
                                    <p className="font-sans text-lg font-medium">333 PS</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="">Getriebeart</p>
                                    <p className="font-sans text-lg font-medium">Automatik</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="">Antriebsart</p>
                                    <p className="font-sans text-lg font-medium">Allradantrieb</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="">Drehmoment</p>
                                    <p className="font-sans text-lg font-medium">420 NM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-900/50 group-hover:bg-main/25 transition-all w-full h-full top-0 left-0 absolute z-10"></div>
                    <div className={`absolute z-0 w-full h-full top-0 left-0 bg-cover bg-center bg-[url('${car.image}')]`}></div>
                </Link>
            </TooltipTrigger>
            <TooltipContent>
                <p>Zum Fahrzeug</p>
            </TooltipContent>
        </Tooltip>
    );
}

export default VehicleCard3;