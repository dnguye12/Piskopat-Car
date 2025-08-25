import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useLayoutEffect } from "react";
import TestCars from "./components/TestCars";
import TestHero from "./components/TestHero";
import TestProcess from "./components/TestProcess";
import TestMoments from "./components/TestMoments";
import TestFeatures from "./components/TestFeatures";
import TestReviews from "./components/TestReviews";
import TestMap from "./components/TestMap";

const Test = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pb-6">
                <TestHero />
                <TestCars />
                <TestProcess />
                <TestMoments />
                <TestFeatures />
                <TestReviews />
                <TestMap />
            </main>
            <Footer />
        </div>
    );
}

export default Test;