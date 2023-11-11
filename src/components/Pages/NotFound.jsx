import Header from "../Headers/Header";
import Search from '../Search/Search';
import Error404 from "../Error404/Error404";

function NotFound() {
    return (
        <>
            <Header title={'404 Page Not Found'}/>
            <Search />
            <Error404 />
        </>
    );
}

export default NotFound;