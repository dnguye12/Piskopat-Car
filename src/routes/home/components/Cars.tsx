import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CarIcon, FlameIcon, SettingsIcon, ZapIcon } from "lucide-react";
import { Link } from "react-router";
import { Skeleton } from "@/components/ui/skeleton"

const Cars = () => {
    return (
        <section className="container mx-auto mt-32 lg:mt-44 px-6">
            <div className="rounded-lg p-6 h-72 relative overflow-hidden flex justify-center items-center shadow-md" data-aos="fade-up">
                <h3 className="text-main text-4xl md:text-5xl lg:text-6xl z-20 text-center">Unsere Fahrzeuge</h3>
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-75 dark:opacity-50 z-10 bg-no-repeat"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/n8fR3wtj/pexels-danielspase-951318.jpg')] bg-cover bg-center z-0" />
            </div>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" rounded-lg overflow-hidden" data-aos="fade-up">
                    <div className="w-full aspect-video bg-[url(https://i.ibb.co/tF10tNC/A7402864.jpg)] bg-cover bg-bottom"></div>
                    <div className="p-8 bg-main flex flex-col items-start gap-y-5">
                        <Badge variant={"outline"} className=" border border-neutral-900 text-neutral-900 px-3 py-1 h-8 uppercase">Verfügbar</Badge>
                        <p className=" text-2xl text-neutral-900">VW Golf 8 R Black Edition</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between w-full gap-x-4 gap-y-2 md:gap-x-8">
                            <div className="inline-flex items-center text-neutral-900 gap-x-1">
                                <FlameIcon strokeWidth={0} fill="#171717" />
                                <span className="text-lg font-sans">333 PS</span>
                            </div>
                            <div className="inline-flex items-center text-neutral-900 gap-x-1">
                                <CarIcon strokeWidth={0} fill="#171717" />
                                <span className="text-lg font-sans">Automatik</span>
                            </div>
                            <div className="inline-flex items-center text-neutral-900 gap-x-1">
                                <SettingsIcon strokeWidth={0} fill="#171717" />
                                <span className="text-lg font-sans">Allradantrieb</span>
                            </div>
                            <div className="inline-flex items-center text-neutral-900 gap-x-1">
                                <ZapIcon strokeWidth={0} fill="#171717" />
                                <span className="text-lg font-sans">420 NM</span>
                            </div>
                        </div>
                        <Button size={"lg"} className="w-full sm:w-auto bg-neutral-900 hover:!bg-neutral-900/80 text-neutral-100 h-12" asChild>
                            <Link to="/fahrzeuge/vw_golf_8">Zum Fahrzeug</Link>
                        </Button>
                    </div>
                </div>
                <div className="hidden lg:block w-full h-full rounded-lg border overflow-hidden relative" data-aos="fade-up">
                    <p className="absolute top-1/2 left-1/2 -translate-1/2 z-10 text-muted-foreground text-3xl font-medium">Mehr in Kürze...</p>
                    <Skeleton className="w-full h-full shadow" />
                </div>
            </div>
        </section>
    );
}

export default Cars;