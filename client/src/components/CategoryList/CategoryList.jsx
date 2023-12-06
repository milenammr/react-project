import {useEffect, useState} from "react";
import * as service from "../../services/propertiesService";
import Category from "./Category";

export default function CategoryList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        service.getAll()
            .then(result => setProperties(result))
            .catch(err => console.error(err))
    }, []);

    const categoryList = ['Apartment', 'Villa', 'Home', 'Office', 'Building', 'Townhouse', 'Shop', 'Garage'];

    function getNumberOfKind(category) {
        return properties.filter(property => property.kind === category).length;
    }

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-3">Property Types</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    {categoryList.map((category, index) => (
                    <Category 
                    key={category} 
                    img={`img/icon-${category}.png`} 
                    type={category} 
                    number={getNumberOfKind(category)} 
                    delay={(index * 0.2 + 0.1).toFixed(1)}
                    />))
                    }
                </div>
            </div>
        </div>
    );
}