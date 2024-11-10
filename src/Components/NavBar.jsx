import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><i className="fa-solid fa-code"></i></a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active hover" aria-current="page" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active hover" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active hover" href="#Projects">
            Projects
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a
            className="nav-link active d-flex align-items-center hover"
            aria-current="page"
            href="https://www.linkedin.com/in/amrr-maherr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in me-2"></i> LinkedIn
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active d-flex align-items-center hover"
            href="https://github.com/Amrr-Maherr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github me-2"></i> GitHub
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="btn text-white btn-outline-dark" role="button" data-bs-toggle="button">Let's Contact</a>
        </li>
      </ul>
    </div>
  </div>
      </nav>
  );
}

export default Navbar;
