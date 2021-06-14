import React, { Component } from 'react';
import { Jumbotron, Card, Alert, Button, Input, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link, NavLink, Redirect, withRouter} from 'react-router-dom';

import Login from './LoginComponent';

class Admin extends Component {
    constructor(props) {    
        super(props);
    }   


    render () {
        return(
            <Jumbotron className=".container-fluid">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <h1>LET'S ADD AN ADMIN PICTURE!</h1>
                        </div>
                        
                        <Card className="col-3" color='white'>
                            <Login loginUser={this.props.loginUser} resetLoginForm={this.props.resetLoginForm} bankingSession={this.props.bankingSession} 
                                fetchAccountHolderData={this.props.fetchAccountHolderData}/>
                        </Card>
                    </div>    
                </div>
            </Jumbotron>
        );
    }
}

export default withRouter(Admin);