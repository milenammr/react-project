import Header from "../Headers/Header";
import Decoration from "../Decoration/Decoration";
import ContactUs from "../ContactUs/ContactUs";

function Contact() {
    return (
        <>
            <Header title={'Contact Us'} img={'../img/contact_us.png'}/>
            <Decoration />
            <ContactUs />
        </>
    );
}

export default Contact;