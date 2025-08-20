import { Route, Routes } from "react-router"
import HomePage from "./routes/home/Home"
import Contact from "./routes/contact/Contact"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Vehicles from "./routes/vehicles/Vehicles";
import Vehicle from "./routes/vehicle/Vehicle";
import Impressum from "./routes/impressum/Impressum";
import Datenschutz from "./routes/datenschutz/Datenschutz";
import Wedding from "./routes/wedding/Wedding";
import Useless from "./routes/useless/Useless";

function App() {
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1279px)')

    const init = () => {
      AOS.init({
        disable: () => window.innerWidth < 1280,
        duration: 600
      })
    }

    init()

    const onChange = () => init()
    if(mq.addEventListener) {
      mq.addEventListener("change", onChange)
    }else {
      mq.addListener(onChange)
    }

    return ()  => {
      if(mq.removeEventListener) {
        mq.removeEventListener("change", onChange)
      }else {
        mq.removeListener(onChange)
      }
    }
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
    </Routes>
  )
}

export default App
