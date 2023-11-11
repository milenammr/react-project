import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import PropertyList from './components/Pages/PropertyList';
import Contact from './components/Pages/Contact';
import Footer from './components/Footer/Footer';
import PropertyDetails from './components/Pages/PropertyDetails';
import PropertyTypes from './components/Pages/PropertyTypes';
import NotFound from './components/Pages/NotFound';

function App() {

    return (
        <div className="container-xxl bg-white p-0">
            <Navbar />
            
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/property-list" element={<PropertyList />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/property-list/:id" element={<PropertyDetails />} />
                <Route path="/property-list/:type" element={<PropertyTypes />} />
                <Route path="*" element={<NotFound />} />
            </Routes >
            
            <Footer />
        </div>
    )
}

export default App;
