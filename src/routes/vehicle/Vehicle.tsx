import { Navigate, useParams } from "react-router";
import VM_Golf_8 from "./components/vm_golf_8";

const Vehicle = () => {
    const { car } = useParams()

    if (car === "vw_golf_8") {
        return (
            <VM_Golf_8 />
        )
    } else {
        return <Navigate to="/" replace />
    }
}

export default Vehicle;