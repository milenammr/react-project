import { useEffect, useState } from "react";
import * as service from "../../services/propertiesService";
import Header from "../Headers/Header";
import Search from '../Search/Search';
import PropertiesContainer from "../Properties/PropertiesContainer";

function PropertyList() {
    const [allProperties, setAllProperties] = useState([]);

    useEffect(() => {
        service.getAll()
            .then(result => setAllProperties(result))
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            <Header title={'Property List'} img={'../img/property_list.png'}/>
            <Search />
            <PropertiesContainer allProperties={allProperties} />
        </>
    )
}

export default PropertyList;
