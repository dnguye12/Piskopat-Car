import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useLayoutEffect } from "react";

const SportRentNRW = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px]">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-main" data-aos="fade-right" data-aos-delay="300">Sportwagen mieten NRW</h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-neutral-100" data-aos="fade-left" data-aos-delay="300">Einmalige Erlebnisse mit Sportwagen in NRW</h2>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 lg:h-16 px-8 lg:text-lg w-full sm:w-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>


                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://images.pexels.com/photos/2127024/pexels-photo-2127024.jpeg')] bg-cover bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                </div>
                <div className="container mx-auto px-4 py-6">
                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Sportwagen mieten und von einer beeindruckenden auswahl profitieren</h3>
                    <p className="mb-20">Wenn Sie ein unvergessliches Erlebnis beim Sportwagen-Mieten suchen, sollte jedes Detail stimmen – insbesondere die Auswahl des perfekten Fahrzeugs. Bei <span className="text-main font-semibold">X-Sportwagen</span> erwartet Sie eine erstklassige Auswahl handverlesener Modelle. Ob Sie von einem eleganten italienischen Sportwagen träumen oder ein Faible für ikonische JDM-Fahrzeuge haben – bei uns finden Sie genau den Sportwagen, der Ihren Wünschen entspricht.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Gutscheine für ein erstaunliches fahrerlebnis: sportwagen mieten in bielefeld oder NRW</h3>
                    <p>Kennen Sie jemanden aus Ihrer Familie oder Ihrem Freundeskreis, der ein großer Fan von sportlichen Autos ist und schon immer davon geträumt hat, selbst eines zu fahren? Dann haben wir die perfekte Geschenkidee für Sie! Bei uns können Sie einen Sportwagen mieten und diesen in Bielefeld, NRW oder anderen Städten in Form eines Gutscheins verschenken.</p>
                    <br />
                    <p className="mb-20">Der Beschenkte kann das gewählte Fahrzeug für einen oder mehrere Tage in vollen Zügen genießen. Die passenden Gutscheine finden Sie in unserem Gutscheinshop. Natürlich können Sie bei der Buchung auch mehrere Fahrer angeben, sodass Sie sich das Vergnügen, einen Supersportwagen zu fahren, mit anderen teilen können.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Sportwagen mieten in bielefeld zu fairen konditionen</h3>
                    <p className="mb-12">Lassen Sie sich diese Gelegenheit nicht entgehen und mieten Sie noch heute Ihren Traumwagen. In Bielefeld und an all unseren anderen Standorten genießen Sie faire Preise – ob für einen Tag, ein Wochenende oder eine ganze Woche. Ausreichende Inklusivkilometer und eine Vollkaskoversicherung sind im Mietpreis enthalten, sodass Sie Ihr Fahrzeug sorglos und in vollen Zügen genießen können.</p>


                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Button variant={"main"} size="lg" className="w-full sm:w-auto font-semibold h-12 lg:h-16 px-8 lg:text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        <Button variant={"main-outline"} size="lg" className="w-full sm:w-auto font-semibold h-12 lg:h-16 px-8 lg:text-lg" asChild>
                            <Link to="/fahrzeuge">Fahrzeuge</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default SportRentNRW;