import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useLayoutEffect } from "react";

const Sportwagenvermietung = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px]">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-main" data-aos="fade-right" data-aos-delay="300">Sportwagenvermietung</h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-neutral-100" data-aos="fade-left" data-aos-delay="300">Sportwagen in Ennigerloh – NRW mieten</h2>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 lg:h-16 px-8 lg:text-lg w-full sm:w-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>


                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg')] bg-cover bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                </div>
                <div className="container mx-auto px-4 py-6">
                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Sportwagen mieten und von einer beeindruckenden auswahl profitieren</h3>
                    <p className="mb-20">Wenn Sie ein unvergessliches Erlebnis beim Sportwagen-Mieten suchen, sollte jedes Detail stimmen – insbesondere die Auswahl des perfekten Fahrzeugs. Bei <span className="text-main font-semibold">X-Sportwagen</span> erwartet Sie eine erstklassige Auswahl handverlesener Modelle. Ob Sie von einem eleganten italienischen Sportwagen träumen oder ein Faible für ikonische JDM-Fahrzeuge haben – bei uns finden Sie genau den Sportwagen, der Ihren Wünschen entspricht.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Bequem und schnell bei unserer sportwagenvermietung einen sportwagen mieten</h3>
                    <p>Ein Luxusauto zu mieten war noch nie so unkompliziert! Auf unserer Website finden Sie ein benutzerfreundliches Buchungstool, mit dem Sie Ihr Wunschfahrzeug schnell und einfach online auswählen können. Dort legen Sie den Mietzeitpunkt und -zeitraum fest, wählen zusätzliche Kilometerpakete, den Abhol- oder Lieferort, weitere Fahrer und vieles mehr.</p>
                    <br />
                    <p>Sollten Sie nicht in der Nähe einer unserer Standorte wohnen, ist das kein Problem. Unsere Sportwagenvermietung ermöglicht es, das Fahrzeug bequem an einen Ort Ihrer Wahl innerhalb Europas liefern zu lassen.</p>
                    <br />
                    <p className="mb-20">Falls Sie beim Buchungstool Unterstützung benötigen, steht Ihnen unser Kundenservice jederzeit zur Verfügung. Unsere Experten beantworten all Ihre Fragen und unterstützen Sie bei Ihrer Buchung.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Unsere sportwagenvermietung ist rund um die uhr für sie da</h3>
                    <p>aben wir Ihr Interesse geweckt und Sie möchten eines unserer Luxusautos mieten? Nutzen Sie unser Online-Buchungstool auf der Website und sichern Sie sich Ihr Traumfahrzeug.</p>
                    <br />
                    <p>alls Sie weitere Fragen zu unserer Sportwagenvermietung haben oder aus einem anderen Grund mit uns in Kontakt treten möchten, können Sie uns telefonisch, per E-Mail oder über unser Kontaktformular erreichen. Werfen Sie auch einen Blick in unseren FAQ-Bereich – dort finden Sie Antworten auf die häufigsten Fragen rund um unsere Sportwagenvermietung.</p>
                    <br />
                    <p className="mb-12">Wir freuen uns darauf, Ihnen bei <span className="text-main font-semibold">X-Sportwagen</span> ein einzigartiges Fahrerlebnis zu ermöglichen!</p>


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

export default Sportwagenvermietung;