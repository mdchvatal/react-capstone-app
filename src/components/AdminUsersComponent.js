import React, { Component } from 'react';
import { Alert, Button, Input, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link, NavLink, Redirect, withRouter} from 'react-router-dom';

import { Loading } from './LoadingComponent';

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
        console.log('AdminComponent.render');
        console.log(this.props);

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
                            <div className="col-12 col-md m-1">
                            </div>
                        </div>
                    </div>
                );    
            }
        }
    }

}

export default withRouter(AdminUsers);