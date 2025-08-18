import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"

type Review = {
    author: string;
    content: string;
}
const reviews: Review[] = [
    {
        author: "Lena M.",
        content: "Unglaubliches Erlebnis! Der Wagen war top gepflegt und der Service absolut professionell. Jederzeit wieder!"
    },
    {
        author: "Markus S.",
        content: "Von der Buchung bis zur Rückgabe alles reibungslos. Die Fahrt im Sportwagen war ein Traum – so fühlt sich Freiheit an."
    },
    {
        author: "Sophie R.",
        content: "Sehr freundliches Team, schnelle Abwicklung und ein Auto, das pure Emotionen weckt. Absolute Empfehlung!"
    },
    {
        author: "David L.",
        content: "Great experience! The car was stunning, and the whole process was super easy. Highly recommended."
    },
    {
        author: "Jonas P.",
        content: "Man merkt sofort, dass hier echte Leidenschaft für Autos dahintersteckt. Der Sound des Motors – einfach Gänsehaut!"
    },
    {
        author: "Isabelle K.",
        content: "Ein unvergessliches Wochenende mit purem Fahrspaß. Vielen Dank für den hervorragenden Service!"
    },
    {
        author: "Alessandro V.",
        content: "Esperienza fantastica! Auto perfetta, personale gentile e professionale. Tornerò sicuramente."
    },
    {
        author: "Thomas B.",
        content: "Alles top – vom ersten Kontakt bis zur Rückgabe. Wer einen Sportwagen mieten möchte, ist hier genau richtig."
    }
]

const Reviews = () => {
    return (
        <section className="container mx-auto mt-32 lg:mt-44 px-6">
            <div className="rounded-lg p-6 h-72 relative overflow-hidden flex justify-center items-center mb-20 shadow-md">
                <h3 className="text-main text-4xl md:text-5xl lg:text-6xl z-20 text-center">Was unsere Kunden sagen</h3>
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/75 opacity-90 z-10 bg-no-repeat bg-center"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/1ftF9yDq/reviews.jpg')] bg-cover bg-right-top z-0" />
            </div>

            <Carousel className="w-full"
                opts={{ loop: true }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
            >
                <CarouselContent className="-ml-1">
                    {reviews.map((review, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="py-0 shadow-md">
                                    <CardContent className="flex flex-col items-start justify-start p-8 gap-y-5 min-h-56">
                                        <div className="inline-flex items-center gap-x-1">
                                            <StarIcon fill="#fbbf24" strokeWidth={0} />
                                            <StarIcon fill="#fbbf24" strokeWidth={0} />
                                            <StarIcon fill="#fbbf24" strokeWidth={0} />
                                            <StarIcon fill="#fbbf24" strokeWidth={0} />
                                            <StarIcon fill="#fbbf24" strokeWidth={0} />
                                        </div>
                                        <p className=" break-words line-clamp-3">{review.content}</p>
                                        <p className="font-semibold text-lg">{review.author}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}

export default Reviews;