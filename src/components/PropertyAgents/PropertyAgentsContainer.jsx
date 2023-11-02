import PropertyAgent from "./PropertyAgent";

export default function PropertyAgentsContainer() {
    return (
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 className="mb-3">Property Agents</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
                <PropertyAgent delay={'0.1'} img={'img/team-1.jpg'} name={'Some Name'}/>
                <PropertyAgent delay={'0.3'} img={'img/team-2.jpg'} name={'Some Name'}/>
                <PropertyAgent delay={'0.5'} img={'img/team-3.jpg'} name={'Some Name'}/>
                <PropertyAgent delay={'0.7'} img={'img/team-4.jpg'} name={'Some Name'}/>
            </div>
        </div>
    </div>
    )
}