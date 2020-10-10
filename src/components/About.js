import React from 'react';
import hero from '../assets/me-gray.png'

const About = () => {
    return (
        <div>
            <section className="site-section" id="section-about">
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                            <img src={hero} alt="placeholder" className="img-fluid"/>
                        </div>
                        <div className="col-lg-5 pl-lg-5">
                            <div className="section-heading">
                                <h2>About <strong>Me</strong></h2>
                            </div>
                            <p className="lead">I am a creative-minded, solutions-driven full-stack software developer and passionate about building new ideas, bringing solutions to real life, I can build a front-end website to back-end database. I have the learnability to explore new and I am motivated by the feedback of team mates.</p>
                            <p>
                                <a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
                                <span> </span>
                                <a href="../assets/Subrata Roy Resume (1).docx (1).pdf" className="btn btn-secondary px-4 py-2 btn-sm" target="_blank" download>Download CV</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About