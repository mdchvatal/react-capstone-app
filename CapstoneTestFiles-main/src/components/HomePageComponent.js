//this should have the login form in a container - see wireframes
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, FormGroup,  
    Label, Input, Form, Row, Col} from 'reactstrap';
import {Header} from './HeaderComponent';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    };

    handleLogin(values) {
        this.props.postLogin1(values);
        values.preventDefault();
    }

    render () {
        return(
            <>
                <Header/>
                    <Jumbotron>
                        <div className="container">
                            <div className="row row-header">
                                <div className="col-9">
                                    <h1>LET'S ADD A PICTURE!</h1>
                                </div>
                                <div className="col-3">
                                    <Form model="login" onSubmit={(values) => this.handleLogin(values)}>
                                        <FormGroup>
                                            <Label htmlFor="username">Username</Label>
                                            <Control.text model=".username" id="username" name="username" placeholder="Username" className="form-control" validators={}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="password">Password</Label>
                                            <Control.text model=".password" id="password" name="password" placeholder="Password" className="form-control" validators={}/>
                                        </FormGroup>
                                        <Button>Log In</Button>
                                    </Form>
                                </div>
                            </div>    
                        </div>
                    </Jumbotron>
            </>
        )
    }
}

export default HomePage;

    