import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './landing.css';
import { Link } from "react-router-dom";


const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

function Portfoliopage({ displayData }) {
  useEffect(() => {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      let typedStrings = typedElement.getAttribute('data-typed-items');
      typedStrings = typedStrings.split(',');

      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }, []);


  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <Link className="circle">
            <img height={128} width={128} src="../../../public/landing/profile1.jpg" alt="Cloud Chen" />
            </Link>
            <h1 className="text-light">
              <samp className='lugrasimo-regular' >K</samp>rishna s
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter">
                <img className="icons" height={20} width={20} src="../../../public/landing/twitter.png" alt="Cloud Chen" />
              </a>
              <a href="https://www.facebook.com/krishna.sabu.9699?rdid=Bv0VdT75wH60gp4U&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15E37JrwLu%2F#" className="facebook">
                <img className="icons" height={20} width={20} src="../../../public/landing/facebook.png" alt="Cloud Chen" />
              </a>
              <a href="https://www.instagram.com/krishna_s_xx_/profilecard/?igsh=cmtmaG8za2FjeWIz" className="instagram">
                <img className="icons" height={20} width={20} src="../../../public/landing/instagram.png" alt="Cloud Chen" />
              </a>
              <a href="https://www.linkedin.com/in/krishnasabu/" target="_blank" rel="noopener noreferrer" className="linkedin">
                <img className="icons" height={20} width={20} src="../../../public/landing/linkedin.png" alt="LinkedIn Profile" />
              </a>

            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <span className="material-symbols-outlined">home</span> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <span className="material-symbols-outlined">person</span> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <span className="material-symbols-outlined">description</span> <span>Resume</span>
                </a>
              </li>
              {/* <li>
                <a href="#portfolio" className="nav-link scrollto">
                <span className="material-symbols-outlined">two_pager</span> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                <span className="material-symbols-outlined">dns</span> <span>Services</span>
                </a>
              </li> */}
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <span className="material-symbols-outlined">mail</span> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </header>

      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1 className="lugrasimo-regular">Krishna s</h1>
          <p>
            I'm <span className="typed" data-typed-items="UI/UX Designer , MEARN Stack Developer" />
          </p>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Highly motivated ME(A)RN Stack Developer with hands-on experience as an intern at Synnefo Solutions. Skilled in creating efficient, user-centric web applications, and optimizing performance. Proficient in UI/UX design and full-stack development, with experience in code reviews, continuous improvement, and integration of industry trends.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="../../../public/landing/profile2.jpg" className="img-fluid" alt="Profile" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>UI/UX Designer &amp; ME(A)RN Stack Developer</h3>
              <p className="fst-italic">
                Enthusiastic about designing and developing user-focused, high-performance web applications.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><span className="material-symbols-outlined">chevron_right</span><strong>Birthday:</strong> <span>16 Jul 2002</span></li>
                    <li><span className="material-symbols-outlined">chevron_right</span> <strong>Phone:</strong> <span>+91 8589896113</span></li>
                    <li><span className="material-symbols-outlined">chevron_right</span> <strong>City:</strong> <span>Attingal, Thiruvananthapuram</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><span className="material-symbols-outlined">chevron_right</span> <strong>Age:</strong> <span>22</span></li>
                    <li><span className="material-symbols-outlined">chevron_right</span> <strong>Degree:</strong> <span>BCA</span></li>
                    <li><span className="material-symbols-outlined">chevron_right</span> <strong>Email:</strong> <span>krishnasabu885@gmail.com</span></li>
                  </ul>
                </div>
              </div>
              <p>
                Passionate about problem-solving and consistently improving application performance. Experienced in working collaboratively to deliver robust, user-friendly web solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              Highlighting education, experience, and skills as a ME(A)RN Stack Developer with a focus on efficient development practices and industry trends.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>ME(A)RN Stack Developer Intern</h4>
                <h5>July 2023 - Present</h5>
                <p><em>Synnefo Solutions, Kochi</em></p>
                <ul>
                  <li>Developed full-stack applications using the ME(A)RN stack with focus on performance and UI/UX.</li>
                  <li>Collaborated in code reviews and implemented new features based on industry trends.</li>
                  <li>Reduced load times by 15% through performance optimization techniques.</li>
                  <li>Maintained application stability by troubleshooting and debugging code issues.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>BCA: Bachelor of Computer Applications</h4>
                <h5>2020 - 2023</h5>
                <p><em>University Institute of Technology, Vakkom, Attingal, Kerala University</em></p>
              </div>
              <div className="resume-item">
                <h4>Higher Secondary: Computer Science</h4>
                <h5>2018 - 2020</h5>
                <p><em>Navabharath Higher Secondary School, Valiyakunnu, Attingal</em></p>
              </div>
              <h3 className="resume-title">Technical Skills</h3>
              <ul>
                <li><strong>Front-End:</strong> HTML, CSS, JavaScript (ES6+), ReactJS, Bootstrap</li>
                <li><strong>Back-End:</strong> NodeJS, ExpressJS, MongoDB</li>
                <li><strong>Version Control:</strong> Git & GitHub</li>
                <li><strong>Tools:</strong> VSCode, Heroku, Cloudinary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Get in touch for project collaboration or inquiries.</p>
          </div>
          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <h4><span className="material-symbols-outlined">location_on</span> Location:</h4>
                  <p>Chandramangalam, Koonthalloor, Chirayinkeezhu PO, Kerala, India, 695304</p>
                </div>
                <div className="email">
                  <h4><span className="material-symbols-outlined">mail</span> Email:</h4>
                  <p>krishnasabu885@gmail.com</p>
                </div>
                <div className="phone">
                  <h4><span className="material-symbols-outlined">smartphone</span> Call:</h4>
                  <p>+91 8589896113</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7562794501716!2d76.86292771431355!3d8.632606793804908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05f8f8ac282b19%3A0xe42f7de334f09fef!2sChirayinkeezhu%20Post%20Office!5e0!3m2!1sen!2sin!4v1665663306924"
                  frameBorder="0"
                  style={{ border: 0, width: "100%", height: 290 }}
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Portfoliopage;
