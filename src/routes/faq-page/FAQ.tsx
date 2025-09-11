import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type ListItem = {
    i: number;
    q: string;
    a: string;
}

const list: ListItem[] = [
    {
        i: 1,
        q: "Darf man mit dem Auto ins Ausland fahren?",
        a: "Auslandsfahrten sind grundsätzlich nur mit unserer vorherigen Zustimmung erlaubt. Ohne diese Genehmigung ist das Fahrzeug im Ausland nicht versichert, was im Schadensfall für Dich hohe Kosten bedeuten kann. Wenn Du vorhast, mit dem Fahrzeug ins Ausland zu fahren, sprich uns bitte rechtzeitig darauf an – wir klären dann alle Details und sorgen dafür, dass Du sorgenfrei unterwegs bist."
    },
    {
        i: 2,
        q: "Darf man mit dem Auto driften oder auf Rennstrecken fahren?",
        a: "Nein, das Driften sowie die Nutzung des Fahrzeugs auf Rennstrecken, wie zum Beispiel dem Nürburgring, sind nicht erlaubt. Diese Aktivitäten belasten das Fahrzeug extrem und können zu hohen Schäden führen, was auch Deine Kaution gefährden würde. Wir möchten, dass Du lange Freude an dem Auto hast und es in einwandfreiem Zustand zurückgibst. Bitte fahre daher stets verantwortungsbewusst und vorausschauend."
    },
    {
        i: 3,
        q: "Darf im Auto geraucht werden?",
        a: "Rauchen im Fahrzeug ist aus Rücksicht auf nachfolgende Mieter und zur Erhaltung des Fahrzeugs strikt verboten. Das gilt auch für Zigaretten, Zigarren oder Ähnliches. Vapes und E-Zigaretten sind hingegen erlaubt, da sie keinen starken Geruch hinterlassen. Solltest Du gegen das Rauchverbot verstoßen, fällt eine Vertragsstrafe an, da wir das Fahrzeug dann aufwendig reinigen müssen."
    },
    {
        i: 4,
        q: "Dürfen andere als der Mieter fahren?",
        a: "Alle zusätzlichen Fahrer müssen bei Mietbeginn im Mietvertrag eingetragen sein und bei der Fahrzeugübergabe anwesend sein, damit wir ihnen eine Einweisung geben können. Bitte informiere uns rechtzeitig, falls jemand anderes das Fahrzeug fahren möchte, damit wir das offiziell im Vertrag festhalten können. So bist Du im Schadensfall optimal abgesichert."
    },
    {
        i: 5,
        q: "Wie läuft das mit der Kaution?",
        a: "Die Kaution dient zur Regulierung eventueller Schäden. Du bekommst sie nach der Rückgabe vollständig zurück – vorausgesetzt, das Fahrzeug ist in einwandfreiem Zustand. Sollten Schäden vorhanden sein, behalten wir die Kaution anteilig oder vollständig ein, je nach Aufwand."
    },
    {
        i: 6,
        q: "Was passiert, wenn ich geblitzt werde oder einen Strafzettel/Bußgeld bekomme?",
        a: "Wenn Du während der Mietzeit geblitzt wirst oder ein Strafzettel bzw. Bußgeld gegen Dich verhängt wird, bist Du als Mieter dafür verantwortlich. Wir erhalten in der Regel den Bußgeldbescheid und leiten diesen an Dich weiter. Bitte bezahle die Strafe dann zeitnah, damit keine zusätzlichen Gebühren oder Mahnungen entstehen. Falls es Rückfragen gibt, helfen wir Dir natürlich gern weiter."
    },
    {
        i: 7,
        q: "Wie läuft der Buchungsvorgang ab?",
        a: "Die Buchung erfolgt im direkten Kontakt mit einem unserer Mitarbeiter – entweder telefonisch oder über WhatsApp besprechen wir alle wichtigen Details mit Dir. In der Regel ist eine Anzahlung nötig, um Deine Reservierung verbindlich zu machen."
    },
    {
        i: 8,
        q: "Welche Voraussetzungen musst Du als Mieter erfüllen?",
        a: "Du musst mindestens 18 Jahre alt sein (bei bestimmten Fahrzeugen auch älter) und im Besitz eines gültigen Führerscheins. Für bestimmte Modelle ist es außerdem erforderlich, dass Du den Führerschein seit mindestens 2 Jahren besitzt, da diese Fahrzeuge einiges an Fahrerfahrung verlangen."
    },
    {
        i: 9,
        q: "Wie kurzfristig kann ich ein Fahrzeug mieten?",
        a: "Kurzfristige Buchungen sind je nach Verfügbarkeit oft sogar am selben Tag möglich – gerade wenn Du spontan unterwegs sein möchtest. Dennoch empfehlen wir Dir, Dein Wunschfahrzeug möglichst frühzeitig zu reservieren, vor allem an Wochenenden, Feiertagen oder zu besonderen Anlässen, damit Du sicher gehen kannst, dass Dein Fahrzeug auch wirklich bereitsteht."
    },
    {
        i: 10,
        q: "Was passiert, wenn ich die Kilometergrenze überschreite?",
        a: "Jedes Mietpaket enthält ein festes Kilometerkontingent. Bei Überschreitung berechnen wir eine faire Pauschale pro zusätzlichem Kilometer – die genauen Kosten teilen wir Dir vorab mit. Zusätzlich kannst Du vorab oder während der Miete ganz unkompliziert Extra-Kilometer dazubuchen. Bei Bedarf kannst Du Dich jederzeit während der Miete ganz unkompliziert telefonisch oder per Nachricht bei uns melden."
    },
    {
        i: 11,
        q: "Wie ist das Fahrzeug versichert?",
        a: "Alle Fahrzeuge sind als Selbstfahrermietfahrzeuge vollkaskoversichert. Die Selbstbeteiligung im Schadensfall besprechen wir transparent bei Vertragsabschluss und Du kannst sie bei Bedarf durch eine Zusatzversicherung reduzieren. Sprich uns hierzu einfach gerne an!"
    },
    {
        i: 12,
        q: "Was ist im Mietpreis enthalten?",
        a: "Im Preis sind die gebuchten Kilometer, die gesetzliche Versicherung, eine professionelle Fahrzeugreinigung sowie eine ausführliche Fahrzeugeinweisung enthalten. Außerdem steht Dir unser Support rund um die Uhr, also 24/7, zur Verfügung. Zusatzleistungen kannst Du optional hinzubuchen."
    },
    {
        i: 13,
        q: "Gibt es eine Einweisung in das Fahrzeug bei Übergabe?",
        a: "Ja, bei der Übergabe bekommst Du eine detaillierte Einweisung in die Fahrzeugfunktionen – gerade bei Hochleistungsfahrzeugen wie dem AMG C63 S ist es uns wichtig, dass Du sicher und gut vorbereitet unterwegs bist."
    },
    {
        i: 14,
        q: "Was passiert bei verspäteter Rückgabe?",
        a: "Bei verspäteter Rückgabe ohne vorherige Absprache können zusätzliche Kosten entstehen, da der Wagen eventuell bereits für den nächsten Kunden eingeplant ist. Bitte gib uns frühzeitig Bescheid, wenn sich Deine Rückgabezeit verschiebt – in vielen Fällen finden wir gemeinsam eine unkomplizierte Lösung."
    },
    {
        i: 15,
        q: "Wie läuft die Rückgabe ab?",
        a: "Bei der Rückgabe erfolgt eine gemeinsame Fahrzeugkontrolle, bei der eventuelle Schäden oder Abweichungen direkt mit Dir dokumentiert werden. Das Fahrzeug sollte vollgetankt zurückgebracht werden. Eine Reinigung ist nicht notwendig – das übernehmen wir für unsere Kunden selbstverständlich."
    },
    {
        i: 16,
        q: "Was passiert im Schadensfall oder bei einer Panne?",
        a: "Sollte es zu einer Panne oder einem Schaden kommen, sind wir für Dich telefonisch oder über WhatsApp 24/7 erreichbar. Wir sorgen für schnelle Hilfe und kümmern uns um eine reibungslose Abwicklung."
    },
    {
        i: 17,
        q: "Kann ich eine Buchung auch stornieren?",
        a: "Ja, eine Buchung kannst Du grundsätzlich stornieren. Wichtig ist nur, dass die Stornierung früh genug erfolgt. Bei einer kurzfristigen Stornierung innerhalb von 24 Stunden vor Mietbeginn behalten wir die Anzahlung als Stornogebühr ein."
    },
    {
        i: 18,
        q: "Kann ich das Fahrzeug für besondere Anlässe wie Hochzeiten mieten?",
        a: "Selbstverständlich! Viele unserer Kunden mieten unsere Fahrzeuge für Hochzeiten, Fotoshootings oder Events. Sprich uns einfach an – wir bieten auch spezielle Tagespauschalen für solche Anlässe an. Auf Wunsch schmücken wir das Fahrzeug gerne mit passender Hochzeitsdekoration – auch das bieten wir unseren Kunden an."
    },
    {
        i: 19,
        q: "Kann ich das Fahrzeug auch früher als vereinbart zurückgeben?",
        a: "In der Regel erfolgt die Fahrzeugübergabe und Rückgabe zu der im Mietvertrag festgelegten Zeit. Wenn Du das Fahrzeug früher zurückgeben möchtest, melde Dich am besten frühzeitig bei uns – oft finden wir eine flexible Lösung."
    },
    {
        i: 20,
        q: "Kann die Miete auch spontan verlängert werden?",
        a: "Ja, das ist grundsätzlich möglich! Wenn das Fahrzeug noch frei ist, kannst Du die Mietdauer ganz bequem und unkompliziert telefonisch oder über WhatsApp verlängern. Melde Dich einfach bei uns, und wir kümmern uns um alle weiteren Details – so kannst Du Deine Fahrt entspannt verlängern, ohne Stress oder großen Aufwand."
    }
];

