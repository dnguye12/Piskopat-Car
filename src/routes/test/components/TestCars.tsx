import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Skeleton } from "@/components/ui/skeleton"
import { ActivityIcon, SettingsIcon, UsersRoundIcon, ZapIcon } from "lucide-react";
const TestCars = () => {
    return (
        <section className="py-6">
            <div className="container mx-auto px-6">
                <div className="rounded-lg p-6 py-20 relative overflow-hidden flex justify-center items-center shadow-md border" data-aos="fade-up">
                    <div className="z-20">
                        <h3 className="text-main text-3xl sm:text-4xl md:text-5xl z-20 font-medium text-center mb-2">Unsere Fahrzeuge</h3>
                        <h5 className="text-3xl sm:text-4xl md:text-5xl z-20 text-center">Bereit für dich</h5>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-75 dark:opacity-50 z-10 bg-no-repeat"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/3541743/pexels-photo-3541743.jpeg?w=960')] bg-cover bg-center z-0" />
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-8 relative rounded-lg border overflow-hidden transition-all cursor-pointer group hover:-translate-y-2 hover:scale-[1.01]">
                        <div className="relative flex flex-col z-20">
                            <div className="mb-4">
                                <p className=" text-2xl text-neutral-100 font-medium">Golf 8 R Black Edition</p>
                                <p className="text-xl text-neutral-100">Volkswagen</p>
                            </div>
                            <div className="grid grid-cols-2 justify-items-start min-[500px]:flex items-center gap-2 mb-32">
                                <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans border shadow">
                                    <ActivityIcon className="min-w-4 size-4" /> 333 PS
                                </div>
                                <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans border shadow">
                                    <SettingsIcon className="min-w-4 size-4" /> Auto
                                </div>
                                <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans border shadow">
                                    <UsersRoundIcon className="min-w-4 size-4" /> 4
                                </div>
                                <div className="flex items-center px-3 py-1 bg-accent/66 backdrop-blur-sm rounded-full gap-x-1 text-base font-sans border shadow">
                                    <ZapIcon className="min-w-4 size-4" /> 420 NM
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <Button size={"lg"} variant={"main"} className="h-12 font-semibold flex-1 sm:flex-none" asChild>
                                    <Link to="/fahrzeuge/vw_golf_8">Zum Fahrzeug</Link>
                                </Button>
                                <Button size={"lg"} variant={"main"} className="h-12 font-semibold flex-1 sm:flex-none" asChild>
                                    <a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a>
                                </Button>
                            </div>
                        </div>
                        <div className="absolute bg-neutral-900 bg-cover bg-center top-0 left-0 w-full h-full z-10 opacity-25 group-hover:opacity-0 transition-all"></div>
                        <div className="absolute bg-[url('https://i.ibb.co/LhpZ7HhB/A7402864.png')] bg-cover bg-center top-0 left-0 w-full h-full z-0"></div>
                    </div>
                    <div className="hidden lg:block w-full h-full rounded-lg border overflow-hidden relative shadow" data-aos="fade-up" data-aos-delay="100">
                        <p className="absolute top-1/2 left-1/2 -translate-1/2 z-10 text-muted-foreground text-2xl font-medium text-center w-full">Mehr in Kürze...</p>
                        <Skeleton className="w-full h-full shadow" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default TestCars;