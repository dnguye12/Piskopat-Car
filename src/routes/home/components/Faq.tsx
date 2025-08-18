import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqAccordionProps {
    index: number;
    question: string;
    content: string;
}

const FaqAccordion = ({ index, question, content }: FaqAccordionProps) => {
    return (
        <AccordionItem value={`item-${index}`} className="border rounded-lg p-6 mt-6 shadow-md">
            <AccordionTrigger className="py-0 items-center">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded bg-main inline-flex justify-center items-center text-neutral-900 text-lg mr-3">
                        <span>{index < 10 ? "0" + index : index}</span>
                    </div>
                    <span className=" text-xl">{question}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="text-base ps-[52px] pt-2 pb-0">
                {content}
            </AccordionContent>
        </AccordionItem>
    )
}

const Faq = () => {
    return (
        <section className="container mx-auto mt-44 px-6 mb-20">
            <h2 className="text-center text-5xl text-neutral-900 dark:text-main font-semibold">FAQ</h2>
            <div className="mt-6">
                <Accordion type="single" collapsible>
                    <FaqAccordion index={1} question={"Darf man mit dem Auto ins Ausland fahren?"} content={"Auslandsfahrten sind grundsätzlich nur mit unserer vorherigen Zustimmung erlaubt. Ohne diese Genehmigung ist das Fahrzeug im Ausland nicht versichert, was im Schadensfall für Dich hohe Kosten bedeuten kann. Wenn Du vorhast, mit dem Fahrzeug ins Ausland zu fahren, sprich uns bitte rechtzeitig darauf an – wir klären dann alle Details und sorgen dafür, dass Du sorgenfrei unterwegs bist."} />
                    <FaqAccordion index={2} question={"Darf man mit dem Auto ins Ausland fahren?"} content={"Auslandsfahrten sind grundsätzlich nur mit unserer vorherigen Zustimmung erlaubt. Ohne diese Genehmigung ist das Fahrzeug im Ausland nicht versichert, was im Schadensfall für Dich hohe Kosten bedeuten kann. Wenn Du vorhast, mit dem Fahrzeug ins Ausland zu fahren, sprich uns bitte rechtzeitig darauf an – wir klären dann alle Details und sorgen dafür, dass Du sorgenfrei unterwegs bist."} />
                    <FaqAccordion index={3} question={"Darf man mit dem Auto ins Ausland fahren?"} content={"Auslandsfahrten sind grundsätzlich nur mit unserer vorherigen Zustimmung erlaubt. Ohne diese Genehmigung ist das Fahrzeug im Ausland nicht versichert, was im Schadensfall für Dich hohe Kosten bedeuten kann. Wenn Du vorhast, mit dem Fahrzeug ins Ausland zu fahren, sprich uns bitte rechtzeitig darauf an – wir klären dann alle Details und sorgen dafür, dass Du sorgenfrei unterwegs bist."} />
                </Accordion>
            </div>
        </section>
    );
}

export default Faq;