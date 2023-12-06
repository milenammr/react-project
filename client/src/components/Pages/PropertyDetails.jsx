import { useEffect, useState } from "react";
import * as service from "../../services/propertiesService";
import { useParams } from "react-router-dom";
import Header from "../Headers/Header";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function PropertyDetails() {
    const { id } = useParams();
    const [property, setProperty] = useState();

    useEffect(() => {
        service.getOne(id)
        .then(setProperty)
    }, [id]);

    if (!property) {
        return <></>;
    }
    
    console.log(property.imgUrl);
    return (
        <>  
            <Header title={property.title} img={property.imgUrl} address={property.address} tag={property.tag}/>
            <div className="container-fluid bg-primary mb-5 p-4 wow fadeIn" data-wow-delay="0.1s">
            </div>
            <div className="container-xxl">
                <div className="container">
                    <div className="row g-5 align-items-center mt-2">
                        <div className="col-lg-6 wow px-5 fadeIn" data-wow-delay="0.1s">
                            {property.images && <ImageGallery items={property.images} />}
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex justify-content-between">
                                <h1 className="mb-4">{property.kind}</h1>
                                {/* <div className="bg-primary rounded text-white mb-5 py-1 px-3">{property.tag}</div> */}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyDetails