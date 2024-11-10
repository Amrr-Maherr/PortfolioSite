import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function MyInfo() {
    return (
        <>
            <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
                <h1>Amr Maher Ali</h1>
                <p>Front-End Developer</p>
                <p>Graduated with a Bachelor's degree in Management Information Systems from M.E.T Academy.</p>
                <p>Completed a Front-End Development Diploma from SEF Academy, ranked 13th in class with a score of 96%.</p>
                <p>Skills: HTML, CSS, Bootstrap, JavaScript, React</p>

                <div className="social-icons d-flex justify-content-center mt-4">
                    <a href="https://www.linkedin.com/in/Amrr-Maherr" target="_blank" rel="noopener noreferrer" className="mx-3">
                        <i className="fa fa-linkedin" style={{ color: '#0e76a8', fontSize: '40px' }}></i>
                    </a>
                    <a href="https://github.com/amrr-maherr" target="_blank" rel="noopener noreferrer" className="mx-3">
                        <i className="fa fa-github" style={{ color: '#333', fontSize: '40px' }}></i>
                    </a>
                    <a href="https://twitter.com/3mrr__maherr" target="_blank" rel="noopener noreferrer" className="mx-3">
                        <i className="fa fa-twitter" style={{ color: '#1DA1F2', fontSize: '40px' }}></i>
                    </a>
                </div>
            </div>
        </>
    );
}

export default MyInfo;
