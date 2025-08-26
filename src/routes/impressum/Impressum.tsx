import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useLayoutEffect } from "react";

const Impressum = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px]">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-5xl lg:text-6xl text-main font-orbi" data-aos="fade-right" data-aos-delay="300">Impressum</h1>
                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://i.ibb.co/S4npDd1k/pexels-asphotograpy-515674.jpg')] bg-cover bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                </div>

                <div className="flex flex-col container mx-auto px-4 mt-6 mb-20">
                    <h2 className=" text-3xl font-semibold">Angaben gemäß § 5 TMG</h2>
                    <p className="text-lg">Hüseyin Cimen</p>
                    <p className="text-lg">X Sportwagen</p>
                    <p className="text-lg">Wulfsbergstr 1a</p>
                    <p className="text-lg">59320 Ennigerloh</p>

                    <h2 className="text-3xl mt-20 font-semibold">Kontakt</h2>
                    <p className="text-lg">Telefon: <span className="text-main font-semibold">+49 176 72223678</span></p>
                    <p className="text-lg">E-Mail: <span className="text-main font-semibold">info@xsportwagen.de</span></p>
                    <p className="text-lg">Umsatzsteueridentifikationsnummer DE 400216306</p>
                    <p className="text-lg">Steuernr. 346/5014/7726</p>

                    <h2 className="text-3xl mt-20 font-semibold">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
                    <p className="text-lg">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Impressum;