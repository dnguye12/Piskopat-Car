import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Skeleton } from "@/components/ui/skeleton"
import { ActivityIcon, SettingsIcon, UsersRoundIcon, ZapIcon } from "lucide-react";
const TestCars = () => {
    return (
        <section className="container mx-auto px-6 mt-6" data-aos="fade-up">
            <div className="grid grid-cols-2 gap-6">
                <div className="aspect-[2/1] bg-[url('https://images.pexels.com/photos/3541743/pexels-photo-3541743.jpeg?w=960')] bg-cover bg-center border shadow rounded-lg"></div>
                <div className="flex flex-col p-8 justify-center items-start bg-accent border rounded-lg">
                    <h5 className="text-3xl md:text-4xl text-neutral-100 z-20 mb-4">Unsere Fahrzeuge</h5>
                    <h3 className="text-main text-3xl md:text-4xl z-20 font-orbi">Bereit für dich</h3>
                    <p className="text-lg text-muted-foreground my-4">Unsere Fahrzeuge – perfekt gepflegt, modern ausgestattet und jederzeit bereit, dich bei deinem besonderen Anlass, deinem Wochenendtrip oder deinem Event zu begleiten.</p>
                    <Button variant={"main"} size="lg" className="font-semibold h-12 border w-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                </div>
            </div>



            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className=" rounded-lg overflow-hidden p-2 bg-main">
                    <div className={`w-full aspect-video bg-[url('https://i.ibb.co/LhpZ7HhB/A7402864.png')] bg-cover bg-bottom rounded-lg shadow border`}></div>

                    <div className="flex flex-col items-start">
                        <div className="px-4 pt-6 w-full flex justify-between items-start flex-col-reverse sm:flex-row gap-y-2">
                            <div>
                                <p className=" text-2xl text-neutral-900 font-medium">Golf 8 R Black Edition</p>
                                <p className="text-xl text-neutral-900">Volkswagen</p>
                            </div>
                        </div>
                        <div className="px-4 py-4 w-full">
                            <div className="bg-neutral-900/10 text-neutral-900 w-full px-2 py-4 rounded-lg flex justify-around items-center">
                                <div className="flex flex-col items-center gap-y-1">
                                    <ActivityIcon className="min-w-5 size-5"/>
                                    <p className="font-sans">333 PS</p>
                                </div>
                                <div className="flex flex-col items-center gap-y-1">
                                    <SettingsIcon className="min-w-5 size-5"/>
                                    <p className="font-sans">Auto</p>
                                </div>
                                <div className="flex flex-col items-center gap-y-1">
                                    <UsersRoundIcon className="min-w-5 size-5"/>
                                    <p className="font-sans">4 Sitze</p>
                                </div>
                                <div className="flex flex-col items-center gap-y-1">
                                    <ZapIcon className="min-w-5 size-5"/>
                                    <p className="font-sans">420 NM</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-4 px-4 pb-2 pt-0 w-full">
                            <Button size={"lg"} variant={"main-outline"} className="h-12 border border-neutral-900 text-neutral-100 bg-neutral-900! hover:text-neutral-100 hover:bg-neutral-800!" asChild>
                                <Link to="/fahrzeuge/vw_golf_8">Zum Fahrzeug</Link>
                            </Button>
                            <Button size={"lg"} variant={"main-outline"} className="h-12 border border-neutral-900 text-neutral-100 bg-neutral-900! hover:text-neutral-100 hover:bg-neutral-800!" asChild>
                                <a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a>
                            </Button>
                        </div>
                    </div>
                </div>


                <div className="hidden md:block w-full h-full rounded-lg border overflow-hidden relative shadow" data-aos="fade-up" data-aos-delay="100">
                    <p className="absolute top-1/2 left-1/2 -translate-1/2 z-10 text-muted-foreground text-2xl font-medium text-center w-full">Mehr in Kürze...</p>
                    <Skeleton className="w-full h-full shadow" />
                </div>
                <div className="hidden md:block w-full h-full rounded-lg border overflow-hidden relative shadow" data-aos="fade-up" data-aos-delay="100">
                    <p className="absolute top-1/2 left-1/2 -translate-1/2 z-10 text-muted-foreground text-2xl font-medium text-center w-full">Mehr in Kürze...</p>
                    <Skeleton className="w-full h-full shadow" />
                </div>
            </div>
        </section>
    );
}

export default TestCars;