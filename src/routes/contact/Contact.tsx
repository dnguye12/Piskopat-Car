import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MailIcon, MapPinIcon, MessageCircleQuestionIcon, PhoneCallIcon } from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {

    useEffect(() => {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => window.scrollTo(0, 0))
  );
}, []);

    return (
        <div className="contact w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px] mb-6">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-main" data-aos="fade-right" data-aos-delay="300">Kontaktiere uns</h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-neutral-100" data-aos="fade-left" data-aos-delay="300">Rund um die uhr</h2>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 lg:h-16 px-8 lg:text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>
                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://i.ibb.co/xSgzRTP3/fb7772b40cf1d5ab756c9cd9b626603b.webp')] bg-cover bg-center" data-aos="fade-up"></div>
                </div>
                <div className="container mx-auto grid lg:grid-cols-3 gap-6 mt-6 px-4" data-aos="fade-up">
                    <div className="flex sm:grid sm:grid-cols-2 lg:flex flex-col justify-between gap-6 w-full">
                        <div className="p-8 rounded-lg border bg-main flex items-start gap-x-2 shadow">
                            <MessageCircleQuestionIcon className="min-w-6 size-6 text-neutral-900" />
                            <div>
                                <p className="font-medium text-lg mb-2 text-neutral-900 sm:leading-none">Du hast noch offene Fragen? Kein Problem.</p>
                                <p className="text-neutral-900">Unser Service wird dir schnellstmöglich weiterhelfen!</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-lg border bg-accent flex items-start gap-x-3 shadow">
                            <MailIcon className="min-w-6 size-6" />
                            <div>
                                <h5 className="font-medium text-lg mb-2 text-main sm:leading-none">info@xsportwagen.de</h5>
                                <p className="">Erhalten Sie innerhalb eines Tages eine Antwort</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-lg border bg-accent flex items-start gap-x-3 shadow">
                            <PhoneCallIcon className="min-w-6 size-6" />
                            <div>
                                <h5 className="font-medium text-lg mb-2 text-main sm:leading-none">+49 176 72223678</h5>
                                <p className="">Montag - Sonntag, 9:00-18:00</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-lg border bg-accent flex items-start gap-x-3 shadow">
                            <MapPinIcon className="min-w-6 size-6" />
                            <div>
                                <h5 className="font-medium text-lg mb-2 text-main sm:leading-none">Wulfsbergstr 1a, 59320 Ennigerloh</h5>
                                <p className="">Planen Sie ein persönliches Treffen</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 flex flex-col">
                        <div className="bg-accent p-8 rounded-lg border shadow">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;