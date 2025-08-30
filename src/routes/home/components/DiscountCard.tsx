"use client"

import { cn } from "@/lib/utils";
import { CakeIcon, GiftIcon } from "lucide-react";
import { useState } from "react";

const DiscountCard = () => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <div onMouseEnter={() => setActive(true)} className="relative rounded-lg border shadow overflow-hidden">
            <div className={cn(
                "transition-all duration-500 absolute z-10 w-full h-full bg-accent flex justify-center items-center",
                !active && " opacity-100",
                active && "opacity-0"
            )}>
                <GiftIcon className=" animate-bounce text-main min-w-12 size-12" />
            </div>
            <div className="relative z-0 flex flex-col">
                <div className="bg-[url('https://images.pexels.com/photos/7144177/pexels-photo-7144177.jpeg')] bg-cover aspect-video"></div>
                <div className="p-8 bg-accent flex flex-col gap-4">
                    <div className="flex gap-x-4 items-center">
                        <div className="min-w-10 size-10 border border-foreground dark:border-main rounded inline-flex justify-center items-center">
                            <CakeIcon className=" size-5" />
                        </div>
                        <h3 className=" text-lg lg:text-xl mb-2 sm:leading-none text-main">5% Geburtstagsrabatt</h3>
                    </div>
                    <p className=" text-muted-foreground">Feier mit uns und erhalte 5% Rabatt auf deine nächste Miete.
                        Wenn du zusätzlich zum ersten Mal bei uns buchst, gibt’s sogar satte 15%!</p>
                </div>
            </div>
        </div>
    );
}

export default DiscountCard;