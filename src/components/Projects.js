import React from 'react';
import p1 from '../assets/Screen Shot 2020-10-05 at 2.51.21 AM.png'
import p2 from '../assets/Screen Shot 2020-10-11 at 12.17.30 AM.png'
import p3 from '../assets/Screen Shot 2020-10-11 at 12.29.28 AM.png'
import p4 from '../assets/screen-shot.png'

const Projects = () => {
    return (
        <div>
            <section className="site-section" id="section-portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-heading text-center col-md-12">
                            <h2>Featured <strong>Projects</strong></h2>
                        </div>
                    </div>
                    <div className="row grid">
                        <div className="single-portfolio col-md-6 all mockup">
                            <div className="relative">
                                <a href="https://qquizzyy.herokuapp.com/" target="_blank" className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src={p1} alt=""/>
                                </a>                            
                            </div>
                            <div className="p-inner">
                                <h4>Quizzy - Live Quizzing Application</h4>
                                <div className="cat">MongoDB, Express.js, React.js, Node.js, Socket.io</div>
                            </div>                                         
                        </div>
                        <div className="single-portfolio col-md-6 all mockup">
                            <div className="relative">
                                <a href="http://uphoria.herokuapp.com/" target="_blank" className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src={p2} alt="" style={{width: '35%', margin: '0 auto'}}/>
                                </a>                                 
                            </div>
                            <div className="p-inner">
                                <h4>Uphoria - Video Sharing Platform</h4>
                                <div className="cat">GraphQl, Apollo Client, React.js (Mobile Version Only)</div>
                            </div>                                         
                        </div>                            
                        <div className="single-portfolio col-md-6 all packaging">
                            <a href="https://cheap-flight-search.herokuapp.com/" target="_blank" className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src={p3} alt=""/>
                                </div>
                            </a>
                            <div className="p-inner">
                                <h4 style={{paddingTop: '15px'}}>Cheap Flight Search </h4>
                                <div className="cat">Node.js, Express.js, PostgreSQL</div>
                            </div>
                        </div>
                        <div className="single-portfolio col-md-6 all packaging">
                            <div className="relative">
                                <a href="https://subrataroy321.github.io/LUDO/" target="_blank" className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src={p4} alt=""/>
                                </a>
                            </div> 
                            <div className="p-inner">
                                <h4>LUDO - Board Game</h4>
                                <div className="cat">HTML, CSS, JAVASCRIPT</div>
                            </div>
                        </div>
                    </div>
				</div>
            </section>
        </div>
    )
}

export default Projects