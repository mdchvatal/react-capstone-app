import React, { Component } from 'react';
import { Jumbotron, Card, CardBody, CardText, Container, CardTitle} from 'reactstrap';


class MeritJumbotron extends Component {
    constructor(props) {    
        super(props);
    }

    render () {
        return(
            <Jumbotron className="form-inline justify-content-center" style={{ backgroundImage:"linear-gradient(rgba(350,350,350,0.3), rgba(350,350,350,0.3)), url(assets/images/Dallas-Skyline-for-web.jpg)",
                                                            backgroundPositionY: 'center',
                                                            height: '100',
                                                            width: '100',
                                                            resizeMode: "contain",
                                                            objectFit: 'none',
                                                            opacity: '0.9'}}>
                <div className="container">
                    <div className="form-inline justify-content-center">
                        <div className="col-4">
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-1">
                                <img alt="logo" src="assets/images/merit_logo.png" alt="Merit Bank Logo" height='75' borderRadius= '50%'/>
                            </div>
                        </div>
                        
                        
                    </div>    
                </div>
            </Jumbotron>
        );
    }
}

export default MeritJumbotron