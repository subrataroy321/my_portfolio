import React from 'react';
import rlogo from '../assets/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.png'

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
                                <span className="date"><span className="icon-calendar"></span> March 2013 - Present</span>
                                <h3>Masteral in Information Technology</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                <span className="school">New York University</span>
                            </div>

                            <div className="resume-item">
                                <img src={rlogo} className="skill-logo" alt="skill logo"/>
                                <h3>React.js</h3>
                            </div>

                            <div className="resume-item">
                                <span className="date"><span className="icon-calendar"></span> March 2013 - Present</span>
                                <h3>Masteral in Information Technology</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                <span className="school">New York University</span>
                            </div>

                            <div className="resume-item">
                                <span className="date"><span className="icon-calendar"></span> March 2013 - Present Deacember.</span>
                                <h3>Masteral in Information Technology</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                <span className="school">New York University</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills