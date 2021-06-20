import React, { Component } from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Alert, Button, Label, Table, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

import { Loading } from './LoadingComponent';

function RenderUser({user}) {
    return (
        <tr>
            <th scope="row">{user.id}</th>
            <td><Button color="link"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button></td>
            <td><DeleteForm userId={user.id} /> </td>
            <td>{user.username}</td>
            <td>{user.role}</td>
        </tr>
    );
}

class DeleteForm extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isModalOpen: false
        };
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        //this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);        
    }

    render() {
        return(
            <span>
                <Button color="link" onClick={this.toggleModal}><i class="fa fa-trash-o" aria-hidden="true"></i></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
              <ModalHeader toggle={this.toggleModal}>Delete User</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>                    
                        <Row className="form-group">
                            <Label md={12}>Do you really want to delete the user?</Label>
                        </Row>
                        
                        <Row className="form-group">
                            <Col md={{size: 4, offset: 2}}>
                                <Button color="secondary">
                                    Cancel
                                </Button>
                            </Col>
                            <Col md={{size: 4, offset: 2}}>
                                <Button type="submit" color="danger">
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                     </LocalForm>
                    </ModalBody>
                </Modal>                
            </span>
        );
    }
}

class AdminUsers extends Component {
    constructor(props) {    
        super(props); 
    }

    componentDidMount() {
        if (this.props.status === 'idle') {
            this.props.fetchUsers(this.props.bankingSession);
        }
    }
    
    render() {
        if (this.props.loading) {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <h1>Users</h1>
                        <Loading />
                    </div>
                </div>
            )
        } else {
            if (this.props.errorMessage) {
                return(
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>Users</h1>
                            <Alert color="danger">
                                {this.props.errorMessage}
                            </Alert>
                        </div>
                    </div>
                );
            } else {
                return(
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>Users</h1>
                            <h5 className="list-actions"><i class="fa fa-plus" aria-hidden="true"></i>Add New</h5>
                            <div className="col-12 col-md m-1">
                                <Stagger in>
                                    <Fade in>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                    <th>Username</th>
                                                    <th>Role</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.users.map((user) => {
                                                        return (
                                                            <RenderUser user={user} />
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </Fade>
                                </Stagger>
                            </div>
                        </div>
                    </div>
                );    
            }
        }
    }
}

export default withRouter(AdminUsers);