import { Button } from "@/components/ui/button";
import { CarIcon, ChevronRightIcon, FlameIcon, SettingsIcon, ZapIcon } from "lucide-react";
import { Link } from "react-router";
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge";
const TestCars = () => {
    return (
        <section className="container mx-auto px-6 mt-6">
            <div className="rounded-lg p-6 h-72 relative overflow-hidden flex justify-center items-center shadow-md border" data-aos="fade-up">
                <h3 className="text-main text-4xl md:text-5xl lg:text-6xl z-20 text-center font-medium">Unsere Fahrzeuge</h3>
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-75 dark:opacity-50 z-10 bg-no-repeat"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/n8fR3wtj/pexels-danielspase-951318.jpg')] bg-cover bg-center z-0" />
            </div>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" rounded-lg overflow-hidden shadow" data-aos="fade-up">
                    <div className="w-full aspect-video bg-[url(https://i.ibb.co/tMzp01TL/A7402864.png)] bg-cover bg-bottom"></div>
                    <div className="p-8 bg-main flex flex-col items-start gap-y-4">
                        <Badge variant={"outline"} className=" border border-neutral-900 text-neutral-900 px-3 py-1 h-8 uppercase">Verfügbar</Badge>
                        <p className=" text-2xl text-neutral-900">VW Golf 8 R Black Edition</p>
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
                </div>
                <div className="hidden md:block w-full h-full rounded-lg border overflow-hidden relative shadow" data-aos="fade-up">
                    <p className="absolute top-1/2 left-1/2 -translate-1/2 z-10 text-muted-foreground text-3xl font-medium text-center">Mehr in Kürze...</p>
                    <Skeleton className="w-full h-full shadow" />
                </div>
            </div>
        </section>
    );
}

export default TestCars;