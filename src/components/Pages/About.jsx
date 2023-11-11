import Header from "../Headers/Header";
import Search from '../Search/Search'
import AboutUs from "../About/AboutUs";
import PropertyAgentsContainer from '../PropertyAgents/PropertyAgentsContainer';

function About() {
  return (
    <>
        <Header title={'About Us'}/>
        <Search />
        <AboutUs />
        <PropertyAgentsContainer />
    </>
  );
}

export default About;