
import React, { Component } from 'react';
import { Jumbotron, Card, CardBody, CardText, Container, CardTitle} from 'reactstrap';
import Login from './LoginComponent';

class Home extends Component {
    constructor(props) {    
        super(props);
    }

    render () {
        return(
            <Jumbotron className=".container-fluid" style={{ backgroundImage:"linear-gradient(rgba(350,350,350,0.3), rgba(350,350,350,0.3)), url(assets/images/Dallas-Skyline-for-web.jpg)",
                                                            backgroundPositionY: 'center',
                                                            height: '100',
                                                            width: '100',
                                                            resizeMode: "contain",
                                                            objectFit: 'none',
                                                            opacity: '0.9'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-9">
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