import 'font-awesome/css/font-awesome.min.css';
function Footer() {
    return (
        <footer className="text-white text-center p-4 mt-5">
            <div className="container">
                <p className="mb-2">© 2024 Amr Maher Ali. All rights reserved.</p>
                <p className="mb-2">Front-End Developer | React Enthusiast</p>
                <div className="d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/Amrr-Maherr" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin fs-4"></i>
                    </a>
                    <a href="https://twitter.com/3mrr__maherr" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-twitter fs-4"></i>
                    </a>
                    <a href="https://github.com/amrr-maherr" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github fs-4"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
