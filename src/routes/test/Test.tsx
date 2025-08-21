import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useLayoutEffect } from "react";
import TestCars from "./components/TestCars";
import TestHero from "./components/TestHero";
import TestProcess from "./components/TestProcess";
import TestMoments from "./components/TestMoments";
import TestFeatures from "./components/TestFeatures";
import TestFaq from "./components/TestFAQ";
import TestReviews from "./components/TestReviews";

const Test = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <TestHero />
                <TestCars />
                <TestProcess />
                <TestMoments />
                <TestFeatures />
                <TestReviews />
                <TestFaq />
            </main>
            <Footer />
        </div>
    );
}

export default Test;