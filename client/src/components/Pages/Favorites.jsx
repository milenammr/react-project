import { useContext } from "react"
import { useEffect, useState } from "react";
import AuthContext from "../../contexts/authContext";
import Header from "../Headers/Header";
import Spinner from "../Spinner/Spinner";
import PropertyItem from "../Properties/PropertyItem";
import * as propertiesService from "../../services/propertiesService";
import * as likeService from "../../services/likeService";

function Favourites() {
    const [properties, setProperties] = useState([]);
    const { userId, username } = useContext(AuthContext);
    const [isLoading, setLoading] = useState(false); // for spinner

    useEffect(() => {
        setLoading(true);
        propertiesService.getAll()
            .then(allProperties => {
                likeService.getAll(userId)
                    .then(favorites => {
                        const favourites = allProperties.filter(property => {
                            return favorites.find(like => like.propertyId ===  property._id);
                        })
                        console.log(favourites);
                        setProperties(favourites);
                    })
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, []);

    const setPropertyID = (id) => {

        setProperties((prevProperties) =>
          prevProperties.filter((property) => property._id !== id)
        );
    }

    return (
        <>
            <Header title={'Favourites'} img={'../img/property_list.png'}/>
            <div className="container-fluid bg-primary mb-5 p-4 wow fadeIn" data-wow-delay="0.1s">
            </div>
            {isLoading && (<Spinner />)}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        {properties.length == 0 ? 
                        (<p className="d-flex justify-content-center"><span className="fw-bold">{username}</span>, you do not have any favourite properties yet.</p>) : 
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
                            showFavorites={true}
                            />
                            )))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Favourites;