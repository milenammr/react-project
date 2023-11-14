import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestimonialItem from "./TestimonialItem";

function TestimonialContainer() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 className="mb-3">Our Clients Say!</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <OwlCarousel className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s" autoplay={true} smartSpeed={1000} margin={24} dots={false} loop={true} nav={true} 
                    navText={['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>']} 
                    responsive={{
                        0:{
                            items:1
                        },
                        992:{
                            items:2
                        }
                    }}>
                    <TestimonialItem img={'img/testimonial-1.jpg'} name={'Some Name'} occupation={'Accountant'}/>
                    <TestimonialItem img={'img/testimonial-2.jpg'} name={'Some Name'} occupation={'Accountant'}/>
                    <TestimonialItem img={'img/testimonial-3.jpg'} name={'Some Name'} occupation={'Accountant'}/>
                    <TestimonialItem img={'img/testimonial-4.jpg'} name={'Some Name'} occupation={'Accountant'}/>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default TestimonialContainer;