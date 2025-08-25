import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const TestMap = () => {
    const latitude = 51.82809534422243;
    const longitude = 8.023160528835392;
    const zoom = 17.5

    return (
        <section className="container mx-auto mt-6 px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 rounded-lg border shadow overflow-hidden grid grid-cols-2 lg:block" data-aos="fade-right">
                <div className="hidden sm:block aspect-auto lg:aspect-video bg-[url('https://www.muensterland.com/site/assets/files/34133/ennigerloh_muehle_04_seb.jpg')] w-full bg-cover bg-center"></div>
                <div className="col-span-2 sm:col-span-1 bg-accent p-8 flex flex-col">
                    <p className="font-medium text-2xl mb-3 text-main">Machen Sie jede Fahrt zu einem besonderen Moment.</p>
                    <p className="mb-6 text-lg">Dynamik und Luxus verschmelzen zu purem Genuss.</p>
                    <Button size={"lg"} className="mt-5 py-2 !px-8 h-14 bg-neutral-900 text-neutral-100 hover:bg-neutral-900/80" asChild>
                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank" className="gap-x-1">
                            <span className=" text-lg font-semibold">Sportwagen mieten</span>
                        </a>
                    </Button>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-2 rounded-lg overflow-hidden shadow border">
                <div className="aspect-square lg:aspect-auto w-full h-full">
                    <Map
                        initialViewState={{
                            longitude,
                            latitude,
                            zoom
                        }}
                        style={{ height: "100%", width: "100%" }}
                        mapStyle="https://api.jawg.io/styles/b530999a-0de5-4cca-8a7a-1e09236f1b84.json?access-token=3vQtpm8Wbm4e844grioKklnTiAfRDIpTDKFuzSutfZqk9dTdB0SwEHtf4cPOWGsB"
                    >
                        <Marker latitude={latitude} longitude={longitude} anchor="bottom">
                            <img src="/marker.png" className="w-8" />
                        </Marker>
                        <NavigationControl />
                    </Map>
                </div>
            </div>

        </section>
    );
}

export default TestMap;