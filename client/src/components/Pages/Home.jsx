import HomeHeader from '../Headers/HomeHeader'
import Search from '../Search/Search'
import CategoryList from '../CategoryList/CategoryList'
import CallToAction from '../CallToAction/CallToAction'
import TestimonialContainer from '../Testimonial/TestimonialContainer'
import LatestProperties from '../Properties/LatestProperties'

function Home() {
    return (
        <>  
            <HomeHeader />
            <Search />
            <LatestProperties />
            <CategoryList />
            <CallToAction />
            <TestimonialContainer />
        </>
    );
}

export default Home;