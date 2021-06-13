import React, { Component } from 'react';
import { Alert, Button, Input, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link, NavLink, Redirect, withRouter} from 'react-router-dom';

class Admin extends Component {
    constructor(props) {    
        super(props);
    }   
    
    render() {        
        return(
            <div className="container">
                <div className="row align-items-start">
                    Admin Home
                    <div className="col-12 col-md m-1">
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(Admin);