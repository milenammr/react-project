import Header from "../Headers/Header";
import Search from '../Search/Search';
import ContactUs from "../ContactUs/ContactUs";

function Contact() {
    return (
        <>
            <Header title={'Contact Us'} img={'../img/contact_us.png'}/>
            <Search />
            <ContactUs />
        </>
    );
}

export default Contact;