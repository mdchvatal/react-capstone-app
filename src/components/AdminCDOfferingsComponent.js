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
            <div>
                CD Offerings will go here.
            </div>
        );
    }

}

export default withRouter(AdminCDOfferings);