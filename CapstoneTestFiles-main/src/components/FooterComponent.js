import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,} from 'reactstrap';

class Footer extends Component {
    constructor(props){
        super(props); //alows footer comp to bring props from whatever declares comp
    }

    render(){
        return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto"> <p>Connect with us</p></div>
                    <a className="btn btn-social-icon btn-linkedin" target="_blank" href= "http://www.linkedin.com/in/spencerlafarge">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="btn btn-social-icon btn-linkedin" target="_blank" href= "http://www.linkedin.com/in/spencerlafarge">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="btn btn-social-icon btn-linkedin" target="_blank" href= "http://www.linkedin.com/in/spencerlafarge">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>

            </div>
        </div>
        )
    }
}
export default Footer;