import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useLayoutEffect } from "react";
import { Link } from "react-router";

const Wedding = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px]">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-main" data-aos="fade-right" data-aos-delay="300">Hochzeitsauto mieten</h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-neutral-100" data-aos="fade-left" data-aos-delay="300">Stil und Eleganz in Fahrt</h2>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 lg:h-16 px-8 lg:text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>


                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://i.ibb.co/Vct8JJbn/pexels-mario-mb-photo-graphie-1105633-2318049.jpg')] bg-cover bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                </div>
                <div className="container mx-auto px-4 pt-20">
                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Hochzeitsauto mieten für ihren besonderen tag bei X-Sportwagen</h3>
                    <p className="mb-20">Die eigene Hochzeit ist für viele der schönste Tag im Leben. Verständlich, dass an diesem besonderen Tag alles perfekt sein soll –
                        auch das Fahrzeug. Wenn Sie und Ihr Partner Ihre Hochzeit planen, denken Sie frühzeitig daran, Ihr Hochzeitsauto zu mieten, damit
                        das gewünschte Fahrzeug an Ihrem Termin verfügbar ist. <span className="text-main font-semibold">X-Sportwagen</span> bietet Ihnen an verschiedenen Standorten in ganz
                        Deutschland eine exklusive Auswahl hochwertiger Sportwagen und luxuriöser Limousinen, die sich ideal als Hochzeitsauto eignen.
                        Unsere Buchung ist besonders einfach und komfortabel – in wenigen Minuten können Sie Ihr Wunschfahrzeug online reservieren.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Exklusive hochzeitsautos mieten in ganz nrw</h3>
                    <p>Wenn Sie ein Hochzeitsauto mieten möchten, finden Sie bei <span className="text-main font-semibold">X-Sportwagen</span> eine beeindruckende Auswahl der sportlichsten und luxuriösesten Fahrzeuge. Unser Fuhrpark umfasst nicht nur Supersportwagen, sondern auch elegante und leistungsstarke Limousinen, die perfekt als Brautfahrzeug geeignet sind.</p>
                    <br />
                    <p>Die Wahl liegt ganz bei Ihnen und Ihrem Partner. Bei <span className="text-main font-semibold">X-Sportwagen</span> können Sie all diese Fahrzeuge als Hochzeitsautos mieten und Ihren großen Tag unvergesslich machen.</p>
                    <br />
                    <p className="mb-20">Wir freuen uns darauf, Teil Ihres besonderen Tages zu sein und Ihnen das perfekte Fahrzeug für Ihre Traumhochzeit zur Verfügung zu stellen!</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Hochzeitsauto mieten zu fairen preisen</h3>
                    <p className="mb-20">Wir wissen, dass Sie an Ihrem Hochzeitstag nicht Ihr Budget für ein Auto sprengen möchten. Deshalb bieten wir Ihnen die Möglichkeit, ein Hochzeitsauto zu mieten und dabei von unseren fairen Konditionen zu profitieren. Unsere Tagesmietpreise beinhalten bereits alle Kosten, und ausreichend Freikilometer sind ebenfalls inklusive. Vor Ihrer Fahrt erhalten Sie eine umfassende Einweisung durch unser Team, damit Sie sich mit der Technik Ihres ausgewählten Fahrzeugs sicher und problemlos zurechtfinden.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">So einfach ist es, bei X-Sportwagen ein hochzeitsauto zu mieten</h3>
                    <p>Die Hochzeitsvorbereitungen können stressig sein, daher möchten wir es Ihnen so einfach wie möglich machen, Ihr Hochzeitsauto zu reservieren. Mit unserem praktischen Online-Buchungstool können Sie Ihr Wunschfahrzeug auswählen, den Termin angeben, an dem Sie es benötigen, und optionale Extras wie zusätzliche Fahrer oder spezielle Pakete direkt hinzubuchen. Nach Abschluss der Buchung erhalten Sie in kürzester Zeit eine verbindliche Reservierungsbestätigung.</p>
                    <br />
                    <p className="mb-20">Und das Beste: Sie müssen das Fahrzeug am Hochzeitstag nicht unbedingt selbst abholen. Auf Wunsch liefern wir es Ihnen an einen Ort Ihrer Wahl.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Luxuriöse hochzeitsautos mieten für einen unvergesslichen tag</h3>
                    <p className="mb-20">Wenn Sie bei <span className="text-main font-semibold">X-Sportwagen</span> ein Hochzeitsauto mieten, genießen Sie zahlreiche Vorteile. Unsere Fahrzeuge sind stets in einwandfreiem Zustand, frisch gewaschen und aufbereitet – perfekt für unvergessliche Hochzeitsbilder. Zudem gehören sie zu den exklusivsten Modellen, die die Automobilwelt zu bieten hat. Unsere Fahrzeuge sind technisch top gepflegt, sodass eine Panne an Ihrem besonderen Tag so gut wie ausgeschlossen ist.</p>

                    <h3 className="text-main text-4xl md:text-2xl lg:text-4xl z-20 my-4">Jetzt hochzeitsauto mieten!</h3>
                    <p>Kontaktieren Sie uns ganz einfach per WhatsApp, um aus unserer breiten Auswahl an exklusiven Hochzeitsautos führender Marken Ihr Traumfahrzeug zu wählen. Selbstverständlich können Sie auch unabhängig von Ihrer Hochzeit bei uns luxuriöse Sportlimousinen oder Supersportwagen mieten oder Gutscheine für ein besonderes Fahrerlebnis in unserem Gutscheinshop erwerben.</p>
                    <br />
                    <p className="mb-12">Wir freuen uns darauf, Ihnen einen unvergesslichen Tag zu ermöglichen!</p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center mb-20">
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

export default Wedding;