import { Route, Routes } from "react-router"
import Contact from "./routes/contact/Contact"
import AOS from 'aos';
import './aos.css';
import { useEffect } from "react";
import Vehicles from "./routes/vehicles/Vehicles";
import Vehicle from "./routes/vehicle/Vehicle";
import Impressum from "./routes/impressum/Impressum";
import Datenschutz from "./routes/datenschutz/Datenschutz";
import Wedding from "./routes/wedding/Wedding";
import Test from "./routes/home/Home";
import FAQ from "./routes/faq-page/FAQ";
import SportRentNRW from "./routes/sport-rent/SportRentNRW";
import Sportwagenvermietung from "./routes/sport-rent/Sportwagenvermietung";
import SportRentEnnigerloh from "./routes/sport-rent/SportRentEnnigerloh";
import SportRent from "./routes/sport-rent/SportRent";

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Routes>
      <Route index element={<Test />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/fahrzeuge" >
        <Route index element={<Vehicles />} />
        <Route path=":car" element={<Vehicle />} />
      </Route>
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/hochzeitsmiete" element={<Wedding />} />
      <Route path="/sportwagen-mieten" element={<SportRent />}/>
      <Route path="/sportwagen-mieten-nrw" element={<SportRentNRW />}/>
      <Route path="/sportwagenvermietung" element={<Sportwagenvermietung />}/>
      <Route path="/sportwagen-mieten-ennigerloh" element={<SportRentEnnigerloh />}/>
      <Route path="/faq" element={<FAQ />}/>
    </Routes>
  )
}

export default App
