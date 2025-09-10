import { CalendarIcon, CarFrontIcon, CheckCheckIcon, CircleUserRoundIcon, ClockIcon, FileIcon, FileTextIcon, FuelIcon, ListTodoIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { useState, type JSX } from "react";

const features = [
    {
        icon: <ListTodoIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "Gemeinsame Fahrzeugkontrolle",
        desc: "Übergabe mit gemeinsamer Prüfung",
    },
    {
        icon: <ZapIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "Schnelle Übergabe",
        desc: "Max. 120 Minuten bis zur Übergabe.",
    },
    {
        icon: <FileTextIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "Übergabe inkl. Übergabeprotokoll",
        desc: "Protokollierte Fahrzeugübergabe",
    },
    {
        icon: <CheckCheckIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "Unkomplizierte Abwicklung",
        desc: "Schnell & unkompliziert mieten",
    },
    {
        icon: <FileIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "Mietvertrag inkl. AGB’s",
        desc: "Transparenter Vertrag mit AGB.",
    },
    {
        icon: <CircleUserRoundIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "Persönlicher Service",
        desc: "Persönliche Betreuung",
    },
    {
        icon: <CalendarIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "Selbstfahrermietfahrzeug",
        desc: "Fahr selbst. Fühl dich frei.",
    },
    {
        icon: <ShieldCheckIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "Vollkasko versichert",
        desc: "Vollkaskoschutz für sorgenfreie Fahrten",
    },
    {
        icon: <SiWhatsapp className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "WhatsApp Support",
        desc: "Schnelle Hilfe per WhatsApp.",
    },
    {
        icon: <ClockIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "24/7 Support",
        desc: "Jederzeit erreichbar.",
    },
    {
        icon: <CarFrontIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "Top Zustand",
        desc: "Fahrzeuge im Bestzustand.",
    },
    {
        icon: <FuelIcon className="min-w-5 size-5 group-hover:text-neutral-900" />,
        title: "Vollgetankt",
        desc: "Vollgetankt ins Abenteuer",
    },
];

type Active = {
    icon: JSX.Element;
    title: string;
    desc: string
}

const TestFeatures = () => {
    const [active, setActive] = useState<Active | null>(null)

    return (
        <>
            <div id="vorteile" className="relative">
                <div className="grid xl:grid-cols-3 gap-6 container mx-auto px-6">
                    <div className="flex flex-col xl:col-span-2" data-aos="fade-right">
                        <div className="rounded-lg p-8 relative bg-main border text-neutral-900 overflow-hidden">
                            <h3 className="hidden sm:block text-2xl lg:text-3xl">Ob ein Tag voller Adrenalin, ein Wochenende im Zeichen der Freiheit oder gleich für länger – du wählst, wir machen es möglich.</h3>
                            <p className="hidden sm:block mt-3 lg:text-lg break-words">Das bekommst du, wenn du bei uns einen Sportwagen mietest:</p>
                            <h3 className="block sm:hidden text-2xl sm:text-3xl">Das bekommst du, wenn du bei uns einen Sportwagen mietest:</h3>
                            <img src="/thing.svg" className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 z-0 w-full pointer-events-none" />
                        </div>

                        <div className="hidden xl:block xl:col-span-3 2xl:col-span-2 relative border rounded-lg p-8 pt-0 mt-6 bg-[#050809]">
                            <div className="w-full h-[840px]">
                                <div className="relative z-10 w-full h-full flex justify-center items-center overflow-hidden">
                                    <OrbitingCircles radius={360} speed={0}>
                                        <div
                                            onMouseEnter={() => setActive(features[0])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <ListTodoIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0 bg-[#050809]">
                                                Gemeinsame Fahrzeugkontrolle
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[1])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <ZapIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0">
                                                Schnelle Übergabe
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[2])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <FileTextIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0 bg-[#050809]">
                                                Übergabe inkl. Übergabeprotokoll
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[3])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <CheckCheckIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0 bg-[#050809]">
                                                Unkomplizierte Abwicklung
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[4])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <FileIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0 bg-[#050809]">
                                                Mietvertrag inkl. AGB’s
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[5])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <CircleUserRoundIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 z-0">
                                                Persönlicher Service
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[6])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <CalendarIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0 bg-[#050809]">
                                                Selbstfahrermietfahrzeug
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[7])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <ShieldCheckIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0">
                                                Vollkasko versichert
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[8])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <SiWhatsapp className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0 bg-[#050809]">
                                                WhatsApp Support
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[9])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <ClockIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0 bg-[#050809]">
                                                24/7 Support
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[10])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <CarFrontIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0 bg-[#050809]">
                                                Top Zustand
                                            </p>
                                        </div>

                                        <div
                                            onMouseEnter={() => setActive(features[11])}
                                            onMouseLeave={() => setActive(null)}
                                            className="relative flex flex-col gap-2 items-center text-center text-neutral-100 hover:text-main transition-all group"
                                        >
                                            <div className="border border-main bg-neutral-800/66 group-hover:bg-main transition-all backdrop-blur-sm rounded-full size-14 inline-flex justify-center items-center relative z-10">
                                                <FuelIcon className="min-w-7 size-7 text-main group-hover:text-neutral-900 transition-all" />
                                            </div>
                                            <p className="absolute font-medium text-sm mt-10 pt-6 pb-2 px-2 z-0">
                                                Vollgetankt
                                            </p>
                                        </div>
                                    </OrbitingCircles>

                                </div>
                                <div className={`${active ? "opacity-100" : "opacity-0"} absolute top-1/2 left-1/2 -translate-1/2 z-10 flex flex-col p-6 gap-3 rounded-lg shadow-lg dark:border bg-main text-neutral-900 group`}>
                                    <div className="flex items-center justify-start gap-3">
                                        <div className="border rounded-md size-10 inline-flex justify-center items-center border-neutral-900">
                                            {active?.icon}
                                        </div>
                                        <p className="font-medium text-xl">{active?.title}</p>
                                    </div>
                                    <p className="text-neutral-900 text-xl">{active?.desc}</p>
                                </div>


                                <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-[url('https://i.ibb.co/TxBzrKq9/dqdqzdqdqd.jpg')] bg-cover bg-center w-3/4 h-3/4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:block bg-[url('https://i.ibb.co/v4Q4Bk04/features.jpg')] bg-cover bg-center w-full h-full rounded-lg border" data-aos="fade-left"></div>
                    
                    <div className="hidden xl:hidden min-[500px]:grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                        <div className=" flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <ListTodoIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">Gemeinsame Fahrzeugkontrolle</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Übergabe mit gemeinsamer Prüfung</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <ZapIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">Schnelle Übergabe</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Max. 120 Minuten bis zur Übergabe.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <FileTextIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">Übergabe inkl. Übergabeprotokoll</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Protokollierte Fahrzeugübergabe</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <CheckCheckIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">Unkomplizierte Abwicklung</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Schnell & unkompliziert mieten</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <FileIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">Mietvertrag inkl. AGB’s</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Transparenter Vertrag mit AGB.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <CircleUserRoundIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">Persönlicher Service</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Persönliche Betreuung</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <CalendarIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium truncate">Selbstfahrermietfahrzeug</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Fahr selbst. Fühl dich frei.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <ShieldCheckIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">Vollkasko versichert</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Vollkaskoschutz für sorgenfreie Fahrten</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <SiWhatsapp className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">WhatsApp Support</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Schnelle Hilfe per WhatsApp.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <ClockIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">24/7 Support</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Jederzeit erreichbar.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <CarFrontIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">Top Zustand</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Fahrzeuge im Bestzustand.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                <FuelIcon className="min-w-5 size-5" />
                            </div>
                            <p className="font-medium">Vollgetankt</p>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Vollgetankt ins Abenteuer</p>
                        </div>
                    </div>
                    <div className="hidden max-[500px]:grid grid-cols-1 gap-6 text-sm">
                        <div className=" flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <ListTodoIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Gemeinsame Fahrzeugkontrolle</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Übergabe mit gemeinsamer Prüfung</p>
                        </div>
                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <ZapIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Schnelle Übergabe</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Max. 120 Minuten bis zur Übergabe.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <FileTextIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Übergabe inkl. Übergabeprotokoll</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Protokollierte Fahrzeugübergabe</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <CheckCheckIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Unkomplizierte Abwicklung</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Schnell & unkompliziert mieten</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <FileIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Mietvertrag inkl. AGB’s</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Transparenter Vertrag mit AGB.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <CircleUserRoundIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Persönlicher Service</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Persönliche Betreuung</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <CalendarIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium truncate">Selbstfahrermietfahrzeug</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Fahr selbst. Fühl dich frei.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <ShieldCheckIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Vollkasko versichert</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Vollkaskoschutz für sorgenfreie Fahrten</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <SiWhatsapp className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">WhatsApp Support</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Schnelle Hilfe per WhatsApp.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <ClockIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">24/7 Support</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Jederzeit erreichbar.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <CarFrontIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Top Zustand</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Fahrzeuge im Bestzustand.</p>
                        </div>

                        <div className="flex flex-col p-4 gap-y-3 rounded-lg bg-accent border transition-all hover:bg-main hover:text-neutral-900 group">
                            <div className="flex items-center gap-3">
                                <div className="border border-foreground/50 rounded-md size-10 inline-flex justify-center items-center transition-all group-hover:border-neutral-900">
                                    <FuelIcon className="min-w-5 size-5" />
                                </div>
                                <p className="font-medium">Vollgetankt</p>
                            </div>
                            <p className="text-muted-foreground group-hover:text-neutral-900 transition-all">Vollgetankt ins Abenteuer</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default TestFeatures;