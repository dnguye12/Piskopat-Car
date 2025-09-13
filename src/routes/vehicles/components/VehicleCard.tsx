import type { Car } from "../Vehicles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { ActivityIcon, SettingsIcon, UsersRoundIcon, ZapIcon } from "lucide-react";

interface VehicleCardProps {
    index: number;
    car: Car
}

const VehicleCard = ({ index, car }: VehicleCardProps) => {
    console.log(index)
    return (
        <div className="p-8 relative rounded-lg border overflow-hidden transition-all cursor-pointer group hover:-translate-y-2 hover:scale-[1.01]" >
            <div className="relative flex flex-col z-20">
                <div className="mb-4">
                    <p className=" text-2xl text-neutral-100 font-medium">{car.name}</p>
                    <p className="text-xl text-neutral-100">{car.brand}</p>
                </div>
                <div className="grid grid-cols-2 justify-items-start min-[500px]:flex items-center gap-2 mb-32">
                    <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans border shadow">
                        <ActivityIcon className="min-w-4 size-4" /> {car.ps} PS
                    </div>
                    <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans border shadow">
                        <SettingsIcon className="min-w-4 size-4" /> {car.auto}
                    </div>
                    <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans border shadow">
                        <UsersRoundIcon className="min-w-4 size-4" /> {car.seats}
                    </div>
                    <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans border shadow">
                        <ZapIcon className="min-w-4 size-4" /> {car.nm} NM
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <Button size={"lg"} variant={"main"} className="h-12 font-semibold flex-1 sm:flex-none" asChild>
                        <Link to={car.link}>Zum Fahrzeug</Link>
                    </Button>
                    <Button size={"lg"} variant={"main"} className="h-12 font-semibold flex-1 sm:flex-none" asChild>
                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a>
                    </Button>
                </div>
            </div>
            <div className="absolute bg-neutral-900 bg-cover bg-center top-0 left-0 w-full h-full z-10 opacity-25 group-hover:opacity-0 transition-all"></div>
            <div className="absolute bg-[url('https://i.ibb.co/LhpZ7HhB/A7402864.png')] bg-cover bg-center top-0 left-0 w-full h-full z-0"></div>
        </div>

    );
}

export default VehicleCard;