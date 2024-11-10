import { Link, Outlet } from "react-router-dom";

function NavigationButtons() {
    return (
        <div className="container text-center" id="Projects">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <Link type="button" to="projects" className="btn btn-outline-primary btn-lg fs-3 fw-bold text-white border-white">Projects</Link>
                <Link type="button" to="/" className="btn btn-outline-primary btn-lg fs-3 fw-bold text-white border-white">Contact</Link>
                <Link type="button" to="info" className="btn btn-outline-primary btn-lg fs-3 fw-bold text-white border-white">Info</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default NavigationButtons;
