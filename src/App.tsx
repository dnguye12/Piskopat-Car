import { Route, Routes } from "react-router"
import HomePage from "./routes/home/Home"
import Contact from "./routes/contact/Contact"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Vehicles from "./routes/vehicles/Vehicles";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 600
    })
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/fahrzeuge" element={<Vehicles />}/>
    </Routes>
  )
}

export default App
