import Header from "../Headers/Header";
import Search from '../Search/Search';
import PropertiesContainer from "../Properties/PropertiesContainer";

function PropertyList() {
    return (
        <>
            <Header title={'Property List'} img={'../img/property_list.png'}/>
            <Search />
            <PropertiesContainer />
        </>
    )
}

export default PropertyList;
