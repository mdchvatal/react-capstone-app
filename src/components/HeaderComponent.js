import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

import Login from './LoginComponent';

function RenderLoginButton({isAuthenticated, toggleModal, logoutUser}) {
    if (isAuthenticated) {
        return (
            <Button outline onClick={() => logoutUser()}><span className="fa fa-sign-in fa-lg"></span>Sign Out</Button>
        );
    } else {
        return (
            <Button outline onClick={toggleModal}><span className="fa fa-sign-in fa-lg"></span>Sign In</Button>
        );
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
        console.log('Header Properties');
        console.log(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        if (!this.state.isModalOpen) {
            this.props.resetLoginForm();
            this.props.bankingSession.errorMessage = null;
            this.props.bankingSession.isStarting = true;
        }

        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        if (!this.props.bankingSession || !this.props.bankingSession.isAuthenticated) {
            return(
                <React.Fragment>
                    <Navbar expand="md">
                        <div className="container centering">
                            <NavbarToggler onClick={this.toggleNav}/>
                            <NavbarBrand className="mr-auto" href="/home"> 
                                <img alt="nameLogo" src="assets/images/logo.png" alt="Merit Bank" />
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>                            
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <RenderLoginButton isAuthenticated={this.props.bankingSession.isAuthenticated} toggleModal={this.toggleModal} logoutUser={this.props.logoutUser} />
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                    <Modal isOpen={this.state.isModalOpen && this.props.bankingSession.isStarting} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Login loginUser={this.props.loginUser} resetLoginForm={this.props.resetLoginForm} bankingSession={this.props.bankingSession} />
                        </ModalBody>
                    </Modal>
                </React.Fragment>
            );
        } else if (this.props.bankingSession.isAuthenticated) {
            if (this.props.bankingSession.role === 'ADMIN') {
                return(
                    <React.Fragment>
                        <Navbar expand="md">
                            <div className="container centering">
                                <NavbarToggler onClick={this.toggleNav}/>
                                <NavbarBrand className="mr-auto" href="/home"> 
                                    <img alt="nameLogo" src="assets/images/logo.png" alt="Merit Bank" />
                                </NavbarBrand>
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/admin/users">Users</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/admin/cdOfferings">CD Offerings</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/admin/accountHolders">Account Holders</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <RenderLoginButton isAuthenticated={this.props.bankingSession.isAuthenticated} toggleModal={this.toggleModal} logoutUser={this.props.logoutUser} />
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                        </Navbar>
                        <Modal isOpen={this.state.isModalOpen && this.props.bankingSession.isStarting} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                            <ModalBody>
                                <Login loginUser={this.props.loginUser} resetLoginForm={this.props.resetLoginForm} bankingSession={this.props.bankingSession} />
                            </ModalBody>
                        </Modal>
                    </React.Fragment>
                );
            } else {
                return(
                    <React.Fragment>
                        <Navbar expand="md">
                            <div className="container centering">
                                <NavbarToggler onClick={this.toggleNav}/>
                                <NavbarBrand className="mr-auto" href="/home"> 
                                    <img alt="nameLogo" src="assets/images/logo.png" alt="Merit Bank" />
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
                                            <NavLink className="nav-link" to="/cd-accounts">CD</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <RenderLoginButton isAuthenticated={this.props.bankingSession.isAuthenticated} toggleModal={this.toggleModal} logoutUser={this.props.logoutUser} />
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                        </Navbar>
                        <Modal isOpen={this.state.isModalOpen && this.props.bankingSession.isStarting} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                            <ModalBody>
                                <Login loginUser={this.props.loginUser} resetLoginForm={this.props.resetLoginForm} bankingSession={this.props.bankingSession} />
                            </ModalBody>
                        </Modal>
                    </React.Fragment>
                );
            }
        }
    }
}

export default Header;