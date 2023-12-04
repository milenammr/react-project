import { useEffect, useState } from "react";
import * as service from "../../services/service";
import { useParams } from "react-router-dom";
import Header from "../Headers/Header";
import Search from '../Search/Search';

function PropertyTypes() {
    const { type } = useParams();
    const [properties, setProperties] = useState({});

    useEffect(() => {
        service.getAllProperties()
        .then(setProperties)
    }, [type]);
    
    return (
        <div>
            {properties}
        </div>
    )
}

export default PropertyTypes