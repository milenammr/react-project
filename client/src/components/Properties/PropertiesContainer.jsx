import { useEffect, useState } from "react"
import * as service from "../../services/service"
import PropertyItem from "./PropertyItem"
import Spinner from "../Spinner/Spinner"
import ConfirmDeleteModal from "../Modals/ConfirmDeleteModal"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function PropertiesContainer() {
    const [properties, setProperties] = useState([]); 
    const [isLoading, setLoading] = useState(false); // for spinner
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // for delete modal

    // const [startIndex, setStartIndex] = useState(0);
    // const itemsPerPage = 6;
    // const currentData = properties.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        setLoading(true)
        service.getAllProperties()
            .then(result => setProperties(result))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, []);

    // const handleNextClick = () => {
    //     setStartIndex(startIndex + itemsPerPage);
    // };

    const setPropertyID = (id) => {
        setSelectedProperty(id);
        setShowDeleteModal(true);
    }
    const notify = () => toast("Wow so easy !");
    const deleteProperty = async () => {
        const deletedProperty = await service.deleteProperty(selectedProperty);
        setProperties(properties.filter(property => property.id !== selectedProperty));
        setShowDeleteModal(false);
        console.log(deletedProperty.title);
        notify(); //TODO: show this message in a toast
        // return <p>You are successfully deleted ${deletedProperty.title}</p> //TODO: show this message in a modal
    };

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
                            {/* <li className="nav-item me-0">
                                <a className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#AddPropertyModal">Add New Property</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    {isLoading && (<Spinner />)}
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            {properties.map((property, index) => (
                                <PropertyItem
                                key={property.id}
                                id={property.id}
                                delay={(index * 0.2 + 0.1).toFixed(1)} 
                                img={property.img} 
                                tag={property.tag} 
                                kind={property.kind} 
                                price={property.price} 
                                title={property.title} 
                                address={property.address} 
                                dimension={property.dimension} 
                                beds={property.beds} 
                                bath={property.bath} 
                                setID={setPropertyID}/>
                            ))
                            }
                            {/* <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                <button className="btn btn-primary py-3 px-5" onClick={handleNextClick}>Browse More Properties</button>
                            </div> */}
                        </div>
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            {/* {properties.filter(property => property.tag === 'For Sale').map( property => (
                                <PropertyItem
                                key={property.id}
                                delay={property.delay} 
                                img={property.img} 
                                tag={property.tag} 
                                kind={property.kind} 
                                price={property.price} 
                                title={property.title} 
                                address={property.address} 
                                dimension={property.dimension} 
                                beds={property.beds} 
                                bath={property.bath} />
                            ))} */}
                            <div className="col-12 text-center">
                                <a className="btn btn-primary py-3 px-5" href="">Browse More Properties</a>
                            </div>
                        </div>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="row g-4">
                        {/* {properties.filter(property => property.tag === 'For Rent').map( property => (
                                <PropertyItem
                                key={property.id}
                                delay={property.delay} 
                                img={property.img} 
                                tag={property.tag} 
                                kind={property.kind} 
                                price={property.price} 
                                title={property.title} 
                                address={property.address} 
                                dimension={property.dimension} 
                                beds={property.beds} 
                                bath={property.bath} />
                            ))} */}
                            <div className="col-12 text-center">
                                <a className="btn btn-primary py-3 px-5" href="">Browse More Properties</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
