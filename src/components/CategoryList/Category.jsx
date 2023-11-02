
export default function Category(props) {

    return (
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={props.delay + "s"}>
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                <div className="rounded p-4">
                    <div className="icon mb-3">
                        <img className="img-fluid" src={props.img} alt="Icon"/>
                    </div>
                    <h6>{props.type}</h6>
                    <span>{props.number} Properties</span>
                </div>
            </a>
        </div>
    );
};