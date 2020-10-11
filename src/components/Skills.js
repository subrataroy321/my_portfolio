import React from 'react';
import rlogo from '../assets/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.png'
import htmllogo from '../assets/HTML5_Badge_512.png'
import csslogo from '../assets/kisspng-cascading-style-sheets-logo-clip-art-css3-html-5b7617f67bd3d6.3499284915344660385072.png'
import bslogo from '../assets/Screen Shot 2020-10-10 at 10.56.36 PM.png'
import pylogo from '../assets/600px-Python-logo-notext.svg.png'
import pglogo from '../assets/1200px-Postgresql_elephant.svg.png'
import djlogo from '../assets/django-logo.png'
import nodelogo from '../assets/Screen Shot 2020-10-10 at 10.57.44 PM.png'
import explogo from '../assets/express-routing-logo-65137ed3c844d05124dcfdab28263c21.png'
import jslogo from '../assets/js.png'
import mdblogo from '../assets/Screen Shot 2020-10-10 at 10.57.11 PM.png'

const Skills = () => {
    return (
        <div>
            <section className="site-section " id="section-resume">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="section-heading text-center">
                                <h2>My <strong>Skills</strong></h2>
                            </div>
                        </div>
                        <div className=" resume-container">
                            <div className="resume-item">
                                <img src={htmllogo} className="skill-logo" alt="skill logo"/>
                                <h3>HTML</h3>
                            </div>

                            <div className="resume-item">
                                <img src={csslogo} className="skill-logo" alt="skill logo"/>
                                <h3>CSS</h3>
                            </div>

                            <div className="resume-item">
                                <img src={bslogo} className="skill-logo" alt="skill logo"/>
                                <h3>Bootstrap</h3>
                            </div>

                            <div className="resume-item">
                                <img src={jslogo} className="skill-logo" alt="skill logo"/>
                                <h3>JavaScript</h3>
                            </div>

                            <div className="resume-item">
                                <img src={rlogo} className="skill-logo" alt="skill logo"/>
                                <h3>React.js</h3>
                            </div>

                            <div className="resume-item">
                                <img src={nodelogo} className="skill-logo" alt="skill logo"/>
                                <h3>Node.js</h3>
                            </div>
                            <div className="resume-item">
                                <img src={explogo} className="skill-logo" alt="skill logo"/>
                                <h3>Express.js</h3>
                            </div>
                            <div className="resume-item">
                                <img src={pylogo} className="skill-logo" alt="skill logo"/>
                                <h3>Python</h3>
                            </div>
                            <div className="resume-item">
                                <img src={djlogo} className="skill-logo" alt="skill logo"/>
                                <h3>Django</h3>
                            </div>
                            <div className="resume-item">
                                <img src={pglogo} className="skill-logo" alt="skill logo"/>
                                <h3>PostgreSQL</h3>
                            </div>
                            <div className="resume-item">
                                <img src={mdblogo} className="skill-logo" alt="skill logo"/>
                                <h3>MongoDB</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills