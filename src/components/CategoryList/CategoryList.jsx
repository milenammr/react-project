import Category from "./Category";

export default function CategoryList() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-3">Property Types</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <Category img={'img/icon-apartment.png'} type={'Apartment'} number={123} delay={'0.1'}/>
                    <Category img={'img/icon-villa.png'} type={'Villa'} number={45} delay={'0.3'}/>
                    <Category img={'img/icon-house.png'} type={'Home'} number={78} delay={'0.5'}/>
                    <Category img={'img/icon-housing.png'} type={'Office'} number={345} delay={'0.7'}/>
                    <Category img={'img/icon-building.png'} type={'Building'} number={34} delay={'0.1'}/>
                    <Category img={'img/icon-neighborhood.png'} type={'Townhouse'} number={233} delay={'0.3'}/>
                    <Category img={'img/icon-condominium.png'} type={'Shop'} number={112} delay={'0.5'}/>
                    <Category img={'img/icon-luxury.png'} type={'Garage'} number={68} delay={'0.7'}/>

                </div>
            </div>
        </div>
    );
};