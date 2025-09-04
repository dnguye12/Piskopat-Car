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
                            <h1 className="text-5xl">Wo Freiheit beginnt <span className="text-main font-orbi">Fährt Ein Sportwagen</span></h1>
                            <div className="flex gap-x-4 items-center">
                                <Button variant={"main"} size="lg" className="font-semibold h-12 border" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                                <Button variant={"secondary"} size="lg" className="h-12 border" asChild>
                                    <Link to="/fahrzeuge">Fahrzeuge</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="top-0 left-0 absolute w-full h-full bg-cover bg-[url('https://raw.githubusercontent.com/dnguye12/Piskopat-Car/16de44a739305f81a208e5a44bb711ed056de8d6/public/car3.png')] bg-center z-0" ></div>
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