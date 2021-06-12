import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    
    return(
        <div className="footer">
            <div className="container centering">
                <div className="row centering">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/account-holder">Account Page</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                        1 Merit America Way<br />
                        Dallas, TX<br />
                        USA<br />
                        <i className="fa fa-phone fa-lg"></i>: +1 214 123-4567<br />
                        <i className="fa fa-fax fa-lg"></i>: +1 214 123-4568<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:contact@meritamerica.com">
                            contact@meritamerica.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <h5>Connect With Us</h5>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2021 Merit Bank</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;