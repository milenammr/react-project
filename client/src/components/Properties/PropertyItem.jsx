import { useContext } from 'react';
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import Path from '../../paths';
import style from "./PropertyItem.module.css";
// eslint-disable-next-line react/prop-types
function PropertyItem({id, delay, imgUrl, tag, kind, price, title, address, dimension, beds, bath, setID, modify = false,}) {

    const {isAuthenticated} = useContext(AuthContext); // TODO: no needed

    const callDeleteModal = (propertyId) => {
        setID(propertyId);
    };

    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={delay + 's'}>
            <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                    <Link to={`${Path.PropertyList}/${id}`}><img className="img-fluid" src={imgUrl} alt="Image property"/></Link>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{tag}</div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{kind}</div>
                    
                </div>
                <div className="p-4 pb-0">
                    <div className="d-flex justify-content-between">
                        <h5 className="text-primary mb-3">${price}</h5>
                        {modify && isAuthenticated && (<div>
                            <div className={`${style['btn-edit-hover']} ${style['btn-edit']} btn btn-icon btn-sm`}>
                                <i className="bi bi-pencil"></i>
                            </div>
                            <div className={`${style['btn-delete-hover']} ${style['btn-delete']} btn btn-icon btn-sm ms-2`} onClick={() => callDeleteModal(id)}>
                                <i className="bi bi-trash"></i>
                            </div>
                        </div>)}
                    </div>
                    <Link className="d-block h5 mb-2" to={`${Path.PropertyList}/${id}`}>{title}</Link>
                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{address}</p>
                </div>
                <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{dimension} Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{beds} Bed</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{bath} Bath</small>
                </div>
            </div>
        </div>
    )
}

export default PropertyItem;