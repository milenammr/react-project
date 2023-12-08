import Header from "../Headers/Header";
import Decoration from "../Decoration/Decoration";
import AboutUs from "../About/AboutUs";
import PropertyAgentsContainer from '../PropertyAgents/PropertyAgentsContainer';

function About() {
  return (
    <>
        <Header title={'About Us'} img={'../img/about_us.png'}/>
        <Decoration />
        <AboutUs />
        <PropertyAgentsContainer />
    </>
  );
}

export default About;