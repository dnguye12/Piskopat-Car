import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import TestMoments from "./components/TestMoments";
import TestFeatures from "./components/TestFeatures";
import TestCars from "./components/TestCars";
import TestProcess from "./components/TestProcess";
import TestReviews from "./components/TestReviews";
import TestMap from "./components/TestMap";
import { BanknoteArrowDownIcon, CarFrontIcon } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const Test2 = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <section className="w-full h-[calc(100vh-88px)] relative mt-[88px]">
                    <div className="container mx-auto w-full h-full relative">
                        <div className="absolute top-20 left-6 flex flex-col z-10">
                            <h1 className="sr-only">X-Sportwagen</h1>
                            <p className="text-xl text-neutral-100 max-w-2xl whitespace-pre-wrap break-words text-start">X-Sportwagen – Luxus, Leistung, Leidenschaft. Hier zählt nicht das Papier, sondern das Erlebnis. Deine Zeit im Sportwagen – einzigartig gemacht durch unseren Premium-Service.</p>
                        </div>
                        <div className="absolute bottom-16 left-0 px-6 flex justify-between items-end z-10 w-full">
                            <h1 className="text-5xl text-neutral-100">Wo Freiheit beginnt <span className="text-main font-medium">Fährt Ein Sportwagen</span></h1>
                            <div className="flex gap-x-4 items-center">
                                <Button variant={"main"} size="lg" className="font-semibold h-12" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                                <Button variant={"secondary"} size="lg" className="h-12" asChild>
                                    <Link to="/fahrzeuge">Fahrzeuge</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="top-0 left-0 absolute w-full h-full bg-cover bg-[url('https://raw.githubusercontent.com/dnguye12/Piskopat-Car/16de44a739305f81a208e5a44bb711ed056de8d6/public/car3.png')] bg-center z-0" ></div>
                </section>


                <section className="w-full h-[calc(100vh-88px)] relative bg-sidebar px-6 py-6">
                    <div className="grid grid-cols-2 container mx-auto px-6 h-full gap-6 relative">
                        <div className="col-span-2 flex flex-col items-start justify-center">
                            <div className="flex w-[calc(50%-12px)] flex-col items-start justify-center">
                                <h1 className="text-4xl md:text-5xl text-main font-medium">Die beste Autovermietung</h1>
                                <h2 className="text-4xl md:text-5xl font-medium">in deiner Umgebung</h2>
                                <p className="text-lg text-muted-foreground my-6">Wir sind stolz darauf, uns die beste Autovermietung in Ennigerloh und Umgebung nennen zu dürfen! Mit exklusiven Fahrzeugen und unschlagbaren Preisen bieten wir Fahrerlebnisse auf höchstem Niveau.</p>
                                <div className="flex items-center gap-x-4">
                                    <Button variant={"main"} size="lg" className="font-semibold h-12 w-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                                    <Button variant={"secondary"} size="lg" className="h-12" asChild>
                                        <Link to="/fahrzeuge">Fahrzeuge</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-5 gap-6 mt-6 relative z-50">
                                <div className="p-8 rounded-lg border bg-accent/66 backdrop-blur-sm shadow-lg flex flex-col items-center">
                                    <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                                        <CarFrontIcon className="w-7 h-7 text-main" />
                                    </div>
                                    <p className="text-2xl text-main my-6">Sportwagen</p>
                                    <p className="text-muted-foreground">Leistung und Fahrdynamik</p>
                                    <p className="text-muted-foreground">stehen an erster Stelle!</p>
                                </div>
                                <div className="p-8 rounded-lg border bg-accent/66 backdrop-blur-sm shadow-lg flex flex-col items-center">
                                    <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                                        <BanknoteArrowDownIcon className="w-7 h-7 text-main" />
                                    </div>
                                    <p className="text-2xl text-main my-6">Faire Preise</p>
                                    <p className="text-muted-foreground">Unsere Preise sind so fair</p>
                                    <p className="text-muted-foreground">wie möglich kalkuliert!</p>
                                </div>
                                <div className="p-8 rounded-lg border bg-accent/66 backdrop-blur-sm shadow-lg flex flex-col items-center">
                                    <div className=" w-14 h-14 rounded-md flex justify-center items-center border border-main">
                                        <SiWhatsapp className="w-7 h-7 text-main" />
                                    </div>
                                    <p className="text-2xl text-main my-6">Unkompliziert</p>
                                    <p className="text-muted-foreground">Die Buchung erfolgt ganz</p>
                                    <p className="text-muted-foreground">bequem über WhatsApp!</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-6 bg-[url('https://i.ibb.co/9k1q39fx/pexels-julian-227887677-12055345.jpg')] bg-cover bg-center w-[calc(50%-32px)] h-full rounded-lg border shadow"></div>
                    </div>
                </section>
                <TestMoments />
                <TestFeatures />
                <TestProcess />
                <TestCars />
                <TestReviews />
                <TestMap />
            </main>
            <Footer />
        </div>
    );
}

export default Test2;