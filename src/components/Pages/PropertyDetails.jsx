import { useEffect, useState } from "react";
import * as service from "../../services/service";
import { useParams } from "react-router-dom";
import Header from "../Headers/Header";
import Search from '../Search/Search';

function PropertyDetails() {
    const { id } = useParams();
    const [property, setProperty] = useState({});

    useEffect(() => {
        service.getProperty(id)
        .then(setProperty)
    }, [id]);

    return (
        <>  
            <Header title={property.title}/>
            <Search />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <img className="img-fluid w-100" src={property.img}/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex justify-content-between">
                                <h1 className="mb-4">{property.kind}</h1>
                                <div className="bg-primary rounded text-white mb-5 py-1 px-3">{property.tag}</div>
                            </div>
                            <h3 className="mb-4 text-primary">${property.price}</h3>
                            <p className="mb-4">{property.description}</p>
                            <h5 className="mb-4">Amenities:</h5>
                            {property.amenities && property.amenities.map((amenity, index) => (
                                <p key={index}><i className="fa fa-check text-primary me-3"></i>{amenity}</p>
                            ))}
                            
                            <div className="d-flex border-top">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{property.dimension} Sqft</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{property.beds} Bed</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{property.bath} Bath</small>
                            </div>
                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{property.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyDetails