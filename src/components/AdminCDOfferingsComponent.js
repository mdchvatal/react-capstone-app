import React, { Component } from 'react';
import { Alert, Button, Input, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link, NavLink, Redirect, withRouter} from 'react-router-dom';

class AdminCDOfferings extends Component {
    constructor(props) {    
        super(props);
    }   
    
    render() {        
        return(
            <div className="container">
                <div className="row align-items-start">
                    <h1>CD Offerings</h1>
                    <div className="col-12 col-md m-1">
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(AdminCDOfferings);