interface FaqAccordionProps {
    index: number;
    question: string;
    content: string;
}

const FaqAccordion = ({ index, question, content }: FaqAccordionProps) => {
    return (
        <AccordionItem value={`item-${index}`} className="p-4 cursor-pointer">
            <AccordionTrigger className="py-0 items-center">
                <div className="flex items-center">
                    <span className="lg:text-lg">{question}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="text-base pt-2 pb-0 text-muted-foreground">
                {content}
            </AccordionContent>
        </AccordionItem>
    )
}


const FAQ = () => {
    useEffect(() => {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => window.scrollTo(0, 0))
  );
}, []);
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px] bg-sidebar">

                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-main" data-aos="fade-right" data-aos-delay="300">Häufige Fragen</h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-neutral-100" data-aos="fade-left" data-aos-delay="300">Wir haben die Antworten!</h2>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 lg:h-16 px-8 lg:text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>


                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://images.pexels.com/photos/756789/pexels-photo-756789.jpeg?w=1920')] bg-cover bg-center" data-aos="fade-up"></div>
                </div>

                <section className="container mx-auto px-6 mt-6 mb-12" data-aos="fade-up">
                    <Accordion type="single" collapsible>
                        <div className="flex flex-col gap-6 bg-accent p-6 rounded-md border shadow">
                            {list.map((l) => (
                                <FaqAccordion index={l.i} question={l.q} content={l.a} />
                            ))}
                        </div>
                    </Accordion>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default FAQ;