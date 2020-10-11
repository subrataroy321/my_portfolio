import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center">
                            <p>
                                <a href="https://www.linkedin.com/in/subrataroy321/" target="_blank" className="social-item"><span className="icon-linkedin2"></span></a>
                                <a href="https://github.com/subrataroy321" target="_blank" className="social-item"><span className="icon-github2"></span></a>
                                <a href="https://stackoverflow.com/users/story/14428929" target="_blank" className="social-item"><span className="icon-stackoverflow"></span></a>
                                <a href="mailto:subrata.r321@gmail.com, hello@subrataroy.me" className="social-item"><span className="icon-email"></span></a>
                            </p>
                            <p>© Copyright Reserved by Subrata Roy</p>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </div>
    )
}

export default Footer