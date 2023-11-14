import {Link} from 'react-router-dom';

function Navbar() {
	return (
		<div className="container-fluid nav-bar bg-transparent">
			<nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
				<Link to="/" className="navbar-brand d-flex align-items-center text-center">
					<div className="icon p-2 me-2">
						<img className="img-fluid" src="img/icon-deal.png" alt="Icon"/>
					</div>
					<h1 className="m-0 text-primary">Makaan</h1>
				</Link>
				<button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav ms-auto">
						<Link to="/" className="nav-item nav-link active">Home</Link>
						<Link to="/property-list" className="nav-item nav-link">Property List</Link>
						<Link to="/about" className="nav-item nav-link">About</Link>
						{/* <div className="nav-item dropdown">
							<Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property List</a>
							<div className="dropdown-menu rounded-0 m-0">
								<Link to="property-list.html" className="dropdown-item">Property List</a>
								<Link to="property-type.html" className="dropdown-item">Property Type</a>
								<Link to="property-agent.html" className="dropdown-item">Property Agent</a>
							</div>
						</div> */}
						<Link to="/contact" className="nav-item nav-link">Contact</Link>
					</div>
					<Link to="" className="btn btn-primary px-3 d-none d-lg-flex">Log In</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;