import { CalendarClockIcon, CarIcon, CheckCheckIcon, FileIcon, PhoneCallIcon, ShieldCheckIcon, ThumbsUpIcon } from "lucide-react";

const TestFeatures = () => {

    return (
        <div id="vorteile"  className="relative">
                <div className="flex flex-col gap-6 container mx-auto px-6">
                    <div className="flex flex-col gap-6">
                        <div className="rounded-lg p-8 relative bg-main border text-neutral-900 overflow-hidden">
                            <div className="flex gap-x-4 items-center mb-4">
                                <div className="min-w-10 size-10 border border-neutral-900 rounded inline-flex justify-center items-center">
                                    <CheckCheckIcon className="text-neutral-900 size-5" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl z-20 font-medium">Unsere Vorteile</h2>
                            </div>

                            <h3 className="hidden sm:block text-lg my-4">Ob ein Tag voller Adrenalin, ein Wochenende im Zeichen der Freiheit oder gleich für länger – du wählst, wir machen es möglich.</h3>
                            <p className="hidden sm:block text-lg break-words">Das bekommst du, wenn du bei uns einen Sportwagen mietest:</p>
                            <h3 className="block sm:hidden text-2xl sm:text-3xl">Das bekommst du, wenn du bei uns einen Sportwagen mietest:</h3>
                            <img src="/thing.svg" className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 z-0 w-full pointer-events-none" />
                        </div>

                        <div className="grid grid-cols-5 gap-6">
                            <div className="grid grid-cols-1 grid-rows-6 gap-6">
                                <div className="row-span-3 bg-accent border rounded-lg p-8 flex flex-col items-start w-full aspect-square relative overflow-hidden group hover:bg-main transition-all">
                                    <FileIcon className="w-56 h-56 stroke-0 fill-foreground/5 absolute -rotate-6 -right-6 -bottom-9 group-hover:rotate-0 group-hover:fill-neutral-900/10 transition-all" />
                                    <p className="text-xl font-medium text-main group-hover:text-neutral-900 transition-all">Transparenter Mietvertrag</p>
                                    <p className="text-muted-foreground mt-auto group-hover:text-neutral-900 transition-all">Klarer, verständlicher Vertrag inklusive transparenter AGB – ohne versteckte Klauseln oder Überraschungen.</p>
                                </div>
                                <div className="row-span-3 bg-accent border rounded-lg p-8 flex flex-col items-start w-full aspect-square relative overflow-hidden group hover:bg-main transition-all">
                                    <CalendarClockIcon className="w-56 h-56 stroke-0 fill-foreground/5 absolute -rotate-6 -right-6 -bottom-9 group-hover:rotate-0 group-hover:fill-neutral-900/10 transition-all" />
                                    <p className="text-xl font-medium text-main group-hover:text-neutral-900 transition-all">Schnelle, dokumentierte Übergabe</p>
                                    <p className="text-muted-foreground mt-auto group-hover:text-neutral-900 transition-all">Gemeinsame Prüfung inkl. detailliertem Übergabeprotokoll; Übergabe erfolgt spätestens innerhalb von 120 Minuten.</p>
                                </div>
                            </div>
                            <div className="bg-[url('https://images.pexels.com/photos/19597726/pexels-photo-19597726.jpeg?w=960')] bg-cover bg-center rounded-lg shadow border"></div>
                            <div className="grid grid-cols-1 grid-rows-6 gap-6">
                                <div className="row-span-3 bg-accent border rounded-lg p-8 flex flex-col items-start w-full aspect-square relative overflow-hidden group hover:bg-main transition-all">
                                    <ThumbsUpIcon className="w-56 h-56 stroke-0 fill-foreground/5 absolute -rotate-6 -right-6 -bottom-9 group-hover:rotate-0 group-hover:fill-neutral-900/10 transition-all" />
                                    <p className="text-xl font-medium text-main group-hover:text-neutral-900 transition-all">Einfache Selbstfahrer-Miete</p>
                                    <p className="text-muted-foreground mt-auto group-hover:text-neutral-900 transition-all">Unkompliziert abholen und selbst fahren; flexible Nutzung, volle Freiheit bei deiner Planung.</p>
                                </div>
                                <div className="row-span-3 bg-accent border rounded-lg p-8 flex flex-col items-start w-full aspect-square relative overflow-hidden group hover:bg-main transition-all">
                                    <PhoneCallIcon className="w-56 h-56 stroke-0 fill-foreground/5 absolute -rotate-6 -right-6 -bottom-9 group-hover:rotate-0 group-hover:fill-neutral-900/10 transition-all" />
                                    <p className="text-xl font-medium text-main group-hover:text-neutral-900 transition-all">Persönlicher 24/7 Support</p>
                                    <p className="text-muted-foreground mt-auto group-hover:text-neutral-900 transition-all">Persönliche Betreuung mit echter Erreichbarkeit – rund um die Uhr, auch bequem per WhatsApp.</p>
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-2 grid-rows-6 gap-6">
                                <div className="row-span-3 bg-accent border rounded-lg p-8 flex flex-col items-start w-full aspect-square relative overflow-hidden group hover:bg-main transition-all">
                                    <ShieldCheckIcon className="w-56 h-56 stroke-0 fill-foreground/5 absolute -rotate-6 -right-6 -bottom-9 group-hover:rotate-0 group-hover:fill-neutral-900/10 transition-all" />
                                    <p className="text-xl font-medium text-main group-hover:text-neutral-900 transition-all">Vollkasko-Schutz</p>
                                    <p className="text-muted-foreground mt-auto group-hover:text-neutral-900 transition-all">Umfassender Vollkaskoschutz mit fairer Abwicklung, damit du entspannt und sorglos unterwegs bist.</p>
                                </div>
                                <div className="row-span-3 bg-accent border rounded-lg p-8 flex flex-col items-start w-full aspect-square relative overflow-hidden group hover:bg-main transition-all">
                                    <CarIcon className="w-56 h-56 stroke-0 fill-foreground/5 absolute -rotate-6 -right-6 -bottom-9 group-hover:rotate-0 group-hover:fill-neutral-900/10 transition-all" />
                                    <p className="text-xl font-medium text-main group-hover:text-neutral-900 transition-all">Top Zustand & vollgetankt</p>
                                    <p className="text-muted-foreground mt-auto group-hover:text-neutral-900 transition-all">Gepflegte Fahrzeuge im Bestzustand, vollständig gecheckt und für dich mit vollem Tank startklar.</p>
                                </div>
                                <div className="col-span-2 row-span-3 bg-[url('https://i.ibb.co/v4Q4Bk04/features.jpg')] bg-cover bg-center rounded-lg shadow border"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default TestFeatures;