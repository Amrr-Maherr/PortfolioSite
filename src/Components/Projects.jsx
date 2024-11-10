import Egy from "../Egy.png";  
import Furny from "../Furny.png";  
import Joy from "../Joy.png";  
import ToDo from "../ToDo.png";  
import Food from "../Food.png";  
import Commerc from "../Commerc.png";


function Projects() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-3 col-12 my-4">
    <a href="https://amrr-maherr.github.io/TourEg/">
        <div className="card text-bg-dark">
            <img src={Egy} className="card-img" alt="Project Image" />
            <div className="card-img-overlay">
                <h5 className="card-title">TourEg</h5>
                <p className="card-text">
                    TourEg is a CSS project using the `float` property to organize Egyptian artifacts.
                </p>
                <p className="card-text icons">
                    <i className="fab fa-html5 html-icon"></i>
                    <i className="fab fa-css3-alt css-icon"></i>
                    <i className="fab fa-js-square js-icon"></i>
                    <i className="fab fa-bootstrap bootstrap-icon"></i>
                </p>
            </div>
        </div>
    </a>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-12 my-4">
    <a href="https://amrr-maherr.github.io/Furnify/">
        <div className="card text-bg-dark">
            <img src={Furny} className="card-img" alt="Project Image" />
            <div className="card-img-overlay">
                <h5 className="card-title">Furnify</h5>
                <p className="card-text">This project focused on using Flexbox, CSS Grid, and media queries to create responsive, flexible layouts.</p>
                <p className="card-text icons">
                    <i className="fab fa-html5 html-icon"></i>
                    <i className="fab fa-css3-alt css-icon"></i>
                    <i className="fab fa-js-square js-icon"></i>
                    <i className="fab fa-bootstrap bootstrap-icon"></i>
                </p>
            </div>
        </div>
    </a>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-12 my-4">
    <a href="https://amrr-maherr.github.io/FoodJoy/">
        <div className="card text-bg-dark">
            <img src={Joy} className="card-img" alt="Project Image" />
            <div className="card-img-overlay">
                <h5 className="card-title">FoodJoy</h5>
                <p className="card-text">This project utilized Bootstrap's Grid System to create a responsive layout for the menu and reservation form.</p>
                <p className="card-text icons">
                    <i className="fab fa-html5 html-icon"></i>
                    <i className="fab fa-css3-alt css-icon"></i>
                    <i className="fab fa-js-square js-icon"></i>
                    <i className="fab fa-bootstrap bootstrap-icon"></i>
                </p>
            </div>
        </div>
    </a>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-12 my-4">
    <a href="https://amrr-maherr.github.io/Dish-Discovery/">
        <div className="card text-bg-dark">
            <img src={Food} className="card-img" alt="Project Image" />
            <div className="card-img-overlay">
                <h5 className="card-title">Dish Discovery</h5>
                <p className="card-text">A web app to explore and manage recipes using CRUD operations and APIs from dummyjson.com.</p>
                <p className="card-text icons">
                    <i className="fab fa-html5 html-icon"></i>
                    <i className="fab fa-css3-alt css-icon"></i>
                    <i className="fab fa-js-square js-icon"></i>
                </p>
            </div>
        </div>
    </a>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-12 my-4">
    <a href="https://amrr-maherr.github.io/To-Dos/">
        <div className="card text-bg-dark">
            <img src={ToDo} className="card-img" alt="Project Image" />
            <div className="card-img-overlay">
                <h5 className="card-title">To-Dos</h5>
                <p className="card-text">A task management app for adding, deleting, and reordering tasks. Features include task completion, deletion, and drag-and-drop reordering.</p>
                <p className="card-text icons">
                    <i className="fab fa-html5 html-icon"></i>
                    <i className="fab fa-css3-alt css-icon"></i>
                    <i className="fab fa-js-square js-icon"></i>
                    <i className="fab fa-bootstrap bootstrap-icon"></i>
                </p>
            </div>
        </div>
    </a>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-12 my-4">
    <a href="/">
        <div className="card text-bg-dark">
            <img src={Commerc} className="card-img" alt="Project Image" />
            <div className="card-img-overlay">
                <h5 className="card-title">Commerce Corner</h5>
                <p className="card-text">A web app offering an enhanced shopping experience with responsive design, dynamic product display, shopping cart functionality, and secure payment options.</p>
                <p className="card-text icons">
                    <i className="fab fa-html5 html-icon"></i>
                    <i className="fab fa-css3-alt css-icon"></i>
                    <i className="fab fa-js-square js-icon"></i>
                    <i className="fab fa-bootstrap bootstrap-icon"></i>
                </p>
            </div>
        </div>
    </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
