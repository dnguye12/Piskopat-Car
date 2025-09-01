import { Link, Route, Routes, useLocation } from "react-router"
import Contact from "./routes/contact/Contact"
import AOS from 'aos';
import './aos.css';
import { useEffect, useState } from "react";
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
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import Coupon from "./routes/coupon/Coupon";

function App() {
  const location = useLocation()
  const [open, setOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false
    }
    return localStorage.getItem("COOKIE_CONSENT") !== "true"
  })

  useEffect(() => {
    AOS.init()
  }, [])

  const handleClose = () => {
    setOpen(false)
    try {
      localStorage.setItem("COOKIE_CONSENT", "true")
    } catch {
      console.log("")
    }
  }

  const hideDialog =
    location.pathname === "/impressum" || location.pathname === "/datenschutz"

  return (
    <div className="relative w-full h-full">
      <div className={cn(
        "fixed sm:right-6 right-0 bottom-0 sm:bottom-6 container sm:max-w-lg rounded-lg border bg-accent p-8 z-50 flex flex-col items-center justify-center gap-0 shadow",
        (hideDialog || !open) && "hidden!"
      )}>
        <p className="text-sm text-muted-foreground mb-4">Wir verwenden Cookies und ähnliche Technologien
          Funktionen unserer Webseite zu verbessern und die Nutzung zu analysieren. Indem Sie auf „Akzeptieren“ klicken, stimmen Sie der Platzierung und
          anschließenden Verwendung von Cookies und ähnlichen Technologien zu. Weitere Informationen finden Sie
          im <Link to="/datenschutz" className="text-main underline">Datenschutzhinweis</Link> sowie im <Link to={"/impressum"} className="text-main underline">Impressum</Link>.</p>
        <div className="grid grid-cols-2 w-full gap-4">
          <Button onClick={handleClose} variant={"main"} size={"lg"} className=" w-full">Akzeptieren</Button>
          <Button onClick={handleClose} variant={"outline"} size={"lg"} className=" w-full">Ablehnen</Button>
        </div>
      </div>
      <Dialog open={false}>
        <DialogContent>
          <DialogContent className="p-8 flex flex-col items-center justify-center bg-background gap-0">
            <div className="inline-flex items-center gap-x-2">
              <img src="/logo-black.svg" alt="" className="block dark:hidden h-14 w-auto fill-black" />
              <img src="/logo-dark-no-text.svg" alt="" className="hidden dark:block h-14 w-auto" />
              <span className="text-xl font-semibold dark:text-main">X-Sportwagen</span>
            </div>
            <p className="text-muted-foreground mt-8 mb-10">Wir verwenden Cookies und ähnliche Technologien für das beste Erlebnis auf unserer Webseite,
              um Ihnen personalisierte Inhalte und Werbung anzuzeigen, Funktionen unserer Webseite zu verbessern
              und die Nutzung zu analysieren. Indem Sie auf „Akzeptieren“ klicken, stimmen Sie der Platzierung und
              anschließenden Verwendung von Cookies und ähnlichen Technologien zu, wie in unserem Cookie-Hinweis und
              Allgemeinen Datenschutzhinweis beschrieben. Weitere Informationen finden Sie
              im <Link to="/datenschutz" className="text-main underline">Datenschutzhinweis</Link> sowie im <Link to={"/impressum"} className="text-main underline">Impressum</Link>.</p>
            <div className="flex flex-col w-full gap-y-4">
              <Button onClick={handleClose} variant={"main"} size={"lg"} className="w-full">Alle akzeptieren</Button>
              <Button onClick={handleClose} variant={"main"} size={"lg"} className="w-full">Nur notwendige akzeptieren</Button>
              <Button onClick={handleClose} variant={"outline"} size={"lg"} className="w-full">Alle ablehnen</Button>
            </div>
          </DialogContent>
        </DialogContent>
      </Dialog>
      <Routes>
        <Route index element={<Test />} />
        <Route path="/gutschein" element={<Coupon />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/fahrzeuge" >
          <Route index element={<Vehicles />} />
          <Route path=":car" element={<Vehicle />} />
        </Route>
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/hochzeitsmiete" element={<Wedding />} />
        <Route path="/sportwagen-mieten" element={<SportRent />} />
        <Route path="/sportwagen-mieten-nrw" element={<SportRentNRW />} />
        <Route path="/sportwagenvermietung" element={<Sportwagenvermietung />} />
        <Route path="/sportwagen-mieten-ennigerloh" element={<SportRentEnnigerloh />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  )
}

export default App
