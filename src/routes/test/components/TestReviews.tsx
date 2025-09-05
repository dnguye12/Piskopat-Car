import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useMemo, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

type Review = {
    author: string;
    content: string;
}
const reviews: Review[] = [
    {
        author: "Emre Bang",
        content: "Super Service absolut empfehlenswert !!! Alles hat problemlos geklappt, total unkompliziert. Der Kontakt war richtig nett und die Autos waren super gepflegt. Selbst als wir spontan umbuchen mussten, war das gar kein Thema. Echt top würde ich jederzeit wieder machen !",
    },
    {
        author: "Mümin Aktas",
        content: "Top Service ehrlich, es ging alles ganz entspannt zu und Antworten kamen auch ganz Schnell. Der Golf 8R ist auch noch in nem Top Zustand bei der Annahme besser geht es nicht. Für den Preis hier in der Umgebung kann man auch nicht nein sagen !"
    },
    {
        author: "Beyza Kalembasi",
        content: "Ich habe am Wochenende einen Golf 8 R gemietet und war begeistert. Das Auto war sauber, und die Kaution wurde sofort zurückerstattet. Pünktlichkeit und Zuverlässigkeit haben bei diesem Unternehmen oberste Priorität. Ich werde definitiv immer wieder hier Fahrzeuge mieten!"
    },
    {
        author: "Kevin Zboinski",
        content: "Hier wird der Kunde wirklich wie ein König behandelt 👑! So einen erstklassigen Service erlebt man selten. Ich habe spontan einen brandneuen Golf 8 R Black Edition gemietet, und alles lief völlig unkompliziert – von der Abholung bis zur Rückgabe. Der Mietpreis und die Kaution wurden bequem in Bar hinterlegt. Dieses Team ist einfach Weltklasse, und ich komme definitiv wieder!"
    },
    {
        author: "Kevin Schwarz",
        content: "Hervorragende Autovermietung mit erstklassigem Service und einer beeindruckenden Auswahl an Luxusfahrzeugen! Die gesamte Organisation war professionell, effizient und individuell auf meine Bedürfnisse abgestimmt. Die Autos waren in makellosem Zustand, und das Fahrvergnügen war unvergleichlich. Das Team war äußerst freundlich, hilfsbereit und jederzeit erreichbar. Wer auf der Suche nach einem luxuriösen Fahrzeug und erstklassigem Service ist, wird hier nicht enttäuscht. Absolut empfehlenswert!"
    },
    {
        author: "Soufian Benali.",
        content: "Ein Erlebnis genau so, wie man es sich wünscht! Wir haben den Golf 8 R Black Edition für ein Wochenende gemietet, und alles lief von der Abholung bis zur Rückgabe absolut reibungslos. Die Kaution wurde umgehend zurückerstattet. Ich werde hier definitiv wieder mieten!"
    },
    {
        author: "Josha Schumacher",
        content: "Top Service, super Preise! Auto war in einwandfreiem Zustand und die Abwicklung schnell & unkompliziert. Gerne wieder!"
    },
    {
        author: "Turtle_Halil 11",
        content: "Ich habe den Golf 8R Black Edition für 24 Stunden gemietet und war absolut zufrieden! Der Kontakt war äußerst freundlich und vor allem seriös. Herr Cimen zeigte sich zeitlich flexibel und ging auf meine Wünsche ein. Sowohl die Übergabe als auch die Rückgabe des Fahrzeugs verliefen transparent und völlig reibungslos. Ich werde hier jederzeit gerne wieder mieten!"
    },
    {
        author: "Isa Taric",
        content: "Erstklassige Autovermietung mit schneller und unkomplizierter Abwicklung. Die Fahrzeuge sind hochwertig, bestens gepflegt und zu einem fairen Preis verfügbar. Der Service ist herausragend - freundlich, hilfsbereit und bei Fragen stets erreichbar. Die Rückerstattung der Kaution verlief problemlos und umgehend. Während es in der Branche viele unseriöse Anbieter gibt, ist man hier in den besten Händen. Absolut vertrauenswürdig!"
    },
    {
        author: "Leshan V.",
        content: "Absolutely recommended! The entire process at X Sportwagen was professional and smooth from start to finish. The selection of sports cars is impressive and the team took the time to answer all my questions and recommend the perfect vehicle. The vehicles are in top condition and you can immediately tell that real professionals are at work here who value quality. From the consultation to the handover, everything went perfectly. I'm already looking forward to the next time and can only recommend xsportwagen.de to everyone. Thank you for the great experience!"
    },
    {
        author: "Hans Schlicht",
        content: "Der Fuhrpark ist hervorragend. Übergabe und Rückgabe verlief zügig, transparent und völlig unkompliziert. Die Kaution wurde direkt und ohne Verzögerung erstattet, rund und professionell und absolut empfehlenswert. Ich komme gerne wieder"
    },
    {
        author: "Munas-Print",
        content: "X Sportwagen ist ein zuverlässiger und flexibler Partner, wenn es um hochwertige Sportwagen geht. Wir hatten die Freude, die Visitenkarten und das Logo für X Sportwagen zu gestalten, und haben sie dabei als professionellen und vertrauensvollen Kunden kennengelernt. Während eines unserer Außendienste konnten wir uns zudem auf ihre Unterstützung verlassen. Vielen Dank für die tolle Zusammenarbeit – wir empfehlen X Sportwagen wärmstens!"
    },
    {
        author: "Sead Kurtanovic",
        content: "Vom ersten Moment an wurde ich herzlich empfangen, und der Mitarbeiter am Tresen war äußerst hilfsbereit und ging auf alle meine Wünsche ein ein weiterer großer Pluspunkt ist die einfache und transparente Abwicklung des Mietprozesses. Die Buchung war schnell und unkompliziert, und alle Vereinbarungen sowie Bedienung wurden klar kommuniziert und verlässlich eingehalten."
    },
    {
        author: "Apuff Appo",
        content: "Service 5/5 Auto 5/5 Abwicklung 5/5. Spontan ein Auto Mieten kein Problem einfach bei X-Sportwagenvermietung anfragen und Angebot bekommen. Wir hatten den GOLF 8 R Black Edition gemietet echt ein Mega Teil. Hat Mega Spaß gemacht. Und wir kommen auf jeden Fall nochmal wieder."
    },
    {
        author: "Lars",
        content: "Übergabe und Rückgabe verliefen zügig, transparent und völlig unkompliziert. Die Kaution wurde direkt und ohne Verzögerung erstattet. Ich komme gerne wieder!"
    },
    {
        author: "Jsja Babss",
        content: "Super easy und absolut unkompliziert. Mega sympathisch und total entgegenkommend – wir hatten eine Menge zu lachen! Für meine Frau ging damit ein großer Traum in Erfüllung. Hammer Auto, hammer Erlebnis. Jederzeit wieder! 👌"
    },
    {
        author: "Stefan Rust",
        content: "Der Service war TOP, kundenfreundlich und immer erreichbar bei fragen. Würde nochmal Mieten"
    },
    {
        author: "Aurelio Plantera",
        content: "Nachdem eine andere Autovermietung uns im Stich gelassen hat und unglaublich unfreundlich war, haben wir Hilfe bei X-Sportwagen gesucht, innerhalb von einer Stunde hatten wir ein Auto bekommen, mit einem fairen Preis und eine freundliche Beratung. Vielen Dank."
    },
    {
        author: "LORENZ SCHMIDT",
        content: "Der Vermieter ist sehr freundlich. Ich habe das Auto direkt am selben Tag, an dem ich angefragt habe, bekommen. Schöner Wagen, der auch top gepflegt ist 👍"
    },
    {
        author: "IVORY",
        content: "Sehr professioneller Service und Scheller Ablauf ohne Probleme 👍"
    },
    {
        author: "Lisa",
        content: "Die Beratung ist sehr gut, es wird sich um die Bedürfnisse der Kunden gekümmert. Das Mietfahrzeug ist sauber und gepflegt."
    },
    {
        author: "Kevin Kögler",
        content: "Ich habe heute einen Wagen für eine Hochzeit angemietet, war sehr angenehm, dazu eine unkomplizierte Abwicklung. Nur zu empfehlen"
    },
    {
        author: "JxstinSwT",
        content: "Ich hatte das Auto das gesamte Wochenende über, und alles lief von der Übergabe bis zur Rückgabe absolut perfekt!"
    },
    {
        author: "Justin Spang",
        content: "Super Service, sehr freundlicher Vermieter und das Auto top gepflegt 👍 Immer wieder gerne 🔝🔝"
    },
]

