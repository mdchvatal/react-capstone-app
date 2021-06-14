import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

import { Loading } from './LoadingComponent';

function RenderAccount({account}) {
    return (
            <tr>
                <th scope="row">{account.id}</th>
                <td>{account.balance}</td>
                <td>{account.interestRate}</td>
            </tr>
    );   
} 

class SavingsAccounts extends Component {
constructor(props) {    
    super(props); 
}

render() {
    if (this.props.status === 'loading') {
        return(
            <div className="container">
                <div className="row align-items-start">
                    <h1>Users</h1>
                    <Loading />
                </div>
            </div>
        )
    } else {
        if (this.props.errorMessage) {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <h1>Users</h1>
                        <Alert color="danger">
                            {this.props.errorMessage}
                        </Alert>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <h1>Users</h1>
                        <div className="col-12 col-md m-1">
                            <Stagger in>
                                <Fade in>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Savings Account Number</th>
                                                <th>Balance</th>
                                                <th>Interest Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.accounts.map((account) => {
                                                    return (
                                                        <RenderAccount account={account} />
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </Fade>
                            </Stagger>
                        </div>
                    </div>
                </div>
            );    
        }
    }
}
}

export default withRouter(SavingsAccounts);

