import Header from "../Headers/Header";
import Decoration from '../Decoration/Decoration';
import Error404 from "../Error404/Error404";

function NotFound() {
    return (
        <>
            <Header title={'404 Page Not Found'} img={'../img/not-found.png'}/>
            <Decoration />
            <Error404 />
        </>
    );
}

export default NotFound;