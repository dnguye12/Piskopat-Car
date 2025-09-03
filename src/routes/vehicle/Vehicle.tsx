import { Navigate, useParams } from "react-router";
import VM_Golf_8 from "./components/vm_golf_8";
import { useEffect } from "react";

const Vehicle = () => {
    const { car } = useParams()
    useEffect(() => {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => window.scrollTo(0, 0))
  );
}, []);

    if (car === "vw_golf_8") {
        return (
            <VM_Golf_8 />
        )
    } else {
        return <Navigate to="/" replace />
    }
}

export default Vehicle;