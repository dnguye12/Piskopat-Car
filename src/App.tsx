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
import Test2 from "./routes/test2/Test2";

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
      <Route path="/test2" element={<Test2 />} />
    </Routes>
  )
}

export default App
