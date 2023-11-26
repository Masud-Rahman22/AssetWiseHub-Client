import { useContext } from "react";
import { infoContext } from "../Main Layout/Main";


const useInfo = () => {
    const info = useContext(infoContext)
    return info
};

export default useInfo;