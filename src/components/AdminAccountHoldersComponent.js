import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

class AdminAccountHolders extends Component {
    constructor(props) {    
        super(props);
    }   
    
    render() {        
        return(
            <div className="container">
                <div className="row align-items-start">
                    <h1>Account Holders</h1>
                    <div className="col-12 col-md m-1">
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(AdminAccountHolders);