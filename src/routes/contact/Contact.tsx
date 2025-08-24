import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import { useLayoutEffect } from "react";

const Contact = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="contact w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex flex-col-reverse lg:grid grid-cols-2 lg:min-h-[calc(100vh-88px)] mt-[88px]">
                <div className="w-full lg:h-full bg-[url('https://i.ibb.co/xSgzRTP3/fb7772b40cf1d5ab756c9cd9b626603b.webp')] bg-cover bg-right aspect-video lg:aspect-auto" data-aos="fade-right"></div>
                <div className="w-full lg:h-full py-14 px-6 max-w-xl mx-auto flex flex-col justify-center mt-0" data-aos="fade-left">
                    <h2 className="text-2xl sm:text-3xl">RUND UM DIE UHR</h2>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-main mt-2 font-semibold">Kontaktiere uns</h1>
                    <p className="text-muted-foreground my-6">Du hast noch offene Fragen? Kein Problem.<br />Unser Service wird dir schnellstmöglich weiterhelfen!</p>
                    <div className="flex flex-col gap-y-3 mb-6">
                        <div className="inline-flex gap-x-2  items-center">
                            <MapPinIcon className="text-main" /><span className="">Wulfsbergstr 1a, 59320 Ennigerloh</span>
                        </div>
                        <div className="inline-flex gap-x-2  items-center">
                            <MailIcon className="text-main" /><span>info@xsportwagen.de</span>
                        </div>
                        <div className="inline-flex gap-x-2  items-center">
                            <PhoneCallIcon className="text-main" /><span>+49 176 72223678</span>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;