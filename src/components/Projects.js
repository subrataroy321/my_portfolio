import React from 'react';
import p1 from '../assets/Screen Shot 2020-10-05 at 2.51.21 AM.png'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.jpg'

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
                                <a href="images/p1.jpg" className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src={p1} alt=""/>
                                </a>                            
                            </div>
                            <div className="p-inner">
                                <h4>Quizzy - a live quizzing app</h4>
                                <div className="cat">MongoDB, Express.js, React.js, Node.js, Socket.io</div>
                            </div>                                         
                        </div>
                        <div className="single-portfolio col-md-6 all mockup">
                            <div className="relative">
                                <a href="#" className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src={p2} alt=""/>
                                </a>                                 
                            </div>
                            <div className="p-inner">
                                <h4>Product Box Package Mockup</h4>
                                <div className="cat">Mockup</div>
                            </div>                                         
                        </div>                            
                        <div className="single-portfolio col-md-6 all packaging">
                            <a href="#" className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src={p3} alt=""/>
                                </div>
                            </a>
                            <div className="p-inner">
                                <h4>Creative Package Design</h4>
                                <div className="cat">Packaging</div>
                            </div>
                        </div>
                        <div className="single-portfolio col-md-6 all packaging">
                            <div className="relative">
                                <a href="#" className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src={p4} alt=""/>
                                </a>
                            </div> 
                            <div className="p-inner">
                                <h4>Packaging Brand</h4>
                                <div className="cat">Packaging</div>
                            </div>
                        </div>
                    </div>
				</div>
            </section>
        </div>
    )
}

export default Projects