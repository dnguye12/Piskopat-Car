import { Route, Routes } from "react-router"
import HomePage from "./routes/home/Home"
import Contact from "./routes/contact/Contact"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Vehicles from "./routes/vehicles/Vehicles";
import Vehicle from "./routes/vehicle/Vehicle";

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
      <Route path="/fahrzeuge" >
        <Route index element={<Vehicles />} />
        <Route path=":car" element={<Vehicle />}/>
      </Route>
    </Routes>
  )
}

export default App
