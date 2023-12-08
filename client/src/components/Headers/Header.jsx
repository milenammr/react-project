// eslint-disable-next-line react/prop-types
function Header({title, img, address='', tag=''}) {
    return (
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">{title}</h1> 
                    {address && <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{address}</p>}
                    {tag && <div className="bg-primary rounded text-white mb-5 py-1 px-3">{tag}</div>}
                </div>
                <div className="col-md-6 animated fadeIn">
                    <img className="img-fluid" src={img} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Header;