import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useLayoutEffect } from "react";

const SportRentEnnigerloh = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px]">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-main" data-aos="fade-right" data-aos-delay="300">Sportwagen mieten Ennigerloh</h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-neutral-100" data-aos="fade-left" data-aos-delay="300">Exklusive Sportwagen mieten</h2>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 lg:h-16 px-8 lg:text-lg w-full sm:w-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>


                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://i.ibb.co/Lh9hyxp4/pexels-mikebirdy-2365572.jpg')] bg-cover bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                </div>
                <div className="container mx-auto px-4 py-6">
                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Sportwagen mieten und von einer beeindruckenden auswahl profitieren</h3>
                    <p className="mb-20">Wenn Sie ein unvergessliches Erlebnis beim Sportwagen-Mieten suchen, sollte jedes Detail stimmen – insbesondere die Auswahl des perfekten Fahrzeugs. Bei <span className="text-main font-semibold">X-Sportwagen</span> erwartet Sie eine erstklassige Auswahl handverlesener Modelle. Ob Sie von einem eleganten italienischen Sportwagen träumen oder ein Faible für ikonische JDM-Fahrzeuge haben – bei uns finden Sie genau den Sportwagen, der Ihren Wünschen entspricht.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Sportwagen mieten in Ennigerloh: schnell und unkompliziert</h3>
                    <p>Träumen Sie davon, mit einem Sportwagen durch Ennigerloh und die umliegenden Straßen zu cruisen? Dann ist es jetzt an der Zeit, sich diesen Wunsch zu erfüllen! Mit unserem benutzerfreundlichen Buchungssystem können Sie Ihr Traumauto in wenigen Schritten online reservieren. Wählen Sie den gewünschten Zeitraum, fügen Sie optionale Kilometerpakete hinzu und senden Sie Ihre Anfrage ab – die Bestätigung erhalten Sie schnell und unkompliziert.</p>
                    <br />
                    <p className="mb-20">Unser Service beschränkt sich nicht nur auf Ennigerloh: Auf Wunsch liefern wir Ihr gebuchtes Fahrzeug auch an jeden beliebigen Ort in Europa, damit Ihr Fahrerlebnis so flexibel wie möglich bleibt.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Flexible sportwagenvermietung in Ennigerloh</h3>
                    <p className="mb-20">Profitieren Sie von fairen Konditionen, wenn Sie bei uns einen Sportwagen mieten. Egal, ob Sie das Fahrzeug für einen Tag, ein Wochenende oder eine ganze Woche benötigen – unsere transparenten Preise und inkludierten Kilometer sorgen dafür, dass Sie das Maximum aus Ihrer Mietzeit herausholen können. Zudem ist jedes Fahrzeug mit einer Vollkaskoversicherung ausgestattet, sodass Sie sich voll und ganz auf den Fahrspaß konzentrieren können.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Ihre chance auf ein exklusives sportwagenerlebnis in Ennigerloh</h3>
                    <p>Lassen Sie sich von der Präzision und der Leistung dieser Luxusautos begeistern und machen Sie Ihre Fahrt zu einem unvergesslichen Erlebnis.</p> <br />
                    <p>Durchstöbern Sie jetzt unser Angebot und finden Sie Ihren persönlichen Favoriten. Unser Team bei <span className="text-main font-semibold">X-Sportwagen</span> steht Ihnen jederzeit zur Verfügung, um Ihnen bei der Buchung und allen Fragen rund um unsere Fahrzeuge zu helfen.</p><br />
                    <p className="mb-12">Wir freuen uns darauf, Ihnen den Traum vom Sportwagenfahren zu erfüllen!</p>


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

export default SportRentEnnigerloh;