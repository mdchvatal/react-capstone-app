import React, { Component } from 'react';
import { Alert, Button, Label, Table, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';

import { Loading } from './LoadingComponent';
import MeritJumbotron from './MeritJumbtronComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderCDOffering({item, bankingSession, editItem}) {
    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td><EditForm item={item} bankingSession={bankingSession} editItem={editItem} /></td>
            <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>
            <td>{item.term}</td>
            <td>{item.interestRate}</td>
        </tr>
    );
}

class EditForm extends Component {
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

        // Append CD offering id.
        const cdOffering = { ...values, id: this.props.item.id };
        this.props.editItem(this.props.bankingSession, cdOffering);
    }

    render() {
        return(
            <React.Fragment>
                <Button color="link" onClick={this.toggleModal}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Edit CD Offering</ModalHeader>
                    <ModalBody>
                        <Form model="currentCDOffering" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="term" className="col-form-label">Term</Label>
                                <Col md={10}>
                                    <Control type="number" model=".term" id="term" name="term"
                                        placeholder="Term"
                                        className="form-control"
                                        validateOn="blur"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".term"
                                        show="touched"
                                        messages={{
                                            required: 'Required. ',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="interestRate" className="col-form-label">Interest Rate</Label>
                                <Col md={10}>
                                    <Control type="number" model=".interestRate" id="interestRate" name="interestRate"
                                        placeholder="Interest Rate"
                                        className="form-control"
                                        validateOn="blur"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".interestRate"
                                        show="touched"
                                        messages={{
                                            required: 'Required. '
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>                
            </React.Fragment>
        );
    }
}

class AdminCDOfferings extends Component {
    constructor(props) {    
        super(props); 

        this.mapCDOffering = this.mapCDOffering.bind(this);        
    }

    componentDidMount() {
        console.log('CD Offerings Props:');
        console.log(this.props);

        if (this.props.status === 'idle') {
            this.props.fetchCDOfferings(this.props.bankingSession);
        } else if (this.props.item && this.props.item.status === 'succeeded') {
            this.props.clearItem();
            this.props.fetchCDOfferings(this.props.bankingSession);
        }
    }

    mapCDOffering(item) {
        return (
            <RenderCDOffering key={item.id} item={item} bankingSession={this.props.bankingSession} editItem={this.props.editItem} />
        );
    }
    
    render() {
        if (this.props.loading) {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <h1>CD Offerings</h1>
                        <Loading />
                    </div>
                </div>
            )
        } else {
            if (this.props.errorMessage) {
                return(
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>CD Offerings</h1>
                            <Alert color="danger">
                                {this.props.errorMessage}
                            </Alert>
                        </div>
                    </div>
                );
            } else {
                return(
                    <div>
                    <MeritJumbotron/>
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>CD Offerings</h1>
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
                                                    <th>Term</th>
                                                    <th>Interest Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.cdOfferings.map(this.mapCDOffering)
                                                }
                                            </tbody>
                                        </Table>
                                    </Fade>
                                </Stagger>
                            </div>
                        </div>
                    </div>
                    </div>
                );    
            }
        }
    }
}

export default withRouter(AdminCDOfferings);