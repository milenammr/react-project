import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import PropertyList from './components/Pages/PropertyList';
import Contact from './components/Pages/Contact';
import Footer from './components/Footer/Footer';
import PropertyDetails from './components/Pages/PropertyDetails';
import PropertyTypes from './components/Pages/PropertyTypes';
import NotFound from './components/Pages/NotFound';
import Path from './paths';

function App() {

    return (
        <AuthProvider>
            <div className="container-xxl bg-white p-0">
                <Navbar />
                
                <Routes >
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.About} element={<About />} />
                    <Route path={Path.PropertyList} element={<PropertyList />} />
                    <Route path={Path.PropertyID} element={<PropertyDetails />} />
                    <Route path={Path.Contacts} element={<Contact />} />
                    {/* <Route path="/property-list/:type" element={<PropertyTypes />} /> */}
                    <Route path='*' element={<NotFound />} />
                </Routes >
                
                <Footer />
            </div>
        </AuthProvider>
    )
}

export default App;
