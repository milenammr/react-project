import { useState } from "react"
import * as service from "../../services/propertiesService"
import PropertyItem from "./PropertyItem"
import ConfirmDeleteModal from "../Modals/ConfirmDeleteModal"
import 'react-toastify/dist/ReactToastify.css'

// eslint-disable-next-line react/prop-types
export default function PropertiesContainer({allProperties = []}) {
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // for delete modal

    const setPropertyID = (id) => {
        setSelectedProperty(id);
        setShowDeleteModal(true);
    }

    const deleteProperty = async () => {
        const deletedProperty = await service.remove(selectedProperty);
   
        setShowDeleteModal(false);
        console.log(deletedProperty.title);
        
    };

    const forSell = allProperties.filter(property => property.tag == "For Sell");
    const forRent = allProperties.filter(property => property.tag == "For Rent");
    
    return (
        <div className="container-xxl py-5">
            {showDeleteModal && (<ConfirmDeleteModal onDelete={deleteProperty} onClose={() => setShowDeleteModal(false)}/>)}
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Properties Listing</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">All</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                            </li>
                            <li className="nav-item me-0">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            {allProperties.map((property, index) => (
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
                                setID={setPropertyID}
                                showFavorites={true}/>
                            ))
                            }
                        </div>
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            {forSell.map((property, index) => (
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
                                setID={setPropertyID}
                                showFavorites={true}/>
                            ))
                            }
                        </div>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            {forRent.map((property, index) => (
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
                                setID={setPropertyID}
                                showFavorites={true}/>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
