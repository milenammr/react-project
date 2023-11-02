import { useState } from 'react'
import Spinner from './components/Spinner/Spinner'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import CategoryList from './components/CategoryList/CategoryList'
import About from './components/About/About'
import CallToAction from './components/CallToAction/CallToAction'
import PropertiesContainer from './components/Properties/PropertiesContainer'
import PropertyAgentsContainer from './components/PropertyAgents/PropertyAgentsContainer'
import TestimonialContainer from './components/Testimonial/TestimonialContainer'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div className="container-xxl bg-white p-0">
            {/* <Spinner /> */}
            <Navbar />
            <Header />
            <Search />
            <CategoryList />
            <About />
            <CallToAction />
            <PropertiesContainer />
            <PropertyAgentsContainer />
            <TestimonialContainer />
            <Footer />
        </div>
    )
}

export default App;
