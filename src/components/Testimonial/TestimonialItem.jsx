function TestimonialItem(props) {
    return (
        <div className="testimonial-item bg-light rounded p-3">
            <div className="bg-white border rounded p-4">
                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded" src={props.img} style={{width: "45px", height: "45px"}}/>
                    <div className="ps-3">
                        <h6 className="fw-bold mb-1">{props.name}</h6>
                        <small>{props.occupation}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem;