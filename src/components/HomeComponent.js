//this should have the login form in a container - see wireframes
import React, { Component } from 'react';
import { Jumbotron, Card, CardBody, CardText, Container, CardTitle} from 'reactstrap';
import Login from './LoginComponent';

class Home extends Component {
    constructor(props) {    
        super(props);
    }

    componentWillUnmount() {
       
    }

    render () {
        return(
            <Jumbotron className=".container-fluid">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <h1>LET'S ADD A PICTURE!</h1>
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

export default Home;