function sampleArray<T>(arr: T[], n: number): T[] {
    const a = arr.slice();
    const count = Math.min(n, a.length);
    for (let i = a.length - 1; i > a.length - 1 - count; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(a.length - count);
}

const TestReviews = () => {
    const randomReviews = useMemo(() => sampleArray(reviews, 10), [])

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const progress = (current * 100) / count;

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section id="kundenstimmen" className="relative w-full h-[calc(100vh-88px)]">
            <div className="absolute bg-[url('https://images.pexels.com/photos/3785441/pexels-photo-3785441.jpeg?w=1920')] bg-cover bg-center w-full h-full z-0"></div>


            <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full px-6">
                <div className="grid grid-cols-2 gap-6 w-full">
                    <div></div>
                    <div className="flex flex-col p-8 justify-center items-start shadow-lg bg-accent/66 backdrop-blur-sm border rounded-lg">
                        <h5 className="text-main text-4xl md:text-5xl z-20 font-medium">Erfahrungen unserer Kunden</h5>
                        <h3 className="text-3xl md:text-4xl z-20 font-medium">Echte Stimmen, echte Erlebnisse</h3>
                        <p className="text-lg my-6 pr-8">Erfahrungen unserer Kunden – authentische Stimmen und echte Erlebnisse, die zeigen, wie unvergesslich eine Fahrt mit unseren Sportwagen sein kann.</p>
                        <Button variant={"main"} size="lg" className="font-semibold h-12 border w-auto" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                    </div>
                </div>

                <Carousel className="w-full mx-auto mt-6 pb-6 lg:pb-0"
                    opts={{ loop: true }}
                    plugins={[
                        Autoplay({
                            delay: 10000,
                        }),
                    ]}
                    setApi={setApi}
                >
                    <CarouselContent className="-ml-4 ">
                        {randomReviews.map((review, index) => (
                            <CarouselItem key={index} className="pl-4 lg:basis-1/2 xl:basis-1/3">
                                <div className="">
                                    <Card className="py-0 shadow-lg bg-accent/66 backdrop-blur-sm border">
                                        <CardContent className="flex flex-col items-start justify-start p-8 gap-y-5 gap-x-4 min-h-80">
                                            <div className="inline-flex items-center gap-x-1">
                                                <StarIcon fill="#fbbf24" strokeWidth={0} />
                                                <StarIcon fill="#fbbf24" strokeWidth={0} />
                                                <StarIcon fill="#fbbf24" strokeWidth={0} />
                                                <StarIcon fill="#fbbf24" strokeWidth={0} />
                                                <StarIcon fill="#fbbf24" strokeWidth={0} />
                                            </div>
                                            <p className=" break-words line-clamp-7">{review.content}</p>
                                            <p className="font-semibold text-lg">{review.author}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden lg:inline-flex shadow" />
                    <CarouselNext className="hidden lg:inline-flex shadow" />
                    <CarouselPrevious className="inline-flex lg:hidden top-[calc(100%-0.5rem)] translate-y-0 left-0 shadow" />
                    <CarouselNext className="inline-flex lg:hidden top-[calc(100%-0.5rem)] translate-y-0 left-2 translate-x-full shadow" />
                </Carousel>
                <Progress value={progress} className="block lg:hidden w-48 h-3 ml-auto mt-1 shadow" />
            </div>
        </section>
    );
}

export default TestReviews;