import Navbar from "@/components/navbar";
import Hero from "./components/Hero";
import Moments from "./components/Moments";
import Process from "./components/Process";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Address from "./components/Address";
import Faq from "./components/Faq";
import Footer from "@/components/footer";
import Cars from "./components/Cars";

const HomePage = () => {
    return ( 
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Hero/>
                <Moments />
                <Features />
                <Process />
                <Cars />
                <Reviews />
                <Address />
                <Faq />
            </main>
            <Footer />
        </div>
     );
}
 
export default HomePage;