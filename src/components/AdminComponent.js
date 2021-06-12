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
            <div>
                Here!
            </div>
        );
    }

}

export default withRouter(Admin);