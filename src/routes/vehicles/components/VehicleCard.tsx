import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CarIcon, ChevronRightIcon, FlameIcon, SettingsIcon, ZapIcon } from "lucide-react";
import { Link } from "react-router";
import type { Car } from "../Vehicles";

interface VehicleCardProps {
    index: number;
    car: Car
}

const VehicleCard = ({ index, car }: VehicleCardProps) => {
    return (
        <div className=" rounded-lg overflow-hidden" data-aos="fade-up">
            <div className={`w-full aspect-video bg-[url(${car.image})] bg-cover bg-bottom`}></div>
            {index % 2 === 0
                ?
                (
                    <div className="p-8 bg-main flex flex-col items-start gap-y-4">
                        <Badge variant={"outline"} className=" border border-neutral-900 text-neutral-900 px-3 py-1 h-8 uppercase">{car.status && "Verfügbar"}</Badge>
                        <p className=" text-2xl text-neutral-900">{car.name}</p>
                        <div className="grid grid-cols-1 min-[410px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 2xl:flex 2xl:justify-between w-full gap-4 2xl:gap-0">
                            <div className="inline-flex justify-center items-center text-neutral-100 gap-x-1 bg-neutral-900 px-6 h-12 rounded-md">
                                <FlameIcon strokeWidth={0} fill="#f5f5f5" className="min-w-6" />
                                <span className="font-sans">333 PS</span>
                            </div>
                            <div className="inline-flex justify-center items-center text-neutral-100 gap-x-1 bg-neutral-900 px-6 h-12 rounded-md">
                                <CarIcon strokeWidth={0} fill="#f5f5f5" className="min-w-6" />
                                <span className="font-sans">Automatik</span>
                            </div>
                            <div className="inline-flex justify-center items-center text-neutral-100 gap-x-1 bg-neutral-900 px-6 h-12 rounded-md">
                                <SettingsIcon strokeWidth={0} fill="#f5f5f5" className="min-w-6" />
                                <span className="font-sans">Allradantrieb</span>
                            </div>
                            <div className="inline-flex justify-center items-center text-neutral-100 gap-x-1 bg-neutral-900 px-6 h-12 rounded-md">
                                <ZapIcon strokeWidth={0} fill="#f5f5f5" className="min-w-6" />
                                <span className="font-sans">420 NM</span>
                            </div>
                        </div>
                        <div className="flex w-full justify-end">
                            <Button size={"lg"} className="w-full sm:w-auto border border-neutral-900 text-neutral-900 bg-main hover:bg-neutral-900 hover:text-main h-12 gap-x-1 hover:gap-x-2" asChild>
                                <Link to="/fahrzeuge/vw_golf_8">Zum Fahrzeug <ChevronRightIcon /></Link>
                            </Button>
                        </div>
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