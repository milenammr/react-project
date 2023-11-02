import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Header.css';


function Header() {
    return (
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
                    <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                    <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <OwlCarousel className="owl-carousel header-carousel" 
                    autoplay={true} smartSpeed={1500} items={1} dots={true} loop={true} nav={true} 
                    navText={['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>']}>
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src="img/carousel-1.jpg" alt=""/>
                        </div>
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
}

export default Header;