import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { BadgePercentIcon, BanknoteArrowDownIcon, CarFrontIcon, CreditCardIcon, StarIcon, UserRoundCheckIcon } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Separator } from "@/components/ui/separator";
import TestProcess from "../home/components/TestProcess";
import TestCars from "../home/components/TestCars";
import TestReviews from "../home/components/TestReviews";
import TestMap from "../home/components/TestMap";
import TestFeatures from "./components/TestFeatures";
import TestMoments from "./components/TestMoments";

const Test = () => {
    return ( 
        <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                <section className="hidden lg:block w-full h-[calc(100vh-88px)] relative mt-[88px]">
                    <div className="container mx-auto w-full h-full relative">
                        <div className="absolute top-20 left-12 right-6 flex flex-col z-10"  data-aos="fade-up" data-aos-delay="200">
                            <h1 className="sr-only">X-Sportwagen</h1>
                            <p className="text-lg sm:text-xl text-neutral-100 max-w-2xl whitespace-pre-wrap break-words text-start" data-aos="fade-up" data-aos-delay="200">X-Sportwagen – Luxus, Leistung, Leidenschaft. Hier zählt nicht das Papier, sondern das Erlebnis. Deine Zeit im Sportwagen – einzigartig gemacht durch unseren Premium-Service.</p>
                        </div>
                        <div className="absolute bottom-16 left-0 flex flex-col z-10 w-full">
                            <h1 className="text-2xl lg:text-5xl text-neutral-100 px-6 font-medium my-4" data-aos="fade-up" data-aos-delay="200">Wo Freiheit beginnt <span className="block sm:inline text-main">Fährt Ein Sportwagen</span></h1>
                            <p className="hidden px-6 my-4 text-lg sm:text-xl text-neutral-100 max-w-4xl whitespace-pre-wrap break-words text-start" data-aos="fade-up" data-aos-delay="200">X-Sportwagen – Luxus, Leistung, Leidenschaft. Hier zählt nicht das Papier, sondern das Erlebnis. Deine Zeit im Sportwagen – einzigartig gemacht durch unseren Premium-Service.</p>
                            <div className="flex justify-center xl:justify-between bg-accent/33 backdrop-blur-sm px-6 py-4 rounded-lg border" data-aos="fade-up" data-aos-delay="200">
                                <div className="flex items-center gap-6" data-aos="fade-up" data-aos-delay="400">
                                    <div className="flex items-center gap-x-3">
                                        <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                            <CreditCardIcon className="w-5 h-5 text-main" />
                                        </div>
                                        <div className="flex flex-col text-neutral-100">
                                            <span className="text-sm">Ohne Kreditkarte buchbar</span>
                                        </div>
                                    </div>
                                    <Separator orientation="vertical" />
                                    <div className="flex items-center gap-x-3">
                                        <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                            <UserRoundCheckIcon className="w-5 h-5 text-main" />
                                        </div>
                                        <div className="flex flex-col text-neutral-100">
                                            <span className="text-sm">Mieten ab 18 Jahren möglich</span>
                                        </div>
                                    </div>
                                    <Separator orientation="vertical" />
                                    <div className="flex items-center gap-x-3">
                                        <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                            <StarIcon className="w-5 h-5 text-main" />
                                        </div>
                                        <div className="flex flex-col text-neutral-100">
                                            <span className="text-sm">Zustellung & Abholung inklusive</span>
                                        </div>
                                    </div>
                                    <Separator orientation="vertical" />
                                    <div className="flex items-center gap-x-3">
                                        <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                            <BadgePercentIcon className="w-5 h-5 text-main" />
                                        </div>
                                        <div className="flex flex-col text-neutral-100">
                                            <span className="text-sm">10% Neukundenrabatt</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden xl:flex gap-x-4 items-center" data-aos="fade-up" data-aos-delay="600">
                                    <Button variant={"main"} size="lg" className="font-semibold" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                                    <Button variant={"secondary"} size="lg" className=" dark:border" asChild>
                                        <Link to="/fahrzeuge">Fahrzeuge</Link>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="top-0 left-0 absolute w-full h-full bg-cover bg-[url('https://raw.githubusercontent.com/dnguye12/Piskopat-Car/16de44a739305f81a208e5a44bb711ed056de8d6/public/car3.png')] bg-center z-0" data-aos="fade-up"></div>
                </section>

                <div className="block lg:hidden relative pt-32 pb-12 mt-[88px]">
                    <div className="container mx-auto px-6 relative z-20">
                        <h1 className="text-3xl md:text-5xl font-medium text-neutral-100">Wo Freiheit beginnt</h1>
                        <h2 className="text-3xl md:text-5xl text-main font-medium">Fährt Ein Sportwagen</h2>
                        <p className="text-base text-neutral-100 whitespace-pre-wrap break-words text-start my-6">X-Sportwagen – Luxus, Leistung, Leidenschaft. Hier zählt nicht das Papier, sondern das Erlebnis. Deine Zeit im Sportwagen – einzigartig gemacht durch unseren Premium-Service.</p>
                        <div className="grid grid-cols-2 gap-6 my-6 text-sm">
                            <div className="flex items-center gap-x-3">
                                <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                    <CreditCardIcon className="w-5 h-5 text-main" />
                                </div>
                                <div className="flex flex-col text-neutral-100">
                                    <span>Ohne Kreditkarte buchbar</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                    <UserRoundCheckIcon className="w-5 h-5 text-main" />
                                </div>
                                <div className="flex flex-col text-neutral-100">
                                    <span>Mieten ab 18 Jahren möglich</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                    <StarIcon className="w-5 h-5 text-main" />
                                </div>
                                <div className="flex flex-col text-neutral-100">
                                    <span>Zustellung & Abholung inklusive</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                    <BadgePercentIcon className="w-5 h-5 text-main" />
                                </div>
                                <div className="flex flex-col text-neutral-100">
                                    <span>10% Neukundenrabatt</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-4 items-center justify-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 flex-1" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                            <Button variant={"secondary"} size="lg" className="h-12 dark:border flex-1" asChild>
                                <Link to="/fahrzeuge">Fahrzeuge</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://images.pexels.com/photos/19597723/pexels-photo-19597723.jpeg?w=960')] bg-cover bg-center" data-aos="fade-up"></div>
                </div>

                <section className="w-full lg:h-[calc(100vh-88px)] relative py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto h-full lg:gap-6 relative px-6">
                        <div className="w-full aspect-video mb-6 lg:mb-0 lg:aspect-auto lg:absolute lg:right-6 lg:w-[calc(50%-32px)] lg:h-full bg-[url('https://i.ibb.co/9k1q39fx/pexels-julian-227887677-12055345.jpg')] bg-cover bg-center rounded-lg border shadow" data-aos="fade-left"></div>
                        <div className="col-span-2 flex flex-col items-start justify-center" data-aos="fade-right">
                            <div className="flex lg:w-[calc(50%-12px)] flex-col items-start justify-center">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl text-main font-medium">Die beste Autovermietung</h1>
                                <h2 className="text-3xl sm:text-4xl">in deiner Umgebung</h2>
                                <p className="sm:text-lg text-muted-foreground my-6">Wir sind stolz darauf, uns die beste Autovermietung in Ennigerloh und Umgebung nennen zu dürfen! Mit exklusiven Fahrzeugen und unschlagbaren Preisen bieten wir Fahrerlebnisse auf höchstem Niveau.</p>
                                <div className="flex items-center gap-x-4 w-full lg:w-auto">
                                    <Button variant={"main"} size="lg" className="font-semibold h-12 flex-1 lg:flex-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                                    <Button variant={"secondary"} size="lg" className="h-12 flex-1 lg:flex-auto" asChild>
                                        <Link to="/fahrzeuge">Fahrzeuge</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 relative z-50">
                                <div className="p-6 xl:p-8 rounded-lg border bg-accent/66 backdrop-blur-sm lg:shadow-lg flex flex-col items-center">
                                    <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                                        <CarFrontIcon className="w-7 h-7 text-main" />
                                    </div>
                                    <p className="text-xl md:text-2xl text-main my-4 md:my-6 text-center">Sportwagen</p>
                                    <p className="text-muted-foreground text-center">Leistung und Fahrdynamik stehen an erster Stelle!</p>
                                </div>
                                <div className="p-6 xl:p-8 rounded-lg border bg-accent/66 backdrop-blur-sm lg:shadow-lg flex flex-col items-center">
                                    <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                                        <BanknoteArrowDownIcon className="w-7 h-7 text-main" />
                                    </div>
                                    <p className="text-xl md:text-2xl text-main my-4 md:my-6 text-center">Faire Preise</p>
                                    <p className="text-muted-foreground text-center">Unsere Preise sind so fair wie möglich kalkuliert!</p>
                                </div>
                                <div className="p-6 xl:p-8 rounded-lg border bg-accent/66 backdrop-blur-sm lg:shadow-lg flex flex-col items-center">
                                    <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                                        <SiWhatsapp className="w-7 h-7 text-main" />
                                    </div>
                                    <p className="text-xl md:text-2xl text-main my-4 md:my-6 text-center">Unkompliziert</p>
                                    <p className="text-muted-foreground text-center">Die Buchung erfolgt ganz bequem über WhatsApp!</p>
                                </div>
                            </div>
                            <div className="flex sm:hidden flex-col gap-4 bg-accent p-8 rounded-lg border shadow mt-6 w-full">
                                <div className="flex flex-col items-start gap-3">
                                    <div className="flex items-center gap-x-3">
                                        <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                            <CarFrontIcon className="w-5 h-5 text-main" />
                                        </div>
                                        <p className="text-xl text-main mb-2">Sportwagen</p>
                                    </div>
                                    <p>Leistung und Fahrdynamik stehen an erster Stelle!</p>
                                </div>
                                <Separator />
                                <div className="flex flex-col items-start gap-3">
                                    <div className="flex items-center gap-x-3">
                                        <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                            <BanknoteArrowDownIcon className="w-5 h-5 text-main" />
                                        </div>
                                        <p className="text-xl text-main mb-2">Faire Preise</p>
                                    </div>
                                    <p>Unsere Preise sind so fair wie möglich kalkuliert!</p>
                                </div>
                                <Separator />
                                <div className="flex flex-col items-start gap-3">
                                    <div className="flex items-center gap-x-3">
                                        <div className="min-w-10 h-10 rounded-md flex justify-center items-center border border-main">
                                            <SiWhatsapp className="w-5 h-5 text-main" />
                                        </div>
                                        <p className="text-xl text-main mb-2">Unkompliziert</p>
                                    </div>
                                    <p>Die Buchung erfolgt ganz bequem über WhatsApp!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <TestProcess />
                <TestCars />
                <TestMoments />
                <TestFeatures />
                <TestReviews />
                <TestMap />
            </main>
            <Footer />
        </div>
     );
}
 
export default Test;