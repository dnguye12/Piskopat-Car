import { Route, Routes } from "react-router"
import HomePage from "./routes/home/Home"
import Contact from "./routes/contact/Contact"
import AOS from 'aos';
import './aos.css';
import { useEffect } from "react";
import Vehicles from "./routes/vehicles/Vehicles";
import Vehicle from "./routes/vehicle/Vehicle";
import Impressum from "./routes/impressum/Impressum";
import Datenschutz from "./routes/datenschutz/Datenschutz";
import Wedding from "./routes/wedding/Wedding";
import Useless from "./routes/useless/Useless";
import Test from "./routes/test/Test";

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/fahrzeuge" >
        <Route index element={<Vehicles />} />
        <Route path=":car" element={<Vehicle />} />
      </Route>
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/hochzeitsmiete" element={<Wedding />} />
      <Route path="/sportwagen-mieten" element={<Useless />}/>
      <Route path="/test" element={<Test />}/>
    </Routes>
  )
}

export default App
