import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import VehicleCard from "./components/VehicleCard";

export type Car = {
    status: boolean;
    name: string;
    brand: string;
    image: string;
    ps: number;
    auto: string;
    wheel: string;
    nm: number;
    link: string;
}

const cars: Car[] = [
    {
        status: true,
        name: "Golf 8 R Black Edition",
        brand: "Volkswagen",
        image: "https://i.ibb.co/LhpZ7HhB/A7402864.png",
        ps: 333,
        auto: "Automatik",
        wheel: "Allradantrieb",
        nm: 420,
        link: "/fahrzeuge/vw_golf_8"
    }
]

const Vehicles = () => {
    useEffect(() => {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => window.scrollTo(0, 0))
  );
}, []);
    
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px]">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-main font-orbi" data-aos="fade-right" data-aos-delay="300">Unsere Fahrzeuge</h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-neutral-100" data-aos="fade-left" data-aos-delay="300">Sportwagen aller Art in Ennigerloh mieten</h2>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 lg:h-16 px-8 lg:text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>


                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://i.ibb.co/ZRwgwcjN/pexels-wijs-wise-136435282-12356888.jpg')] bg-cover bg-center" data-aos="fade-up"></div>
                </div>
                <div className="container mx-auto px-4 my-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {cars.map((car, index) => (
                        <VehicleCard index={index} car={car} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Vehicles;