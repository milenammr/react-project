import { useContext, useEffect, useState } from 'react';
import AuthContext from "../../contexts/authContext";
import { Link, useLocation } from "react-router-dom";
import * as service from "../../services/likeService"
import Path from '../../paths';
import style from "./PropertyItem.module.css";

// eslint-disable-next-line react/prop-types
function PropertyItem({id, delay, imgUrl, tag, kind, price, title, address, dimension, beds, bath, setID, modify = false, liked = false, showFavorites = false}) {

    const {isAuthenticated, userId} = useContext(AuthContext);
    const [likes, setLikes] = useState([]);
    const location = useLocation();
    const currentPage = location.pathname;

    useEffect(() => {
        service.getLiked(id, userId)
            .then(result => {
                setLikes(result); 
                console.log(result);
            })
            .catch(err => console.error(err))
    }, []);

    likes.forEach(like => {
        if (like.like === true && like.propertyId === id){
            liked = true;
        }
    });

    const callModal = (propertyId, type) => {
        setID(propertyId, type);
    };

    const setReaction = async (propertyId, like) => {
        if (like) {
            const result = await service.create(propertyId, like);
            setLikes([...likes, result]);
        } else {
            const result = await service.getLiked(propertyId, userId);
            await service.remove(result[0]._id);

            const updatedLikes = likes.filter(item => item.propertyId !== propertyId);
            setLikes(updatedLikes);

            if (currentPage === '/favorites'){
                setID(propertyId);
            }
            
        }    
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
                        {modify && (<div>
                            <div className={`${style['btn-edit-hover']} ${style['btn-edit']} btn btn-icon btn-sm`} onClick={() => callModal(id, 'edit')}>
                                <i className="bi bi-pencil"></i>
                            </div>
                            <div className={`${style['btn-delete-hover']} ${style['btn-delete']} btn btn-icon btn-sm ms-2`} onClick={() => callModal(id, 'delete')}>
                                <i className="bi bi-trash"></i>
                            </div>
                        </div>)}
                        {isAuthenticated && showFavorites && (<div>
                            <div className={`${style['like-property-hover']} ${style['like-property']}`} onClick={() => setReaction(id, liked ? false : true)}>
                                <i className={`bi bi-heart-fill ${liked ? 'text-danger' : ''}`}></i>
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