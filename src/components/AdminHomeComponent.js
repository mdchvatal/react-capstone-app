import React, { Component } from 'react';
import { Jumbotron, Card, Alert, Button, Input, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link, NavLink, Redirect, withRouter} from 'react-router-dom';

import Login from './LoginComponent';
import MeritJumbotron from './MeritJumbtronComponent';

class Admin extends Component {
    constructor(props) {    
        super(props);
    }   


    render () {
        return(
            <MeritJumbotron/>
        );
    }
}

export default withRouter(Admin);