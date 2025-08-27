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
import { useLocation } from "react-router";

const Test = () => {
    const location = useLocation()

    useLayoutEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo(0, 0)
        }
    })
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pb-6">
                <TestHero />
                <TestMoments />
                <TestFeatures />
                <TestProcess />
                <TestCars />
                <TestReviews />
                <TestMap />
            </main>
            <Footer />
        </div>
    );
}

export default Test;