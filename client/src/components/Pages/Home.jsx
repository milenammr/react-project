import HomeHeader from '../Headers/HomeHeader'
import Decoration from '../Decoration/Decoration'
import CategoryList from '../CategoryList/CategoryList'
import CallToAction from '../CallToAction/CallToAction'
import TestimonialContainer from '../Testimonial/TestimonialContainer'
import LatestProperties from '../Properties/LatestProperties'

function Home() {
    return (
        <>  
            <HomeHeader />
            <Decoration />
            <LatestProperties />
            <CategoryList />
            <CallToAction />
            <TestimonialContainer />
        </>
    );
}

export default Home;