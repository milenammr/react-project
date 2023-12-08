import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import PropertyList from './components/Pages/PropertyList';
import Contact from './components/Pages/Contact';
import Footer from './components/Footer/Footer';
import PropertyDetails from './components/Pages/PropertyDetails';
import MyProperties from './components/Pages/MyProperties';
import Favorites from './components/Pages/Favorites';
import PropertyCategoryTypes from './components/Pages/PropertyCategoryTypes';
import SignIn from './components/Pages/SignIn';
import SignUp from './components/Pages/SignUp';
import SignOut from './components/Pages/SignOut';
import NotFound from './components/Pages/NotFound';
import Path from './paths';
import AuthGuard from './guard/AuthGuard';

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
                    <Route path={Path.Category} element={<PropertyCategoryTypes />} />
                    <Route path={Path.Contacts} element={<Contact />} />
                    <Route path={Path.SignIn} element={<SignIn />} />
                    <Route path={Path.SignUp} element={<SignUp />} />
                    
                    <Route path='*' element={<NotFound />} />
                    <Route element={<AuthGuard />}>
                        <Route path={Path.SignOut} element={<SignOut />} />
                        <Route path={Path.Favorites} element={<Favorites />} />
                        <Route path={Path.MyProperties} element={<MyProperties />} />
                    </Route>
                </Routes >
                
                <Footer />
            </div>
        </AuthProvider>
    )
}

export default App;
