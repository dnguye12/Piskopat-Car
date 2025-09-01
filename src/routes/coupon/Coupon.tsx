import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from "@/components/animate-ui/radix/tabs";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GiftIcon } from "lucide-react";
import { Link } from "react-router";

const Coupon = () => {
    return (
        <div className="contact w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 mt-[88px] mb-6">
                <div className="relative pt-32 lg:pt-60 pb-12">
                    <div className="container mx-auto px-4 relative z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-main font-orbi" data-aos="fade-right" data-aos-delay="300">Gutschein</h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-neutral-100" data-aos="fade-left" data-aos-delay="300">Schenken Sie die Freude eines Sportwagens</h2>
                        <div className="mt-7 flex gap-x-4 items-center">
                            <Button variant={"main"} size="lg" className="font-semibold h-12 lg:h-16 px-8 lg:text-lg" asChild><a href={import.meta.env.VITE_WHATSAPP} target="_blank">Jetzt buchen</a></Button>
                        </div>
                    </div>
                    <div className="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 dark:from-background to-neutral-900/50 z-10 bg-no-repeat bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                    <div className="absolute w-full h-full top-0 left-0 z-0 bg-[url('https://images.pexels.com/photos/26691199/pexels-photo-26691199.jpeg')] bg-cover bg-center" data-aos="fade-up" data-aos-delay="100"></div>
                </div>
                <div className="container mx-auto mt-6 px-4">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2 bg-main rounded-lg border p-8 relative shadow">
                            <div className="relative flex flex-col items-start z-10 text-neutral-900 gap-y-4">
                                <h3 className="text-2xl lg:text-3xl">Gutschein sportwagen selber fahren!</h3>
                                <p className="lg:text-lg">Verschenken Sie einzigartige Freude und ein besonderes Erlebnis mit unserem Gutschein zum selber fahren. Wählen Sie aus einem allgemeinen Wertgutschein oder einer Fahrt in einem spezifischen Sportwagen. Gerne helfen wir Ihnen auch bei der Auswahl des passenden Geschenks.</p>
                                <Separator className="bg-accent" />
                                <div className="flex items-center gap-4">
                                    <Button size="lg" className="h-12 px-8 bg-neutral-900 text-neutral-100 hover:bg-neutral-800 w-auto group" asChild>
                                        <a href={import.meta.env.VITE_WHATSAPP} target="_blank"><GiftIcon className="min-w-5 size-5 group-hover:mr-1 transition-all" /> Gutschein anfragen</a>
                                    </Button>
                                    <Button size="lg" className="h-12 px-8 bg-neutral-900 text-neutral-100 hover:bg-neutral-800 w-auto group" asChild>
                                        <Link to="/kontakt" target="_blank">Kontakt</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 rounded-lg border overflow-hidden shadow bg-[url('https://images.pexels.com/photos/549364/pexels-photo-549364.jpeg')] bg-cover bg-center">
                        </div>
                    </div>
                    <Tabs className="mt-6">
                        <TabsList className="w-full p-0 border">
                            <TabsTrigger className="" value="tab1">
                                <div className="p-8">ss</div>
                            </TabsTrigger>
                            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        </TabsList>
                        <TabsContents>
                            <TabsContent value="tab1">Tab 1 Content</TabsContent>
                            <TabsContent value="tab2">Tab 2 Content</TabsContent>
                        </TabsContents>
                    </Tabs>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Coupon;