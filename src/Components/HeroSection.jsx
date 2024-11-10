import HeroText from "./HeroText"
import { useEffect } from 'react';
import React from 'react';
import ScrollReveal from 'scrollreveal';
import HeroImage from "./HeroImg";
function HeroSection() {
     useEffect(() => {
    ScrollReveal().reveal('.HeroSection', {
      distance: '50px',
      duration: 1000,
      delay: 200,
      opacity: 0,
      scale: 0.85,
        easing: 'ease-in-out',
      reset: true,
    });
  }, []);
    return <section className="HeroSection container" id="home">
        <div className="row">
            <div className="col-xl-6 col-12 d-flex align-items-center justify-content-center vh-100">
                <HeroText greetingMessage ="Welcome to My Portfolio" myName='Hi I Am Amr Maher Ali' description='Explore my work and the skills Ive gained as a front-end developer.' />
            </div>
            <div className="col-xl-6 col-12 d-flex align-items-center justify-content-center vh-100">
                <HeroImage />
            </div>
        </div>
    </section>
}
export default HeroSection