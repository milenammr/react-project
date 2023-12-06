import { useEffect, useState } from "react";
import * as service from "../../services/propertiesService";
import PropertyItem from "../Properties/PropertyItem";

function LatestProperties() {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        service.getLatest()
            .then(result => setLatest(result))
            .catch(err => console.error(err))
    }, []);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-3">Newest Properties</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    {latest.map((property, index) => (
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
                        />
                    ))
                    }
                </div>
            </div>
        </div>

    )
}

export default LatestProperties;