//this should have the login form in a container - see wireframes
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Login from './LoginComponent';

class Home extends Component {
    render () {
        return(
            <>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-9">
                                <h1>LET'S ADD A PICTURE!</h1>
                            </div>
                            <div className="col-3">
                                <Login loginUser={this.props.loginUser} />
                            </div>
                        </div>    
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Home;