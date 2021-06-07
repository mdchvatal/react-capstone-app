//this should have the login form in a container - see wireframes
import React, { Component } from 'react';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Login from './LoginComponent';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render () {
        return(
            <React.Fragment>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-9">
                                <h1>LET'S ADD A PICTURE!</h1>
                            </div>
                            <div className="col-3">
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>Sign In</Button>
                                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                                    <ModalBody>
                                        <Login loginUser={this.props.loginUser} resetLoginForm={this.props.resetLoginForm} />
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>    
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Home;