import { useEffect, useState } from "react";
import * as service from "../../services/propertiesService";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner"
import Header from "../Headers/Header";
import PropertyItem from "../Properties/PropertyItem";

function PropertyCategoryTypes() {
    const { type } = useParams();
    const [properties, setProperties] = useState([]);
    const [isLoading, setLoading] = useState(false); // for spinner

    useEffect(() => {
        setLoading(true)
        service.getByCategory(type)
        .then(result => setProperties(result))
        .finally(() => setLoading(false))
    }, []);
    
    return (
        <>
            <Header title={`${type}s`} img={'../../img/property_list.png'}/>
            <div className="container-fluid bg-primary mb-5 p-4 wow fadeIn" data-wow-delay="0.1s">
            </div>
            {isLoading && (<Spinner />)}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        {properties.length == 0 ? 
                        (<p className="d-flex justify-content-center">There are not any properties of this type yet.</p>) : 
                        (properties.map((property, index) => (
                            <PropertyItem
                            key={property._id}
                            id={property._id}
                            delay={(index * 0.2 + 0.1).toFixed(1)} 
                            imgUrl={property.imgUrl} 
                            tag={property.tag} 
                            kind={property.kind} 
                            price={property.price} 
                            title={property.title} 
                            address={property.address} 
                            dimension={property.dimension} 
                            beds={property.beds} 
                            bath={property.bath} 
                            modify={true}
                            />
                            )))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyCategoryTypes;