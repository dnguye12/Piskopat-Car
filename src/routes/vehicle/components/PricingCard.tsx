import { Button } from "@/components/ui/button";
import { CheckCircleIcon, HandCoinsIcon, RulerIcon } from "lucide-react";

interface PricingCardProps {
    title: string;
    date: string;
    price: number;
    per: string;
    km: number;
    highlight?: boolean
}

const PricingCard = ({ title, date, price, per, km, highlight = false }: PricingCardProps) => {
    return (
        <div className="h-full rounded-lg shadow md:rounded-none md:shadow-none border bg-background dark:bg-accent relative overflow-hidden">
            {
                highlight && (
                    <div className="absolute z-10 h-36 right-0 top-0 w-36 rotate-90 pointer-events-none">
                        <div className="bg-red-500 text-neutral-100 text-sm font-medium py-1 mt-9 ml-9 text-center uppercase -translate-1/2 -rotate-45 w-[200%]">BELIEBT</div>
                    </div>
                )
            }
            <div className="p-8 border-b">
                <h3 className="text-2xl font-medium text-start mb-2">{title}</h3>
                <p className="text-balance text-start text-muted-foreground mb-6">{date}</p>
                <h2 className="flex items-start justify-center text-main">
                    <span className="mt-2 text-lg font-medium">€</span>
                    <span className="text-6xl font-medium font-sans">{price}</span>
                </h2>
                <p className="mt-1 text-sm text-muted-foreground mb-6">{per}</p>
                <Button size={"lg"} variant={"main"} className="h-12 cursor-pointer font-semibold shadow w-full" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
            </div>
            <div className="flex flex-col gap-y-3 p-8">
                {
                    title === "Wochenpaket 7 Tage"
                        ?
                        (
                            <p className="inline-flex items-center gap-3"><CheckCircleIcon className="w-5 size-5 text-main" />Ganze Woche für Dich</p>
                        )
                        :
                        (
                            <p className="inline-flex items-center gap-3"><CheckCircleIcon className="w-5 size-5 text-main" />Wochentagsersparnis</p>
                        )
                }
                <p className="inline-flex items-center gap-3"><RulerIcon className="w-5 size-5 text-main" /> inkl. {km}km</p>
                <p className="inline-flex items-center gap-3"><HandCoinsIcon className="w-5 size-5 text-main" /> Kostenlose stornierung</p>
            </div>

        </div>
    );
}

export default PricingCard;