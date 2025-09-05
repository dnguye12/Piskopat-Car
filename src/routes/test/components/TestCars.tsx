import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Skeleton } from "@/components/ui/skeleton"
import { ActivityIcon, SettingsIcon, UsersRoundIcon, ZapIcon } from "lucide-react";
const TestCars = () => {
    return (
        <section className="py-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col justify-center items-start ">
                        <h5 className="text-main text-4xl md:text-5xl z-20 font-medium">Unsere Fahrzeuge</h5>
                        <h3 className="text-3xl md:text-4xl z-20 font-medium">Bereit für dich</h3>
                        <p className="text-lg text-muted-foreground my-6 pr-8">Unsere Fahrzeuge – perfekt gepflegt, modern ausgestattet und jederzeit bereit, dich bei deinem besonderen Anlass, deinem Wochenendtrip oder deinem Event zu begleiten.</p>
                        <Button variant={"main"} size="lg" className="font-semibold h-12 border w-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                    </div>
                    <div className="aspect-[2/1] bg-[url('https://images.pexels.com/photos/3541743/pexels-photo-3541743.jpeg?w=960')] bg-cover bg-center border shadow rounded-lg"></div>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-8 relative rounded-lg border overflow-hidden transition-all cursor-pointer group hover:-translate-y-2 hover:scale-[1.01]">
                        <div className="relative flex flex-col z-20">
                            <div className="mb-4">
                                <p className=" text-2xl text-neutral-100 font-medium">Golf 8 R Black Edition</p>
                                <p className="text-xl text-neutral-100">Volkswagen</p>
                            </div>
                            <div className="flex items-center gap-x-2 mb-32">
                                <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans">
                                    <ActivityIcon className="min-w-4 size-4" /> 333 PS
                                </div>
                                <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans">
                                    <SettingsIcon className="min-w-4 size-4" /> Auto
                                </div>
                                <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans">
                                    <UsersRoundIcon className="min-w-4 size-4" /> 4
                                </div>
                                <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans">
                                    <ZapIcon className="min-w-4 size-4" /> 420 NM
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <Button size={"lg"} variant={"main"} className="h-12 font-semibold" asChild>
                                    <Link to="/fahrzeuge/vw_golf_8">Zum Fahrzeug</Link>
                                </Button>
                                <Button size={"lg"} variant={"main"} className="h-12 font-semibold" asChild>
                                    <a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a>
                                </Button>
                            </div>
                        </div>
                        <div className="absolute bg-neutral-900 bg-cover bg-center top-0 left-0 w-full h-full z-10 opacity-50 group-hover:opacity-25 transition-all"></div>
                        <div className="absolute bg-[url('https://i.ibb.co/LhpZ7HhB/A7402864.png')] bg-cover bg-center top-0 left-0 w-full h-full z-0"></div>
                    </div>
                    <div className="hidden md:block w-full h-full rounded-lg border overflow-hidden relative shadow" data-aos="fade-up" data-aos-delay="100">
                        <p className="absolute top-1/2 left-1/2 -translate-1/2 z-10 text-muted-foreground text-2xl font-medium text-center w-full">Mehr in Kürze...</p>
                        <Skeleton className="w-full h-full shadow" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default TestCars;