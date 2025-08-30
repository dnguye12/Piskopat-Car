import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
const TestCars = () => {
    return (
        <section className="container mx-auto px-6 mt-6">
            <div className="rounded-lg p-6 py-20 relative overflow-hidden flex justify-center items-center shadow-md border" data-aos="fade-up">
                <div className="z-20">
                    <h5 className="text-3xl sm:text-4xl md:text-5xl text-neutral-100 z-20 mb-2 text-center">Aktuell verfügbar</h5>
                    <h3 className="text-main text-3xl sm:text-4xl md:text-5xl z-20 font-orbi text-center">Unsere Fahrzeuge</h3>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-75 dark:opacity-50 z-10 bg-no-repeat"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/n8fR3wtj/pexels-danielspase-951318.jpg')] bg-cover bg-center z-0" />
            </div>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" rounded-lg overflow-hidden" data-aos="fade-up">
                    <div className={`w-full aspect-video bg-[url('https://i.ibb.co/tMzp01TL/A7402864.png')] bg-cover bg-bottom`}></div>

                    <div className="bg-main flex flex-col items-start">
                        <div className="px-8 pt-8 pb-4 w-full flex justify-between items-start flex-col-reverse sm:flex-row gap-y-3">
                            <div>
                                <p className=" text-2xl text-neutral-900 font-medium">Golf 8 R Black Edition</p>
                                <p className="text-xl text-neutral-900">Volkswagen</p>
                            </div>
                            <Badge variant={"outline"} className=" border border-neutral-900 text-neutral-900 px-3 py-1 h-8 uppercase">Verfügbar</Badge>
                        </div>
                        <Separator className="bg-neutral-900/25 w-[calc(100%-64px)]! mx-auto" />
                        <div className="px-8 py-4 flex justify-between items-center text-neutral-900 w-full">
                            <div className="hidden sm:flex flex-col">
                                <p className="font-sans"><span className="font-medium">Leistung:</span> 333 PS</p>
                                <p className="font-sans"><span className="font-medium">Getriebeart:</span> Automatik</p>
                            </div>
                            <div className="hidden sm:flex flex-col">
                                <p className="font-sans"><span className="font-medium">Antriebsart:</span> Allradantrieb</p>
                                <p className="font-sans"><span className="font-medium">Drehmoment:</span> 420 NM</p>
                            </div>
                            <div className="flex sm:hidden flex-col">
                                <p className="font-sans"><span className="font-medium">Leistung:</span> 333 PS</p>
                                <p className="font-sans"><span className="font-medium">Getriebeart:</span> Automatik</p>
                                <p className="font-sans"><span className="font-medium">Antriebsart:</span> Allradantrieb</p>
                                <p className="font-sans"><span className="font-medium">Drehmoment:</span> 420 NM</p>
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


                <div className="hidden md:block w-full h-full rounded-lg border overflow-hidden relative shadow" data-aos="fade-up">
                    <p className="absolute top-1/2 left-1/2 -translate-1/2 z-10 text-muted-foreground text-3xl font-medium text-center">Mehr in Kürze...</p>
                    <Skeleton className="w-full h-full shadow" />
                </div>
            </div>
        </section>
    );
}

export default TestCars;