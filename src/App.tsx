import { Route, Routes } from "react-router"
import HomePage from "./routes/home/Home"
import Contact from "./routes/contact/Contact"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600
    })
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/kontakt" element={<Contact />} />
    </Routes>
  )
}

export default App
