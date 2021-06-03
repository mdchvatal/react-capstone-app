import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router';

class Header extends Component {
    super(props) {
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    render() {
        return(
            <>
                <Navbar style={{backgroundColor: '#f1f1f1'}} expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/home">
                            MeritBank //*placeholder*//
                            /*<img  alt="nameLogo"/>*/
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Checking</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem tag={Link} to="/checking/merit-checking">Merit Checking</DropdownItem>
                                        <DropdownItem tag={Link} to="/checking/business-checking">Business Checking</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Savings</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem tag={Link} to="/savings/merit-savings">Merit Savings</DropdownItem>
                                        <DropdownItem tag={Link} to="/savings/business-savings">Business Savings</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>IRA</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem tag={Link} to="/ira/roth-ira">Roth IRA</DropdownItem>
                                        <DropdownItem tag={Link} to="/ira/rollover-ira">Rollover IRA</DropdownItem>
                                        <DropdownItem tag={Link} to="/ira/ira">IRA</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink href="/cd-accounts">CD</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        )
    }
}

export default Header;