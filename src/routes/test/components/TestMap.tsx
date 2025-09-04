import "leaflet/dist/leaflet.css";
import Map, { FullscreenControl, Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

const TestMap = () => {
    const latitude = 51.82809534422243;
    const longitude = 8.023160528835392;
    const zoom = 13

    return (
        <section className="container mx-auto my-6 px-6 grid grid-cols-1 lg:grid-cols-3 gap-6" data-aos="fade-up">
            <div className="col-span-1 rounded-lg border shadow overflow-hidden grid grid-cols-2 lg:block">
                <div className="hidden sm:block aspect-auto lg:aspect-video bg-[url('https://i.ibb.co/S4JWQ0B6/ennigerloh-muehle-04-seb.jpg')] w-full bg-cover bg-center"></div>
                <div className="col-span-2 sm:col-span-1 bg-main p-8 flex flex-col">
                    <p className="font-medium text-2xl mb-2 text-neutral-900">Jede Fahrt wird zum Erlebnis.</p>
                    <p className="text-lg text-neutral-900">Dynamik trifft auf Luxus.</p>
                    <div className="flex justify-center sm:justify-start">
                        <Button size={"lg"} className="w-full mt-5 h-12 !px-8 bg-neutral-900 text-neutral-100 hover:bg-neutral-900/80" asChild>
                            <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                                <span className=" text-base">Jetzt buchen</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="relative col-span-1 lg:col-span-2 rounded-lg overflow-hidden shadow border">
                <div className="aspect-video lg:aspect-auto w-full h-full">
                    <Map
                        initialViewState={{
                            longitude,
                            latitude,
                            zoom
                        }}
                        style={{ height: "100%", width: "100%" }}
                        mapStyle="https://api.jawg.io/styles/b530999a-0de5-4cca-8a7a-1e09236f1b84.json?access-token=3vQtpm8Wbm4e844grioKklnTiAfRDIpTDKFuzSutfZqk9dTdB0SwEHtf4cPOWGsB"
                        attributionControl={false}
                    >
                        <Marker latitude={latitude} longitude={longitude} anchor="bottom">
                            <img src="/marker.png" className="w-8" />
                        </Marker>
                        <NavigationControl />
                        <FullscreenControl />
                    </Map>
                </div>
                <Button asChild className="absolute bottom-2 right-2 bg-neutral-100 text-neutral-900 hover:bg-neutral-400">
                    <a href={import.meta.env.VITE_GOOGLE_ADDRESS} target="_blank" className="inline-flex items-center">Auf Google Maps<ArrowUpRightIcon /></a>
                </Button>
            </div>

        </section>
    );
}

export default TestMap;