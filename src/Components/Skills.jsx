import React from 'react';
function Skills() {
    return (
      <section className="skills-carousel d-flex justify-content-center align-items-center Skills  flex-column vh-100" id="skills">
        <div className="container">
            <div className='my-5 text-center my-5'>
          <h2 className='SkillsTitle display-4 fw-bold text-light'>Web Development Skills</h2>
          </div>
<div id="skillsCarousel" className="carousel slide w-100 mt-4" data-bs-ride="carousel">
  <div className="carousel-inner text-center">
    <div className="carousel-item active">
      <h3><i className="fa-brands fa-html5" style={{ color: '#E34F26' }}></i> HTML</h3>
      <p>Structuring web content.</p>
    </div>
    <div className="carousel-item">
      <h3><i className="fa-brands fa-css3-alt" style={{ color: '#1572B6' }}></i> CSS</h3>
      <p>Styling web interfaces.</p>
    </div>
    <div className="carousel-item">
      <h3><i className="fa-brands fa-js-square" style={{ color: '#F7DF1E' }}></i> JavaScript</h3>
      <p>Adding interactivity.</p>
    </div>
    <div className="carousel-item">
      <h3><i className="fa-brands fa-react" style={{ color: '#61DAFB' }}></i> React</h3>
      <p>Building UIs with React.</p>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#skillsCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#skillsCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
</section>

    )
}
export default Skills