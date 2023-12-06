import {Link} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import Path from '../../paths';
import UserMenu from './UserMenu';

function Navbar() {
	const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

	return (
		<div className="container-fluid nav-bar bg-transparent">
			<nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
				<Link to={Path.Home} className="navbar-brand d-flex align-items-center text-center">
					<div className="icon p-2 me-2">
						<img className="img-fluid" src="img/icon-deal.png" alt="Icon"/>
					</div>
					<h1 className="m-0 text-primary">Real Estate Hub</h1>
				</Link>
				<button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav ms-auto">
						<Link to={Path.Home} className="nav-item nav-link active">Home</Link>
						<Link to={Path.PropertyList} className="nav-item nav-link">Property List</Link>
						<Link to={Path.About} className="nav-item nav-link">About</Link>
						<Link to={Path.Contacts} className="nav-item nav-link">Contact</Link>
					</div>
					{!isAuthenticated && (
						<Link to={Path.SignIn} className="btn btn-primary px-3 d-none d-lg-flex">Sign In</Link>
					)}
					{isAuthenticated && (
						<UserMenu name={username}/>
					)}
				</div>
			</nav>
		</div>
	);
}

export default Navbar;