import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CarIcon, FlameIcon, SettingsIcon, ZapIcon } from "lucide-react";
import { Link } from "react-router";
import type { Car } from "../Vehicles";

interface VehicleCardProps {
    index: number;
    car: Car
}

const VehicleCard = ({ index, car }: VehicleCardProps) => {
    return (
        <div className=" rounded-lg overflow-hidden">
            <div className={`w-full aspect-video bg-[url(${car.image})] bg-cover bg-bottom`}></div>
            {index % 2 === 0
                ?
                (
                    <div className="p-8 bg-main flex flex-col items-start gap-y-5">
                        <Badge variant={"outline"} className=" border border-neutral-900 text-neutral-900 px-3 py-1 h-8 uppercase">{car.status && "Verfügbar"}</Badge>
                        <p className=" text-2xl text-neutral-900">{car.name}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between w-full gap-x-4 gap-y-2 md:gap-x-8">
                            <div className="inline-flex items-center text-neutral-900 gap-x-1">
                                <FlameIcon strokeWidth={0} fill="#171717" />
                                <span className="text-lg font-sans">{car.ps} PS</span>
                            </div>
                            <div className="inline-flex items-center text-neutral-900 gap-x-1">
                                <CarIcon strokeWidth={0} fill="#171717" />
                                <span className="text-lg font-sans">{car.auto}</span>
                            </div>
                            <div className="inline-flex items-center text-neutral-900 gap-x-1">
                                <SettingsIcon strokeWidth={0} fill="#171717" />
                                <span className="text-lg font-sans">{car.wheel}</span>
                            </div>
                            <div className="inline-flex items-center text-neutral-900 gap-x-1">
                                <ZapIcon strokeWidth={0} fill="#171717" />
                                <span className="text-lg font-sans">{car.nm} NM</span>
                            </div>
                        </div>
                        <Button size={"lg"} className="w-full sm:w-auto bg-neutral-900 hover:!bg-neutral-900/80 text-neutral-100 h-12" asChild>
                            <Link to={car.link}>Zum Fahrzeug</Link>
                        </Button>
                    </div>
                )
                :
                (
                    <div className="p-8 bg-sidebar border flex flex-col items-start gap-y-5">
                        <Badge variant={"outline"} className=" border px-3 py-1 h-8 uppercase">{car.status && "Verfügbar"}</Badge>
                        <p className=" text-2xl">{car.name}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between w-full gap-x-4 gap-y-2 md:gap-x-8">
                            <div className="inline-flex items-center gap-x-1">
                                <FlameIcon />
                                <span className="text-lg font-sans">{car.ps} PS</span>
                            </div>
                            <div className="inline-flex items-center  gap-x-1">
                                <CarIcon />
                                <span className="text-lg font-sans">{car.auto}</span>
                            </div>
                            <div className="inline-flex items-center  gap-x-1">
                                <SettingsIcon />
                                <span className="text-lg font-sans">{car.wheel}</span>
                            </div>
                            <div className="inline-flex items-center  gap-x-1">
                                <ZapIcon />
                                <span className="text-lg font-sans">{car.nm} NM</span>
                            </div>
                        </div>
                        <Button size={"lg"} variant={"main-outline"} className="w-full sm:w-auto  h-12" asChild>
                            <Link to={car.link}>Zum Fahrzeug</Link>
                        </Button>
                    </div>
                )
            }

        </div>
    );
}

export default VehicleCard;