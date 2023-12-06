import { useContext } from "react"
import { useEffect, useState } from "react";
import Header from "../Headers/Header";
import Spinner from "../Spinner/Spinner"
// import Search from '../Search/Search';
// import PropertiesContainer from "../Properties/PropertiesContainer";
import CreatePropertyModal from "../Modals/CreatePropertyModal";
import EditPropertyModal from "../Modals/EditPropertyModal";
import ConfirmDeleteModal from "../Modals/ConfirmDeleteModal"
import PropertyItem from "../Properties/PropertyItem";
import * as service from "../../services/propertiesService";
import AuthContext from "../../contexts/authContext";

function MyProperties() {
    const [properties, setProperties] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { userId, username } = useContext(AuthContext);
    const [isLoading, setLoading] = useState(false); // for spinner

    useEffect(() => {
        setLoading(true)
        service.getAllPersonal(userId)
            .then(result => setProperties(result))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, []);

    const setPropertyID = (id, type) => {
        setSelectedProperty(id);
        switch(type){
            case 'edit': setShowEditModal(true);
                break;
            case 'delete': setShowDeleteModal(true);
                break;
        }
    }

    const deleteProperty = async () => {
        await service.remove(selectedProperty);
        let newProperties = JSON.parse(JSON.stringify(properties));
        setShowDeleteModal(false);
        setProperties(newProperties.filter(property => property._id !== selectedProperty));
    };

    const addProperty = (data) => {
        setShowAddModal(false);
        setProperties([...properties, data]);
    };

    const editProperty = (data) => {
        let newProperties = properties.map(property => property._id === data._id ? data : property);
        setShowAddModal(false);
        setProperties([...newProperties]);
    };

    return (
        <>
            <Header title={'My Properties'} img={'../img/property_list.png'}/>
            <div className="container-fluid bg-primary mb-5 p-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-2 offset-10">
                            <button onClick={() => setShowAddModal(true)} className="btn btn-dark border-0 w-100 py-3">Add New Property</button>
                        </div>
                    </div>
                </div>
            </div>

            {showAddModal && (<CreatePropertyModal onCreate={addProperty} onClose={() => setShowAddModal(false)}/>)}
            {showEditModal && (<EditPropertyModal id={selectedProperty} onEdit={editProperty} onClose={() => setShowEditModal(false)}/>)}
            {showDeleteModal && (<ConfirmDeleteModal onDelete={deleteProperty} onClose={() => setShowDeleteModal(false)}/>)}
            {isLoading && (<Spinner />)}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        {properties.length == 0 ? 
                        (<p className="d-flex justify-content-center"><span className="fw-bold">{username}</span>, you do not have any properties yet.</p>) : 
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
                            setID={setPropertyID}
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

export default MyProperties;