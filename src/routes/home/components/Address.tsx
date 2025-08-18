import { Button } from "@/components/ui/button";
import { MapPinIcon } from "lucide-react";

const Address = () => {
    return (
        <section className="container mx-auto mt-32 lg:mt-44 px-6">
            <div className="flex flex-col border lg:grid grid-cols-2 rounded-lg overflow-hidden shadow-md">
                <div className="col-span-1 bg-main p-8 lg:py-14 lg:ps-14  flex flex-col gap-y-7 justify-start items-start">
                    <h2 className="lg:text-[44px] text-4xl text-neutral-900 max-w-96">Machen Sie den ersten Schritt zu Ihrem PS-Moment.</h2>
                    <p className="text-lg text-neutral-900 max-w-96">Exklusive Sportwagen, erstklassiger Service und pure Emotion – stehen für sie bereit.</p>
                    <div className="flex items-center gap-x-4">
                        <div className="w-10 h-10 inline-flex justify-center items-center bg-neutral-900 rounded-md">
                            <MapPinIcon className="text-main "/>
                        </div>
                        <span className="text-neutral-900">Wulfsbergstr 1a, 59320 Ennigerloh</span>
                    </div>
                    <Button asChild size={"lg"} className="bg-neutral-900 hover:bg-neutral-900/80 text-neutral-100">
                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="h-12">Sportwagen mieten</a>
                    </Button>
                </div>
                 <div className=" col-span-1 bg-[url(/sm2x.png)] bg-cover bg-center w-full aspect-square lg:aspect-auto"></div>
            </div>
           
        </section>
    );
}

export default Address