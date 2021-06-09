import React, { Component } from 'react';
import { Alert, Button, Input, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Login extends Component {
    constructor(props) {    
        super(props);        
        this.handleSubmit = this.handleSubmit.bind(this);
    }   
    
    handleSubmit(values) {
        console.log("Submit values: " + values);
        this.props.bankingSession.isStarting = true;
        this.props.loginUser(values.username, values.password);
        this.props.resetLoginForm();
    }

    render() {
        return(
            <React.Fragment>
                <Form model="credentials" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="username" md={2}>First Name</Label>
                        <Col md={10}>
                            <Control.text model=".username" id="username" name="username"
                                placeholder="Username"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".username"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="password" md={2}>Last Name</Label>
                        <Col md={10}>
                            <Control type="password" model=".password" id="password" name="password"
                                placeholder="Password"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size:10, offset: 2}}>
                            {this.props.bankingSession.errorMessage && <Alert color="danger">{this.props.bankingSession.errorMessage}</Alert>}
                            <Button type="submit" color="primary">
                                Sign in
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        );
    }

}

export default Login;