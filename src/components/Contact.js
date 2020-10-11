import React, { useState } from 'react';
import { init, sendForm } from 'emailjs-com'

init('user_d1b0344EQ1e6Vu6Kkyn4D');

const Contact = () => {
    let [showForm, setShowform] = useState('block')
    let [message, setMessage] = useState('')

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            sendForm('gmail', 'template_mj8jrye', this);
            setShowform('none')
            setMessage('Message Successfully Send')
            setTimeout(function(){
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('number').value = "";
                document.getElementById('message').value = "";
                setShowform('block')
                setMessage('')
            }, 3000)
        });
    }

    return (
        <div>
            <section className="site-section" id="section-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="section-heading text-center">
                                <h2>Get <strong>In Touch</strong></h2>
                            </div>
                        </div>

                        <div className="col-md-7 mb-5 mb-md-0">
                            <h3>{message}</h3>
                            <form className="site-form" id="contact-form" style={{display: `${showForm}`}}>
                                <h3 className="mb-5">Get In Touch</h3>
                                <div className="form-group">
                                    <input type="text" className="form-control px-3 py-4" placeholder="Your Name" name="user_name" id="name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control px-3 py-4" placeholder="Your Email" name="user_email" id="email"/>
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control px-3 py-4" placeholder="Your Phone" name="contact_number" id="number"/>
                                </div>
                                <div className="form-group mb-5">
                                    <textarea className="form-control px-3 py-4"cols="30" rows="10" placeholder="Write a Message" name="message" id="message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-primary  px-4 py-3" value="Send Message"/>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 pl-md-5">
                            <h3 className="mb-5">My Contact Details</h3>
                            <ul className="site-contact-details">
                                <li>
                                    <span className="text-uppercase" style={{color: 'white'}}>Email</span>
                                    <a href="mailto:subrata.r321@gmail.com, hello@subrataroy.me">subrata.r321@gmail.com</a>
                                </li>
                                <li>
                                    <span className="text-uppercase" style={{color: 'white'}}>Phone</span>
                                    <a href="tel:+16784318328">+1 678 431-8328</a>
                                </li>
                                <li>
                                    <span className="text-uppercase" style={{color: 'white'}}>Fax</span>
                                    <a href="fax:+14044244421">+1 404 424-4421</a>
                                </li>
                                <li>
                                    <span className="text-uppercase" style={{color: 'white'}}>Address</span>
                                    <p style={{color: '#bac964'}}>
                                        4273 Avonridge Dr, <br/>
                                        Stone Mountain, GA, 30083  <br/>
                                        ( Atlanta metro area and nearby cities )
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact